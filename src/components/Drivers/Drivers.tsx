import React, { useMemo, useReducer } from 'react'
import styles from './Drivers.module.scss'
import Tableheader from '../Tableheader'
import DriversHeader from './DriversHeader';
import DriversRow from './DriversRow';
import { TDriver } from '@/types/driver';


const headers = ["Vehicle", "Driver", "Status", "Distance", "Arrival ETA", "Action"];

type TProps = {
    rowsRef: React.MutableRefObject<{ [key: string]: HTMLTableRowElement | null }>;
    drivers: TDriver[];
}

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'filter':
            return { ...state, filter: action.payload };
    }
    throw Error('Unknown action.');
}


const Drivers = ({ rowsRef, drivers }: TProps) => {

    const [state, dispatch] = useReducer(reducer, { filter: "" });

    const filteredDrivers = useMemo(() => {
        if (state.filter === "") {
            return drivers;
        }
        return drivers.filter(driver => driver.status === state.filter);
    }, [drivers, state.filter]);




    return (
        <div className={styles.container}>
            <DriversHeader drivers={drivers} dispatch={dispatch} />

            <table className={styles.driversTable}>
                <Tableheader headers={headers} />
                <tbody>
                    {filteredDrivers.map((driver) => {
                        return (
                            <DriversRow ref={(el) => { rowsRef.current[driver.idUser] = el; }} key={driver.name}{...driver} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Drivers
