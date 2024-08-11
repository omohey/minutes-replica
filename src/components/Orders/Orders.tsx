"use client";
import React, { use, useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import styles from './Orders.module.scss'
import OrdersHeader from './OrdersHeader'
import Tableheader from '../Tableheader'
import TableSection from '../TableSection';
import OrdersRow from './OrdersRow';
import { TOrder } from '@/types/Order';
import clsx from 'clsx';

const headers = ["Order Number", "Package", "Status", "Flags", "Pickup/ Delivery ETA"];

type TProps = {
    rowsRef: React.MutableRefObject<{ [key: string]: HTMLTableRowElement | null }>;
    orders: TOrder[];
}

function reducer(state, action) {
    switch (action.type) {
        case 'filter':
            return { ...state, filter: action.payload };
    }
    throw Error('Unknown action.');
}

const Orders = ({ rowsRef, orders }: TProps) => {
    const [isFulfillmentExpanded, setIsFulfillmentExpanded] = useState(true);
    const [isDeliveryExpanded, setIsDeliveryExpanded] = useState(true);

    const toggleFulfillment = useCallback(() => {
        setIsFulfillmentExpanded(prev => !prev);
    }, []);

    const toggleDelivery = useCallback(() => {
        setIsDeliveryExpanded(prev => !prev);
    }, []);


    const [state, dispatch] = useReducer(reducer, { filter: "" });

    const filteredOrders = useMemo(() => {
        if (state.filter === "") {
            return orders;
        }
        return orders.filter(order => order.status === state.filter);
    }, [orders, state.filter]);

    const fulfillmentOrders = useMemo(() => filteredOrders.filter(order => order.fulfillment), [filteredOrders]);
    const deliveryOrders = useMemo(() => filteredOrders.filter(order => !order.fulfillment), [filteredOrders]);


    return (
        <div className={styles.container}>
            <OrdersHeader orders={orders} dispatch={dispatch} />
            <table className={styles.ordersTable}>
                <Tableheader headers={headers} dropdown />
                <tbody className={styles.pointer}>
                    <TableSection name="Fulfillment" columns={6} onClick={toggleFulfillment} expanded={isFulfillmentExpanded} />
                </tbody>
                <tbody className={clsx(styles.collapsable, { [styles.collapsed]: !isFulfillmentExpanded })}>
                    {
                        fulfillmentOrders
                            .map(order => <OrdersRow key={order.orderNumber} {...order} ref={(el) => { rowsRef.current[order.orderNumber] = el; }} />)
                    }
                </tbody>
                <tbody className={styles.pointer}>
                    <TableSection name="Delivery" columns={6} onClick={toggleDelivery} expanded={isDeliveryExpanded} />
                </tbody>
                <tbody className={clsx(styles.collapsable, { [styles.collapsed]: !isDeliveryExpanded })}>
                    {deliveryOrders.map(order => <OrdersRow key={order.orderNumber} {...order} ref={(el) => { rowsRef.current[order.orderNumber] = el; }} />)}
                </tbody>
            </table>
        </div >
    )
}

export default Orders
