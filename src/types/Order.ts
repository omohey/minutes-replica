export type TOrder = {
  marketPlace: string,
  orderNumber: string,
  packageName: string,
  status: string,
  flags: string[],
  time: string,
  eta: string,
  customerName: string
  address: string,
  contactNumber: string
  batchOrders?: string[]
  lat: number,
  lng: number,
  fulfillment: boolean
}