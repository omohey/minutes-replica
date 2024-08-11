"use client";
import React, { useRef } from 'react'
import Orders from "@/components/Orders/Orders";
import Drivers from "@/components/Drivers/Drivers";
import Map from "@/components/Map";
import { MapProvider } from "@/providers/MapProvider";
import { TDriver } from '@/types/driver';
import { TOrder } from '@/types/Order';
import styles from "./MainPage.module.scss";

type TProps = {
    drivers: TDriver[];
    orders: TOrder[];
}

const MainPage = ({ drivers, orders }: TProps) => {
    const rowsRef = useRef<{ [key: string]: HTMLTableRowElement | null }>({});
    return (
        <>
            <div className={styles.mapContainer}>
                <MapProvider>
                    <Map orders={orders} drivers={drivers} rowsRef={rowsRef} />
                </MapProvider>
            </div>
            <div className={styles.content}>
                <Orders orders={orders} rowsRef={rowsRef} />
                <Drivers drivers={drivers} rowsRef={rowsRef} />
            </div>
        </>
    )
}

export default MainPage
