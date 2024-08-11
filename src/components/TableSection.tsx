import React from 'react'
import styles from './TableSection.module.scss'
import { ArrowDown } from './SVGs'
import clsx from 'clsx'

type TProps = {
    name: string
    columns: number
    onClick?: () => void
    expanded: boolean
}

const TableSection = ({ name, columns, onClick, expanded }: TProps) => {


    return (
        <tr>
            <td colSpan={columns}>
                <div className={styles.container} onClick={onClick}>
                    <h5>Orders in {name}</h5>
                    <ArrowDown className={clsx(styles.arrow, {
                        [styles.expanded]: expanded
                    })} />
                </div>
            </td>
        </tr>
    )
}

export default TableSection
