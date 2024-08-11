import React from 'react'

import styles from './TableHeader.module.scss'

type TProps = {
    headers: string[]
    dropdown?: boolean
}

const Tableheader = ({ headers, dropdown }: TProps) => {
    return (
        <thead>
            <tr className={styles.container}>
                {headers &&
                    headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                {dropdown && <th></th>}
            </tr>
        </thead>
    )
}

export default Tableheader
