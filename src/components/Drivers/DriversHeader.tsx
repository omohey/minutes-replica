import React, { useCallback, useState } from 'react'

import styles from './DriversHeader.module.scss'
import { ArrowDown } from '../SVGs';
import clsx from 'clsx';
import { TDriver } from '@/types/driver';

type TProps = {
    drivers: TDriver[];
    dispatch: React.Dispatch<any>;
}

const DriversHeader = ({ drivers, dispatch }: TProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [filter, setFilter] = useState("Any");

    const toggleClicked = useCallback(() => {
        setIsClicked(prev => !prev);
    }, []);

    const filterOptions: string[] = ["Any"];
    drivers.forEach(driver => {
        if (!filterOptions.includes(driver.status)) {
            filterOptions.push(driver.status);
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
                <h2 className={styles.header}>Drivers</h2>
                <p className={styles.activeDrivers}>{(drivers && drivers.length) || "0"} Checked In</p>
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

export default DriversHeader
