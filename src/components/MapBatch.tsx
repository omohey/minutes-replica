import React, { use, useCallback, useEffect, useRef, useState } from 'react'
import Map from "@/components/Map";
import { MapProvider } from "@/providers/MapProvider";
import styles from './MapBatch.module.scss'
import orderStyles from './Orders/OrdersRow.module.scss'
import { TDriver } from '@/types/driver';
import { TOrder } from '@/types/Order';
import SuggestedBatches from './SuggestedBatches';

type TProps = {
    drivers: TDriver[];
    orders: TOrder[];
    rowsRef: React.MutableRefObject<{ [key: string]: HTMLTableRowElement | null }>;
}



const MapBatch = ({ orders, drivers, rowsRef }: TProps) => {
    const [batch, setBatch] = useState<string[]>([]);
    const [clickedBatch, setClickedBatch] = useState<string[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<TOrder[]>(orders);
    const suggestedBatchesRef = useRef<HTMLDivElement>(null);

    const onBatchHover = useCallback((batch: string[]) => () => {
        setBatch(batch);
    }, []);

    const onBatchLeave = useCallback(() => {
        setBatch([]);
    }, []);

    const onBatchClick = useCallback((batch: string[]) => () => {
        // remove the highlight from the previous batch
        if (clickedBatch.length) {
            const order1 = clickedBatch[0];
            const order2 = clickedBatch[1];
            rowsRef.current[order1]?.classList.remove(orderStyles.highlight);
            rowsRef.current[order2]?.classList.remove(orderStyles.highlight);
        }
        setClickedBatch([...batch]);
    }, [clickedBatch, rowsRef])

    useEffect(() => {
        if (clickedBatch.length) {
            const order1 = clickedBatch[0];
            const order2 = clickedBatch[1];
            rowsRef.current[order1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            rowsRef.current[order1]?.classList.add(orderStyles.highlight);
            rowsRef.current[order2]?.classList.add(orderStyles.highlight);

            const handleClickOutside = (event) => {
                if (
                    !suggestedBatchesRef.current?.contains(event.target)
                ) {
                    rowsRef.current[order1]?.classList.remove(orderStyles.highlight);
                    rowsRef.current[order2]?.classList.remove(orderStyles.highlight);
                    document.removeEventListener('click', handleClickOutside);
                }
            };

            document.addEventListener('click', handleClickOutside);
        }
    }, [clickedBatch, rowsRef])

    useEffect(() => {
        if (batch.length) {
            const newOrders = orders.filter((order) => batch.includes(order.orderNumber));
            setFilteredOrders(newOrders);
        }
        else {
            setFilteredOrders(orders);
        }
    }, [batch, orders])

    return (
        <div className={styles.mapContainer}>
            <MapProvider >
                <Map orders={filteredOrders} drivers={drivers} rowsRef={rowsRef} seeBatch={Boolean(batch.length)} />
            </MapProvider>
            <SuggestedBatches orders={orders} onBatchHover={onBatchHover} onBatchLeave={onBatchLeave} onBatchClick={onBatchClick} ref={suggestedBatchesRef} />

        </div >
    )
}

export default MapBatch
