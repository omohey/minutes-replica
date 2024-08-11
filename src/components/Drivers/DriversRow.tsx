import React, { forwardRef } from 'react'

import styles from './DriversRow.module.scss'
import { driverStatusMap } from '@/constants/status';
import { Bell, LowPriority, VehicleMap } from '../SVGs';

type TProps = {
    vehicle: string;
    name: string;
    status: string;
    distance: string;
}

const DriversRow = forwardRef<HTMLTableRowElement, TProps>(({ vehicle, name, status, distance }, ref) => {
    return (
        <tr ref={ref} className={styles.container}>
            <td>
                <div className={styles.vehicle}>
                    {VehicleMap[vehicle as keyof typeof VehicleMap]}
                    <button />
                </div>
            </td>
            <td>
                <div className={styles.name}>
                    <p>{name}</p>
                </div>
            </td>
            <td>
                <div className={styles.status} style={{ color: driverStatusMap[status]?.color, backgroundColor: driverStatusMap[status]?.backgroundColor }}>
                    <p>{status}</p>
                </div>
            </td>
            <td>
                <div className={styles.distance}>
                    <p>{distance}</p>
                </div>
            </td>
            <td>
                <p className={styles.eta}>00:00:00</p>
            </td>
            <td>
                <div className={styles.action}>
                    <Bell />
                    <LowPriority />
                </div>
            </td>
        </tr>
    )
});

DriversRow.displayName = 'DriversRow';

export default DriversRow

