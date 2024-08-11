"use client";
import React, { useState, forwardRef, useCallback } from 'react'
import clsx from 'clsx';
import styles from './OrdersRow.module.scss'
import BatchOrders from './BatchOrders';
import { flagsMap } from '@/constants/flags';
import { statusMap } from '@/constants/status';
import { ArrowDown, MarketplaceLogoMap } from '../SVGs';

type TProps = {
    marketPlace: string;
    orderNumber: string;
    packageName: string;
    status: string;
    flags: string[];
    time: string;
    eta: string;
    customerName: string;
    address: string;
    contactNumber: string;
    batchOrders?: string[];
}

const OrdersRow = forwardRef<HTMLTableRowElement, TProps>(({ marketPlace, orderNumber, packageName, status, flags, time, eta, customerName, address, contactNumber, batchOrders }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    return (
        <>
            <tr className={styles.container} ref={ref} onClick={toggleExpanded}>
                <td>
                    <div className={styles.orderNumber}>
                        {MarketplaceLogoMap[marketPlace as keyof typeof MarketplaceLogoMap]}
                        <p>{orderNumber}</p>
                    </div>
                    <button className={styles.focusButton} />
                </td>
                <td>
                    <div className={styles.package}>
                        <p>{packageName}</p>
                    </div>
                </td>
                <td>
                    <div className={styles.status} style={{ color: statusMap[status]?.color, backgroundColor: statusMap[status]?.backgroundColor }}>
                        <p>{status}</p>
                    </div>
                </td>
                <td>
                    <div className={styles.flagsContainer}>
                        {flags && flags.map((flag) => {
                            return (
                                <div key={flag} className={styles.flags}>
                                    <img src={`/Flag/${flagsMap[flag]}.svg`} alt={flag} />
                                </div>
                            )
                        }
                        )}
                    </div>
                </td>
                <td>
                    <div className={styles.delivery}>
                        <p className={styles.time}>{time}</p>
                        <p className={styles.eta}>{eta}</p>
                    </div>
                </td>
                <td>
                    <div>
                        <ArrowDown className={clsx(styles.dropdown, { [styles.expanded]: isExpanded })} />
                    </div>
                </td>
            </tr>

            <tr>
                <td colSpan={6}>
                    <div id='test' className={clsx(styles.details, {
                        [styles.active]: isExpanded
                    })}>
                        <div className={styles.customerDetails}>
                            <h5>Name</h5>
                            <p>{customerName}</p>
                            <h5>Address</h5>
                            <p>{address}</p>
                            <h5>Contact Number</h5>
                            <p>{contactNumber}</p>
                        </div>
                        <div>
                            {batchOrders && <BatchOrders orderNumbers={batchOrders} />}
                        </div>
                    </div>
                </td>

            </tr>

        </>
    )
});

OrdersRow.displayName = 'OrdersRow';

export default OrdersRow
