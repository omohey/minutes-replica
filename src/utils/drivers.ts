export const getDistance = (distance: string) => {
    const distanceMeters = parseInt(distance);
    if (distanceMeters < 1000) {
        return `${distanceMeters} M`;
    }
    return `${(distanceMeters / 1000).toFixed(2)} KM`;
}
