"use client";
import styles from "./page.module.scss";
import { TOrder } from "@/types/Order";
import { dateETA, getDateTime } from "@/utils/DateTime";
import { flags } from "@/constants/flags";
import { getDistance } from "@/utils/drivers";
import MainPage from "@/components/MainPage";
import useSWR from "swr";

const processOrders: (orders: any) => TOrder[] = (orders: any) => {
  if (!orders) {
    return []
  }
  return orders.map((order: any) => {
    return {
      marketPlace: order.mp_code,
      orderNumber: order.order_nr,
      packageName: order.awb_nr || '--',
      status: order.order_status,
      flags: flags.filter(flag => order[flag]),
      time: getDateTime(new Date(order.estimated_pickup_at)),
      eta: dateETA(new Date(order.estimated_pickup_at)),
      customerName: order.delivery_address.contact_name,
      address: order.delivery_address.address,
      contactNumber: order.delivery_address.contact_phone_number,
      batchOrders: order.batch_group_name ? order.batch_recommended_orders.map((order: any) => order.order_nr)
        : undefined,
      lat: order.delivery_address.lat,
      lng: order.delivery_address.lng,
      fulfillment: order.isInFulfillment
    }
  })
}
const processDrivers = (drivers: any) => {
  return drivers.map((driver: any) => {
    return {
      idUser: driver.id_user,
      vehicle: driver.vehicle_type_code,
      name: driver.full_name,
      status: driver.driver_status,
      distance: getDistance(driver.eta),
      warehouse: {
        lat: driver.warehouse_latitude,
        lng: driver.warehouse_longitude
      },
      location: {
        lat: driver.waiting_loc_latitude,
        lng: driver.waiting_loc_longitude
      }
    }
  })
}
export default function Home() {


  const { data: orders } = useSWR("orders", async () => {
    const ordersRaw = await fetch('http://localhost:3000/api/orders', {
      method: 'GET',
      cache: 'no-store'
    });
    const orders = processOrders(await ordersRaw.json());
    return orders;
  }, { refreshInterval: 10000 }
  );

  const { data: drivers } = useSWR("drivers", async () => {
    const driversRaw = await fetch('http://localhost:3000/api/drivers', {
      method: 'GET',
      cache: 'no-store'
    });
    const drivers = processDrivers(await driversRaw.json());
    return drivers;
  }, { refreshInterval: 10000 }
  );


  return (
    <main className={styles.main}>
      {orders && drivers &&
        <MainPage orders={orders} drivers={drivers} />}
    </main>
  );
}
