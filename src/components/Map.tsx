'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react';

//Map component Component from library
import { GoogleMap, Marker } from '@react-google-maps/api';
import { TOrder } from '@/types/Order';
import { TDriver } from '@/types/driver';
import styles from './Map.module.scss';
import { DarkStore, DriverPinMap, OrderPin } from './SVGs';
import { svgToDataURL } from '@/utils/SvgToUrl';
import { driverStatusMap, statusMap } from '@/constants/status';

const defaultMapCenter = {
    lat: 25.194876,
    lng: 55.274539
}

const defaultMapZoom = 14

const defaultMapOptions = {
    zoomControl: false,
    tilt: 0,
    gestureHandling: 'auto',
};

type TProps = {
    orders: TOrder[]
    drivers: TDriver[]
    rowsRef: React.MutableRefObject<{ [key: string]: HTMLTableRowElement | null }>;
    seeBatch?: boolean;
}

type TWareHouse = {
    lat: number,
    lng: number
}

const Map = ({ orders, drivers, rowsRef, seeBatch }: TProps) => {
    const [wareHouses, setWareHouses] = useState<TWareHouse[]>([]);

    const customMarkerIcon = useMemo(() => {
        return {
            url: svgToDataURL(DarkStore, {}),
            scaledSize: new window.google.maps.Size(30, 30),
        }
    }, []);


    useEffect(() => {
        // get all distinct warehouses from drivers
        const wareHouses: TWareHouse[] = [];
        drivers.forEach(driver => {
            if (!wareHouses.some(wareHouse => wareHouse.lat === driver.warehouse.lat && wareHouse.lng === driver.warehouse.lng)) {
                wareHouses.push(driver.warehouse);
            }
        });
        setWareHouses(wareHouses);
    }, [drivers])

    const onOrderClick = useCallback((orderNumber: string) => () => {
        rowsRef.current[orderNumber]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        rowsRef.current[orderNumber]?.querySelector('button')?.focus();
    }, [rowsRef]);

    const onDriverClick = useCallback((idUser: number) => () => {
        rowsRef.current[idUser]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        rowsRef.current[idUser]?.querySelector('button')?.focus();
    }, [rowsRef]);

    return (
        <div>
            <GoogleMap
                mapContainerClassName={styles.mapContainer}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}>

                {orders.map(order => {
                    return <Marker
                        key={order.orderNumber}
                        position={{ lat: order.lat, lng: order.lng }}
                        icon={{
                            url: svgToDataURL(OrderPin, { fill: statusMap[order.status]?.color }),
                            scaledSize: new window.google.maps.Size(40, 51),
                        }}
                        onClick={onOrderClick(order.orderNumber)}
                    >
                    </Marker>
                }
                )}

                {!seeBatch && drivers.map(driver => {
                    return <Marker
                        key={driver.name}
                        position={{ lat: driver.location.lat, lng: driver.location.lng }}
                        icon={{
                            url: svgToDataURL(DriverPinMap[driver.vehicle as keyof typeof DriverPinMap], { fill: driverStatusMap[driver.status]?.color }),
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                        onClick={onDriverClick(driver.idUser)}
                    >
                    </Marker>
                }
                )}
                {!seeBatch &&
                    wareHouses.map((wareHouse, index) => {
                        return <Marker
                            key={index}
                            position={{ lat: wareHouse.lat, lng: wareHouse.lng }}
                            icon={customMarkerIcon}

                        >
                        </Marker>
                    })
                }
            </GoogleMap>
        </div>
    )
};

export default Map;