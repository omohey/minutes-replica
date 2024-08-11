import React, { forwardRef } from 'react'
import { TOrder } from '@/types/Order';
import styles from './SuggestedBatches.module.scss'

const Batches = [
    ["IAEE7V002RPZ93X4JS", "test__1"],
    ["test__2", "test__3"],
    ["test__3", "IAEE7V002RPZ93X4JS"],
    ["IAEE7V002RPZ93X4JS", "test__2"],
]


type TProps = {
    orders: TOrder[];
    onBatchHover: (batch: string[]) => () => void;
    onBatchLeave: () => void;
    onBatchClick: (batch: string[]) => () => void;
}

const SuggestedBatches = forwardRef<HTMLDivElement, TProps>(({ orders, onBatchHover, onBatchLeave, onBatchClick }, ref) => {
    return (
        <div ref={ref} className={styles.suggestedBatch}>
            <h3 className={styles.header}>Suggested Batches</h3>
            <ul className={styles.batches}>
                {Batches.map((batch) => {
                    return (
                        <li key={`batch-${batch[0]}-${batch[1]}`} className={styles.batch} onMouseEnter={onBatchHover(batch)} onMouseLeave={onBatchLeave} onClick={onBatchClick(batch)}>
                            {batch.map((order) => {
                                return (
                                    orders.find((orderItem) => orderItem.orderNumber === order) && (
                                        <React.Fragment key={order}>
                                            <div>{order}</div>
                                            <div className={styles.package}>{orders.find((orderItem) => orderItem.orderNumber === order)?.packageName}</div>
                                        </React.Fragment>
                                    )
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
});

SuggestedBatches.displayName = 'SuggestedBatches'

export default SuggestedBatches
