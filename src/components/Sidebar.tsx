import React from 'react'
import clsx from 'clsx';
import styles from './Sidebar.module.scss'

const buttons = [{ name: "Orders", image: "basket" },
{ name: "Drivers", image: "motorcycle" },
{ name: "Returns", image: "return" },
{ name: "Warehouses", image: "warehouse" },
{ name: "Reports", image: "report" },
{ name: "Inbound Putaway", image: "inbound" },
{ name: "RTV", image: "rtv" },
{ name: "Stock Take", image: "checklist" }];

const Sidebar = () => {
    return (
        <nav className={styles.container}>
            {buttons.map((button, index) => (
                <button key={button.name} className={clsx(styles.button, {
                    [styles.active]: index === 0
                })}>
                    <img src={`/Icon/${button.image}.svg`} alt={button.name} />
                    <span>{button.name}</span>
                </button>
            ))}
        </nav>
    )
}

export default Sidebar
