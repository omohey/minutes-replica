import React from 'react'

import styles from './BatchOrders.module.scss'

type TProps = {
    orderNumbers: string[];
}

const BatchOrders = ({ orderNumbers }: TProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src='/Flag/batchFlag.svg' alt="Batch Orders" />
                <h5>Batch Orders</h5>
            </div>
            {orderNumbers &&
                <ul>
                    {orderNumbers.map((orderNumber) => {
                        return <li key={orderNumber}>{orderNumber}</li>
                    })}
                </ul>}
        </div>
    )
}

export default BatchOrders
