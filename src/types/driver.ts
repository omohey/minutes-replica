export type TDriver = {
    idUser: number,
    vehicle: string,
    name: string,
    status: string,
    distance: string,
    warehouse: {
        lat: number,
        lng: number
    },
    location: {
        lat: number,
        lng: number
    }
}
