import React from 'react'

type TBell = {
    width?: number;
    height?: number;
    fill?: string;
    outline?: string;
    opacity?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: "round" | "butt" | "square" | "inherit" | undefined;
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined;
    className?: string;
}

export const Bell = ({
    width = 24,
    height = 24,
    fill = "none",
    outline = "#16A34A",
    opacity = "0.12",
    stroke = "#16A34A",
    strokeWidth = "2",
    strokeLinecap = "round",
    strokeLinejoin = "round",
    className = "",
    ...props

}: TBell) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <path opacity={opacity} d="M18.0008 8C18.0008 6.4087 17.3686 4.88258 16.2434 3.75736C15.1182 2.63214 13.5921 2 12.0008 2C10.4095 2 8.88333 2.63214 7.75811 3.75736C6.63289 4.88258 6.00075 6.4087 6.00075 8C6.00075 11.0902 5.22122 13.206 4.35042 14.6054C3.61588 15.7859 3.24861 16.3761 3.26208 16.5408C3.27699 16.7231 3.31561 16.7926 3.46253 16.9016C3.59521 17 4.19334 17 5.38961 17H18.6119C19.8082 17 20.4063 17 20.539 16.9016C20.6859 16.7926 20.7245 16.7231 20.7394 16.5408C20.7529 16.3761 20.3856 15.7859 19.6511 14.6054C18.7803 13.206 18.0008 11.0902 18.0008 8Z" fill={outline} />
            <path d="M14.0008 21H10.0008M18.0008 8C18.0008 6.4087 17.3686 4.88258 16.2434 3.75736C15.1182 2.63214 13.5921 2 12.0008 2C10.4095 2 8.88333 2.63214 7.75811 3.75736C6.63289 4.88258 6.00075 6.4087 6.00075 8C6.00075 11.0902 5.22122 13.206 4.35042 14.6054C3.61588 15.7859 3.24861 16.3761 3.26208 16.5408C3.27699 16.7231 3.31561 16.7926 3.46253 16.9016C3.59521 17 4.19334 17 5.38961 17H18.6119C19.8082 17 20.4063 17 20.539 16.9016C20.6859 16.7926 20.7245 16.7231 20.7394 16.5408C20.7529 16.3761 20.3856 15.7859 19.6511 14.6054C18.7803 13.206 18.0008 11.0902 18.0008 8Z" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} />
        </svg>

    )
}

export const LowPriority = ({
    width = 24,
    height = 24,
    fill = "none",
    outline = "#EA580C",
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <path d="M14 4.5H22V6.5H14V4.5ZM14 10H22V12H14V10ZM14 15.5H22V17.5H14V15.5ZM2 11C2 14.58 4.92 17.5 8.5 17.5H9V19.5L12 16.5L9 13.5V15.5H8.5C6.02 15.5 4 13.48 4 11C4 8.52 6.02 6.5 8.5 6.5H12V4.5H8.5C4.92 4.5 2 7.42 2 11Z" fill={outline} />
        </svg>
    )
}

type TArrowDown = {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: "round" | "butt" | "square" | "inherit" | undefined;
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined;
    className?: string;
}


export const ArrowDown = ({
    width = 20,
    height = 20,
    fill = "none",
    stroke = "#374151",
    strokeWidth = "1.66667",
    strokeLinecap = "round",
    strokeLinejoin = "round",
    className = "",
    ...props
}: TArrowDown) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <path d="M5 7.5L10 12.5L15 7.5" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} />
        </svg>

    )
}

