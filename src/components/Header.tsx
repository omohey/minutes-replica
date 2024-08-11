import React from 'react'

import styles from './Header.module.scss'
import { ArrowDown, NoonMinutesLogo, UAEFlag } from './SVGs'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftHeader}>
                <img src="/Icon/minutes.svg" alt="Minutes" />
                <div className={styles.filterBox}>
                    <UAEFlag />
                    <NoonMinutesLogo className={styles.minutesImg} />
                    <p className={styles.text}>Bur Dubai</p>
                    <div className={styles.greenIcon}></div>
                    <ArrowDown className={styles.dropdownIcon} />
                </div>
            </div>
            <div className={styles.rightHeader}>
                <img src="/Icon/search.svg" alt="Search" />
                <img src="/Icon/tool.svg" alt="Tool" />
                <img src="/Icon/bell.svg" alt="Bell" />
            </div>
        </header>
    )
}

export default Header
