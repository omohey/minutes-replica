export const statusMap: { [key: string]: { color: string, backgroundColor: string } }
    = {
    Created: {
        color: "#374151",
        backgroundColor: "#F9FAFB"
    },
    Fulfilling: {
        color: "#9A3412",
        backgroundColor: "#FFF7ED"
    },
    Fulfilled: {
        color: "#166534",
        backgroundColor: "#F0FDF4"
    },
    Transit: {
        color: "#155E75",
        backgroundColor: "#CFFAFE"
    },
    "Dropped Off": {
        color: "#155E75",
        backgroundColor: "#CFFAFE"
    },
    "Picked Up": {
        color: "#1D4ED8",
        backgroundColor: "#EFF6FF"
    },
    Arrived: {
        color: "#1D4ED8",
        backgroundColor: "#EFF6FF"
    },
    Delivered: {
        color: "#166534",
        backgroundColor: "#F0FDF4"
    },
    Undelivered: {
        color: "#DC2626",
        backgroundColor: "#FEF2F2"
    },
    "Cancel Req": {
        color: "#C2410C",
        backgroundColor: "#FFEDD5"
    },
    Cancelled: {
        color: "#DC2626",
        backgroundColor: "#FEF2F2"
    }
};


export const driverStatusMap: { [key: string]: { color: string, backgroundColor: string } }
    = {
    Ready: {
        color: "#027A48",
        backgroundColor: "#ECFDF3"
    },
    Delivering: {
        color: "#0452C8",
        backgroundColor: "#EBF7FF"
    },
    Away: {
        color: "#344054",
        backgroundColor: "#F2F4F7"
    },
    Returning: {
        color: "#9A3412",
        backgroundColor: "#FFEDD5"
    },
    Offline: {
        color: "#344054",
        backgroundColor: "#F2F4F7"
    }
};