export const UAEFlag = ({
    width = 24,
    height = 18,
    fill = "none",
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 18" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <g clipPath="url(#clip0_16905_23089)">
                <rect width="24" height="6" fill="#12833B" />
                <rect y="6" width="24" height="6" fill="white" />
                <rect y="12" width="24" height="6" fill="#262626" />
                <rect width="7.5" height="18" fill="#FF323E" />
            </g>
            <defs>
                <clipPath id="clip0_16905_23089">
                    <rect width="24" height="18" rx="1.5" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const Car = ({
    width = 29,
    height = 28,
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <rect x="0.5" width="28" height="28" rx="8" fill="#F2F4F7" />
            <path d="M19.5 12.3999L16.7825 9.0024C16.4775 8.62115 16.0175 8.3999 15.5325 8.3999H10.385C9.72875 8.3999 9.14125 8.7969 8.8975 9.40615L7.7 12.4574C7.0125 12.6349 6.5 13.2574 6.5 13.9999V16.7999C6.5 17.2417 6.85825 17.5999 7.3 17.5999C7.3 16.0549 8.556 14.7999 10.1 14.7999C11.644 14.7999 12.9 16.0549 12.9 17.5999H16.1C16.1 16.0559 17.356 14.7999 18.9 14.7999C20.444 14.7999 21.7 16.0559 21.7 17.5999C22.1418 17.5999 22.5 17.2417 22.5 16.7999V15.3999C22.5 13.7424 21.1575 12.3999 19.5 12.3999ZM12.1 12.3999H9.4225L10.385 9.9999H12.1V12.3999ZM13.3 12.3999V9.9999H15.5312L17.45 12.3999H13.3Z" fill="#344054" />
            <path opacity="0.5" d="M18.8996 15.6C17.7951 15.6 16.8996 16.4955 16.8996 17.6C16.8996 18.7045 17.7951 19.6 18.8996 19.6C20.0041 19.6 20.8996 18.7045 20.8996 17.6C20.8996 16.495 20.0046 15.6 18.8996 15.6ZM10.0996 15.6C8.99511 15.6 8.09961 16.495 8.09961 17.6C8.09961 18.705 8.99511 19.6 10.0996 19.6C11.2041 19.6 12.0996 18.705 12.0996 17.6C12.0996 16.495 11.2046 15.6 10.0996 15.6ZM9.42211 12.4H12.0996V10H10.3846L9.42211 12.4ZM15.5321 10H13.2996V12.4H17.4271L15.5321 10Z" fill="#344054" />
        </svg>
    )
}


export const Motorcycle = ({
    width = 29,
    height = 28,
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <rect x="0.5" width="28" height="28" rx="8" fill="#F2F4F7" />
            <path d="M9.69883 15.5999C9.25708 15.5999 8.89883 15.9582 8.89883 16.3999C8.89883 16.8417 9.25708 17.1999 9.69883 17.1999C10.1406 17.1999 10.4988 16.8417 10.4988 16.3999C10.4988 15.9582 10.1413 15.5999 9.69883 15.5999ZM19.6363 15.7624L16.9538 10.7999H18.4988C18.9406 10.7999 19.2988 10.4417 19.2988 9.9999V9.1999C19.2988 8.75815 18.9406 8.3999 18.4988 8.3999H17.9886C17.8014 8.3999 17.6201 8.46553 17.4763 8.5853L16.2908 9.57305L15.8268 8.71455C15.7213 8.5209 15.5188 8.3999 15.2988 8.3999H13.2988C13.0788 8.3999 12.8988 8.5789 12.8988 8.7999V9.1999C12.8988 9.4208 13.0779 9.5999 13.2988 9.5999H14.9411L15.3513 10.3574L12.8988 12.3999H12.3463L11.7913 11.8449C11.3788 11.4324 10.8188 11.1999 10.2363 11.1999H7.69883C7.47783 11.1999 7.29883 11.3799 7.29883 11.5999V11.9999C7.29883 12.2199 7.47783 12.3999 7.69883 12.3999H9.69883C11.9081 12.3999 13.6988 14.1907 13.6988 16.3999C13.6988 16.6739 13.6707 16.9414 13.6182 17.1999H15.3795C15.3263 16.9424 15.2988 16.6524 15.2988 16.3999C15.2988 15.0959 15.9323 13.9517 16.9003 13.2249L18.5806 16.3324C18.6856 16.5267 18.9276 16.5979 19.1218 16.4929L19.4753 16.3052C19.6688 16.1999 19.7413 15.9574 19.6363 15.7624Z" fill="#344054" />
            <path opacity="0.5" d="M9.7 14.6C10.5545 14.6 11.2688 15.2 11.4518 16H12.86C12.66 14.4225 11.33 13.2 9.7 13.2C7.93275 13.2 6.5 14.6327 6.5 16.4C6.5 18.1672 7.93275 19.6 9.7 19.6C11.3303 19.6 12.66 18.3762 12.86 16.8H11.4525C11.27 17.6 10.555 18.2 9.7 18.2C8.7075 18.2 7.9 17.3925 7.9 16.4C7.9 15.4075 8.7075 14.6 9.7 14.6ZM19.3 13.2C18.9633 13.2 18.6453 13.2663 18.3405 13.3625L19.0245 14.6278C19.115 14.615 19.205 14.6 19.3 14.6C20.295 14.6 21.1 15.405 21.1 16.4C21.1 17.395 20.295 18.2 19.3 18.2C18.305 18.2 17.5 17.395 17.5 16.4C17.5 15.9357 17.6804 15.5177 17.9685 15.1987L17.2845 13.933C16.5675 14.52 16.1 15.4 16.1 16.4C16.1 18.1687 17.5312 19.6 19.3 19.6C21.0688 19.6 22.5 18.1687 22.5 16.4C22.5 14.6312 21.07 13.2 19.3 13.2Z" fill="#344054" />
        </svg>

    )
}

export const VehicleMap = {
    car: <Car />,
    motorcycle: <Motorcycle />,
}

export const NamshiLogo = ({
    width = 25,
    height = 24,
    className = "",
    ...props
}
) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <g clipPath="url(#clip0_12173_12902)">
                <rect x="0.5" width="24" height="24" rx="12" fill="#B6ED2F" />
                <path d="M17.6021 18H14.9298L9.24913 8.58824H9.1819C9.19311 8.83473 9.20431 9.09804 9.21552 9.37815C9.23793 9.64706 9.25473 9.92717 9.26594 10.2185C9.27714 10.4986 9.28835 10.7843 9.29955 11.0756C9.31075 11.3669 9.32196 11.6583 9.33316 11.9496V18H7.40039V6H10.0559L15.7197 15.3445H15.7701C15.7589 15.1204 15.7477 14.8796 15.7365 14.6218C15.7253 14.3529 15.7141 14.0784 15.7029 13.7983C15.7029 13.5182 15.6973 13.2325 15.6861 12.9412C15.6749 12.6499 15.6637 12.3697 15.6525 12.1008V6H17.6021V18Z" fill="#111827" />
            </g>
            <defs>
                <clipPath id="clip0_12173_12902">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const NoonCoreLogo = ({
    width = 25,
    height = 24,
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <rect x="0.5" width="24" height="24" rx="12" fill="#1F2937" />
            <path d="M6 12.3039C6 15.7411 8.97774 18.4111 12.4391 18.4111C16.0629 18.4111 19 15.5431 19 12.0399C19 9.99123 17.9897 8.19292 16.4944 6.99115L15.4029 8.84176C16.3053 9.5952 16.9247 10.7584 16.9247 12.0672C16.9247 14.4459 14.918 16.4024 12.4391 16.4024C9.97413 16.4024 7.96612 14.4459 7.96612 12.0012C7.96612 11.7098 7.99277 11.4197 8.04735 11.1419L6 12.3039ZM14.4598 5.90643C13.8404 5.68102 13.2882 5.58887 12.7361 5.58887C12.3185 5.58887 11.9542 5.64117 11.6851 5.69472L10.2838 8.07337C10.7954 7.7832 11.4554 7.62379 12.17 7.62379C12.5876 7.62379 12.9646 7.6761 13.3555 7.78195L14.4598 5.90643Z" fill="#F8DD4E" />
        </svg>

    )
}

export const NoonMinutesLogo = ({
    width = 25,
    height = 24,
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <rect width="15.9998" height="15.9998" rx="7.99989" fill="#DB3127" />
            <path d="M5.10366 11.4472L6.96448 11.4571V4.57153L5.54061 4.62369L3.58789 5.43024L4.15894 6.9481L5.10366 6.56259V11.4472Z" fill="white" />
            <path d="M12.1069 8.09881C11.9042 7.776 11.6177 7.51468 11.2782 7.3429C10.9177 7.16188 10.5179 7.07406 10.115 7.0874C9.97289 7.09009 9.83126 7.10475 9.69161 7.13124L9.79256 6.20904L11.9366 6.15159V4.39185L8.04097 4.5332L7.73586 7.9582L8.67154 8.48734L8.71675 8.43745C8.81518 8.32502 8.93506 8.23352 9.06932 8.16835C9.19993 8.10657 9.3423 8.07382 9.48669 8.07235C9.64992 8.06536 9.81196 8.10326 9.95529 8.18195C10.0894 8.25527 10.2007 8.36436 10.277 8.49716C10.3566 8.64023 10.3969 8.80198 10.3937 8.96583C10.3965 9.1292 10.3568 9.29047 10.2785 9.43373C10.2046 9.5674 10.0953 9.67804 9.96282 9.75348C9.82215 9.83195 9.66345 9.87209 9.50251 9.86989H9.49724C9.27337 9.86926 9.05434 9.80448 8.86591 9.68318C8.67885 9.5707 8.52997 9.4042 8.43876 9.20545L8.37397 9.05956L7.375 10.7142L7.42698 10.7603C7.73182 11.0289 8.08319 11.239 8.46362 11.3802C8.85104 11.5274 9.26151 11.6042 9.67578 11.607H9.69763C10.1701 11.6156 10.6379 11.512 11.0627 11.3046C11.4592 11.1095 11.7981 10.8141 12.0459 10.4474C12.2889 10.0834 12.4166 9.65415 12.412 9.21603C12.419 8.82199 12.3131 8.43421 12.1069 8.09881Z" fill="white" />
        </svg>
    )
}

export const MarketplaceLogoMap = {
    namshi: <NamshiLogo />,
    nooncore: <NoonCoreLogo />,
    nooninstant: <NoonMinutesLogo />,
}

export const DarkStore = ({
    width = 25,
    height = 24,
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <g clipPath="url(#clip0_9615_7907)">
                <rect x="0.5" width="24" height="24" rx="12" fill="#DB3127" />
                <path d="M6.22994 13.5774L8.54788 13.5897V5.0127L6.77423 5.07767L4.3418 6.08235L5.05314 7.97307L6.22994 7.49286V13.5774Z" fill="white" />
                <path d="M14.9529 9.40762C14.7005 9.00552 14.3436 8.68001 13.9207 8.46603C13.4716 8.24054 12.9736 8.13114 12.4717 8.14777C12.2947 8.15111 12.1183 8.16938 11.9443 8.20238L12.0701 7.05364L14.7409 6.98207V4.79004L9.88817 4.96612L9.50811 9.23248L10.6736 9.8916L10.73 9.82945C10.8526 9.68941 11.0019 9.57543 11.1691 9.49425C11.3318 9.41729 11.5092 9.3765 11.689 9.37466C11.8924 9.36595 12.0942 9.41317 12.2728 9.51119C12.4398 9.60252 12.5785 9.7384 12.6735 9.90384C12.7727 10.082 12.8229 10.2835 12.8189 10.4876C12.8224 10.6911 12.7729 10.892 12.6753 11.0705C12.5833 11.237 12.4472 11.3748 12.2821 11.4688C12.1069 11.5665 11.9092 11.6165 11.7088 11.6138H11.7022C11.4233 11.613 11.1505 11.5323 10.9158 11.3812C10.6827 11.2411 10.4973 11.0337 10.3837 10.7861L10.303 10.6044L9.05859 12.6655L9.12335 12.723C9.50307 13.0574 9.94075 13.3192 10.4146 13.4951C10.8972 13.6785 11.4085 13.7741 11.9246 13.7776H11.9518C12.5403 13.7884 13.123 13.6593 13.6523 13.4009C14.1461 13.1579 14.5682 12.7899 14.8769 12.3332C15.1797 11.8797 15.3387 11.345 15.333 10.7993C15.3418 10.3085 15.2099 9.82542 14.9529 9.40762Z" fill="white" />
                <path d="M19.8691 -1.2915L4.04492 26.1168" stroke="white" strokeWidth="1.5" />
                <mask id="mask0_9615_7907" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="5" y="-3" width="33" height="29">
                    <path d="M21.2031 -2.1167L37.0273 25.2917H5.37891L21.2031 -2.1167Z" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_9615_7907)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.4845 1.08057C21.6241 2.97317 24.5003 7.15056 24.5003 11.9998C24.5003 18.6272 19.1278 23.9998 12.5003 23.9998C9.9042 23.9998 7.50062 23.1753 5.53711 21.774L17.4845 1.08057Z" fill="#1F2937" />
                    <path d="M9.33203 14.431C9.33203 17.6045 12.0814 20.0698 15.2773 20.0698C18.6231 20.0698 21.335 17.4217 21.335 14.1872C21.335 12.2957 20.4021 10.6353 19.0216 9.52569L18.0137 11.2344C18.847 11.93 19.4189 13.004 19.4189 14.2125C19.4189 16.4087 17.5661 18.2151 15.2773 18.2151C13.0014 18.2151 11.1474 16.4087 11.1474 14.1515C11.1474 13.8825 11.172 13.6146 11.2224 13.3581L9.33203 14.431ZM17.143 8.52417C16.5711 8.31605 16.0613 8.23096 15.5515 8.23096C15.1659 8.23096 14.8296 8.27925 14.5811 8.32869L13.2873 10.5249C13.7596 10.257 14.369 10.1098 15.0288 10.1098C15.4144 10.1098 15.7624 10.1581 16.1234 10.2558L17.143 8.52417Z" fill="#F8DD4E" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_9615_7907">
                    <rect x="0.5" width="24" height="24" rx="12" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const OrderPin = ({
    width = "43",
    height = "51",
    background = "white",
    fill = "#16A34A",
    className = "",
    ...props
}) => {
    return (
        <svg width="43" height="51" viewBox="0 0 43 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_15316_61706)">
                <path d="M21.9798 40.7406L11.6314 29.3608L21.9792 29.5774L31.3599 29.3608L21.9798 40.7406Z" fill="white" />
                <path d="M35.5 19.426C35.5 27.158 29.232 33.426 21.5 33.426C13.768 33.426 7.5 27.158 7.5 19.426C7.5 11.694 13.768 5.42603 21.5 5.42603C29.232 5.42603 35.5 11.694 35.5 19.426Z" fill="white" />
            </g>
            <path opacity="0.12" d="M27.5635 14.1396H22.7305V20.4831C22.7305 20.906 22.7305 21.1175 22.8128 21.279C22.8852 21.4211 23.0007 21.5366 23.1428 21.609C23.3043 21.6913 23.5158 21.6913 23.9387 21.6913H27.5635C27.9865 21.6913 28.1979 21.6913 28.3595 21.609C28.5016 21.5366 28.6171 21.4211 28.6895 21.279C28.7718 21.1175 28.7718 20.906 28.7718 20.4831V15.3479C28.7718 14.925 28.7718 14.7135 28.6895 14.552C28.6171 14.4099 28.5016 14.2944 28.3595 14.222C28.1979 14.1396 27.9865 14.1396 27.5635 14.1396Z" fill={fill} />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.119 11.8743C17.1271 11.8743 17.1351 11.8743 17.1431 11.8743L21.5472 11.8743C21.7378 11.8742 21.9234 11.8742 22.0806 11.8871C22.2532 11.9012 22.4569 11.9345 22.6619 12.0389C22.9461 12.1837 23.1771 12.4147 23.3219 12.6989C23.4264 12.9039 23.4596 13.1076 23.4737 13.2802C23.4765 13.3138 23.4786 13.3487 23.4803 13.3846L27.5885 13.3846C27.7791 13.3846 27.9647 13.3846 28.1219 13.3974C28.2945 13.4115 28.4982 13.4448 28.7032 13.5492C28.9874 13.694 29.2185 13.9251 29.3633 14.2093C29.4677 14.4142 29.501 14.6179 29.5151 14.7906C29.5279 14.9477 29.5279 15.1334 29.5279 15.3239V20.5073C29.5279 20.6979 29.5279 20.8835 29.5151 21.0407C29.501 21.2133 29.4677 21.417 29.3633 21.622C29.2185 21.9061 28.9874 22.1372 28.7032 22.282C28.4982 22.3864 28.2945 22.4197 28.1219 22.4338C27.9647 22.4467 27.7791 22.4466 27.5885 22.4466H23.9156C23.725 22.4466 23.5393 22.4467 23.3821 22.4338C23.2095 22.4197 23.0058 22.3864 22.8009 22.282C22.5167 22.1372 22.2856 21.9061 22.1408 21.622C22.0364 21.417 22.0031 21.2133 21.989 21.0407C21.9861 21.0051 21.9838 20.968 21.9821 20.9298C21.8482 20.9363 21.6993 20.9363 21.5472 20.9363L16.69 20.9363L16.69 26.2225C16.69 26.6395 16.3519 26.9776 15.9349 26.9776C15.5178 26.9776 15.1797 26.6395 15.1797 26.2225L15.1797 20.1818L15.1797 13.8377C15.1797 13.8297 15.1797 13.8216 15.1797 13.8136C15.1797 13.7976 15.1797 13.7815 15.1797 13.7655V13.3846C15.1797 13.3267 15.1862 13.2703 15.1986 13.2161C15.2157 13.0582 15.2525 12.8791 15.3443 12.6989C15.4891 12.4147 15.7202 12.1837 16.0043 12.0389C16.2093 11.9345 16.413 11.9012 16.5856 11.8871C16.7428 11.8742 16.9284 11.8742 17.119 11.8743ZM16.69 19.4259H21.5231C21.747 19.4259 21.8696 19.4254 21.9576 19.4182C21.9611 19.4179 21.9644 19.4176 21.9676 19.4173C21.9678 19.4142 21.9681 19.4108 21.9684 19.4073C21.9756 19.3193 21.9762 19.1968 21.9762 18.9728V13.8377C21.9762 13.6138 21.9756 13.4913 21.9684 13.4032C21.9681 13.3997 21.9678 13.3964 21.9676 13.3933C21.9644 13.393 21.9611 13.3927 21.9576 13.3924C21.8696 13.3852 21.747 13.3846 21.5231 13.3846H17.1431C16.9192 13.3846 16.7967 13.3852 16.7086 13.3924C16.7051 13.3927 16.7018 13.393 16.6987 13.3933C16.6984 13.3964 16.6981 13.3997 16.6978 13.4032C16.6906 13.491 16.69 13.613 16.69 13.8355L16.69 19.4259ZM23.4865 19.0437V20.4832C23.4865 20.7071 23.4871 20.8296 23.4943 20.9177C23.4946 20.9212 23.4949 20.9245 23.4952 20.9276C23.4983 20.9279 23.5016 20.9282 23.5051 20.9285C23.5932 20.9357 23.7157 20.9363 23.9396 20.9363H27.5644C27.7884 20.9363 27.9109 20.9357 27.9989 20.9285C28.0024 20.9282 28.0058 20.9279 28.0089 20.9276C28.0092 20.9245 28.0095 20.9212 28.0098 20.9177C28.0169 20.8296 28.0175 20.7071 28.0175 20.4832V15.348C28.0175 15.1241 28.0169 15.0016 28.0098 14.9135C28.0095 14.91 28.0092 14.9067 28.0089 14.9036C28.0058 14.9033 28.0024 14.903 27.9989 14.9027C27.9109 14.8955 27.7884 14.8949 27.5644 14.8949H23.4865L23.4865 18.9969C23.4865 19.0126 23.4865 19.0281 23.4865 19.0437Z" fill={fill} />
            <defs>
                <filter id="filter0_d_15316_61706" x="0.5" y="0.759358" width="42" height="49.3145" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2.33333" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15316_61706" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15316_61706" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export const DriverCarPin = ({
    width = "47",
    height = "48",
    background = "white",
    fill = "#16A34A",
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <g filter="url(#filter0_d_15316_61745)">
                <circle cx="23.7832" cy="16.9805" r="14" fill={background} />
                <path d="M29.6159 15.1137L26.4455 11.1499C26.0896 10.7051 25.553 10.447 24.9871 10.447H18.9817C18.2161 10.447 17.5307 10.9102 17.2463 11.621L15.8492 15.1808C15.0471 15.3879 14.4492 16.1141 14.4492 16.9804V20.247C14.4492 20.7624 14.8672 21.1804 15.3826 21.1804C15.3826 19.3779 16.8479 17.9137 18.6492 17.9137C20.4506 17.9137 21.9159 19.3779 21.9159 21.1804H25.6492C25.6492 19.379 27.1146 17.9137 28.9159 17.9137C30.7172 17.9137 32.1826 19.379 32.1826 21.1804C32.6979 21.1804 33.1159 20.7624 33.1159 20.247V18.6137C33.1159 16.6799 31.5496 15.1137 29.6159 15.1137ZM20.9826 15.1137H17.8588L18.9817 12.3137H20.9826V15.1137ZM22.3826 15.1137V12.3137H24.9857L27.2242 15.1137H22.3826Z" fill={fill} />
                <path opacity="0.5" d="M28.9164 18.8473C27.6278 18.8473 26.5831 19.892 26.5831 21.1806C26.5831 22.4692 27.6278 23.514 28.9164 23.514C30.205 23.514 31.2497 22.4692 31.2497 21.1806C31.2497 19.8915 30.2056 18.8473 28.9164 18.8473ZM18.6497 18.8473C17.3612 18.8473 16.3164 19.8915 16.3164 21.1806C16.3164 22.4698 17.3612 23.514 18.6497 23.514C19.9383 23.514 20.9831 22.4698 20.9831 21.1806C20.9831 19.8915 19.9389 18.8473 18.6497 18.8473ZM17.8593 15.114H20.9831V12.314H18.9822L17.8593 15.114ZM24.9877 12.314H22.3831V15.114H27.1985L24.9877 12.314Z" fill={fill} />
            </g>
            <defs>
                <filter id="filter0_d_15316_61745" x="0.572366" y="0.647217" width="46.4197" height="46.4205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6.87685" />
                    <feGaussianBlur stdDeviation="3.43843" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15316_61745" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15316_61745" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export const DriverMotorcyclePin = ({
    width = "47",
    height = "48",
    background = "white",
    fill = "#16A34A",
    className = "",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={className}>
            <g filter="url(#filter0_d_15316_61785)">
                <circle cx="23.7305" cy="17.1091" r="14" fill={background} />
                <path d="M18.1281 18.9762C17.6128 18.9762 17.1948 19.3941 17.1948 19.9095C17.1948 20.4249 17.6128 20.8428 18.1281 20.8428C18.6435 20.8428 19.0615 20.4249 19.0615 19.9095C19.0615 19.3941 18.6444 18.9762 18.1281 18.9762ZM29.7219 19.1658L26.5923 13.3762H28.3948C28.9102 13.3762 29.3281 12.9582 29.3281 12.4428V11.5095C29.3281 10.9941 28.9102 10.5762 28.3948 10.5762H27.7995C27.5812 10.5762 27.3696 10.6527 27.2019 10.7925L25.8188 11.9448L25.2775 10.9433C25.1544 10.7173 24.9181 10.5762 24.6615 10.5762H22.3281C22.0715 10.5762 21.8615 10.785 21.8615 11.0428V11.5095C21.8615 11.7672 22.0704 11.9762 22.3281 11.9762H24.2441L24.7227 12.8599L21.8615 15.2428H21.2169L20.5694 14.5953C20.0881 14.1141 19.4348 13.8428 18.7552 13.8428H15.7948C15.537 13.8428 15.3281 14.0528 15.3281 14.3095V14.7762C15.3281 15.0328 15.537 15.2428 15.7948 15.2428H18.1281C20.7056 15.2428 22.7948 17.332 22.7948 19.9095C22.7948 20.2292 22.762 20.5413 22.7007 20.8428H24.7555C24.6935 20.5424 24.6615 20.2041 24.6615 19.9095C24.6615 18.3882 25.4005 17.0532 26.5299 16.2053L28.4902 19.8308C28.6127 20.0574 28.895 20.1405 29.1216 20.018L29.534 19.799C29.7598 19.6762 29.8444 19.3933 29.7219 19.1658Z" fill={fill} />
                <path opacity="0.5" d="M18.1298 17.8091C19.1267 17.8091 19.96 18.5091 20.1735 19.4424H21.8165C21.5832 17.602 20.0315 16.1758 18.1298 16.1758C16.068 16.1758 14.3965 17.8473 14.3965 19.9091C14.3965 21.9709 16.068 23.6424 18.1298 23.6424C20.0318 23.6424 21.5832 22.2147 21.8165 20.3758H20.1744C19.9615 21.3091 19.1273 22.0091 18.1298 22.0091C16.9719 22.0091 16.0298 21.067 16.0298 19.9091C16.0298 18.7512 16.9719 17.8091 18.1298 17.8091ZM29.3298 16.1758C28.9369 16.1758 28.5659 16.2532 28.2104 16.3655L29.0084 17.8416C29.114 17.8266 29.219 17.8091 29.3298 17.8091C30.4907 17.8091 31.4298 18.7483 31.4298 19.9091C31.4298 21.0699 30.4907 22.0091 29.3298 22.0091C28.169 22.0091 27.2298 21.0699 27.2298 19.9091C27.2298 19.3675 27.4403 18.8798 27.7764 18.5077L26.9784 17.0309C26.1419 17.7158 25.5965 18.7424 25.5965 19.9091C25.5965 21.9727 27.2663 23.6424 29.3298 23.6424C31.3934 23.6424 33.0632 21.9727 33.0632 19.9091C33.0632 17.8456 31.3948 16.1758 29.3298 16.1758Z" fill={fill} />
            </g>
            <defs>
                <filter id="filter0_d_15316_61785" x="0.519632" y="0.775879" width="46.4197" height="46.4205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6.87685" />
                    <feGaussianBlur stdDeviation="3.43843" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15316_61785" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15316_61785" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export const DriverPinMap = {
    car: DriverCarPin,
    motorcycle: DriverMotorcyclePin,
}
