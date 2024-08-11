import React, { useCallback, useState } from 'react'

import styles from './OrdersHeader.module.scss'
import { ArrowDown } from '../SVGs';
import { TOrder } from '@/types/Order';
import clsx from 'clsx';

type TProps = {
    orders: TOrder[];
    dispatch: React.Dispatch<any>;
}
const OrdersHeader = ({ orders, dispatch }: TProps) => {
    const [filter, setFilter] = useState("Any");
    const [isClicked, setIsClicked] = useState(false);

    const toggleClicked = useCallback(() => {
        setIsClicked(prev => !prev);
    }, []);

    const filterOptions: string[] = ["Any"];
    orders.forEach(order => {
        if (!filterOptions.includes(order.status)) {
            filterOptions.push(order.status);
        }
    });

    const handleFilter = useCallback((option: string) => () => {
        setFilter(option);
        if (option === "Any") {
            dispatch({ type: 'filter', payload: "" });
            return;
        }
        dispatch({ type: 'filter', payload: option });
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.header}>Orders</h2>
                <p className={styles.activeOrders}>{(orders && orders.length) || "0"} Active</p>
            </div>
            <div className={clsx(styles.filterBox, { [styles.active]: isClicked })} onClick={toggleClicked}>
                <div className={styles.filterDisplay}>
                    <p className={styles.filterText}>{filter}</p>
                    <ArrowDown className={styles.dropdownIcon} />
                </div>
                <div className={styles.filterOptions}>
                    {filterOptions.map(option => (
                        <p key={option} onClick={handleFilter(option)}>{option}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrdersHeader
