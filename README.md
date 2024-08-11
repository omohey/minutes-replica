# Noon Minutes

## Overview
This is a replica for the noon minutes orders/ drivers page. It contains the information for orders and drivers along with their locations on the map. [Here](https://minutes-replica.vercel.app/) is the link for the production on vercel.

<img width="1261" alt="Screenshot 2024-08-11 at 5 18 51 PM" src="https://github.com/user-attachments/assets/993efe8f-1e10-4a46-92e6-d127e52bafcd">

## Features

### Orders Table
This table contains order information which includes: 
* Order Number
* Package
* Status
* Flags
* Pickup/ Delivery ETA

<img width="590" alt="Screenshot 2024-08-11 at 4 59 27 PM" src="https://github.com/user-attachments/assets/16a9ce19-48ed-4f05-a177-94a963f39af7">



You can filter orders by status by choosing an option from the dropdown at the top of the table:
<img width="585" alt="Screenshot 2024-08-11 at 5 14 28 PM" src="https://github.com/user-attachments/assets/2f41b187-383b-4fa1-bc33-05a2141ea112">


Moreover, clicking on an order reveals additional information such as Name, Address and Contact number:
<img width="585" alt="Screenshot 2024-08-11 at 5 12 36 PM" src="https://github.com/user-attachments/assets/181253c7-30ab-4d00-913b-a8bb758ce413">

### Drivers Table
The drivers table contains driver information which includes: 
* Vehicle Type
* Driver Name
* Status
* Distance
* Arrival ETA
* Action

<img width="548" alt="Screenshot 2024-08-11 at 5 16 33 PM" src="https://github.com/user-attachments/assets/5a606f7e-59fb-40f6-bac3-9f199fb0fe6a">

### Map
This google map is used to show the order and driver locations relative to the warehouse. Each order/driver is shown as a pin that has a color corresponding to its status. 

<img width="748" alt="Screenshot 2024-08-11 at 5 21 57 PM" src="https://github.com/user-attachments/assets/4661ef9b-4dd4-4166-ba5e-ea6f0cc4184b">

Whenever a driver/ order is clicked the page scrolls to the selected driver/ order row in the corresponding table and the row has a blue highlight to show that it is selected.

<img width="1260" alt="Screenshot 2024-08-11 at 5 24 08 PM" src="https://github.com/user-attachments/assets/ddd8bcf7-7b74-431a-bc7b-5b76a33304ef">

### Suggested Batches
This is a section that shows orders that are suggested to be batched together.

<img width="400" alt="Screenshot 2024-08-11 at 5 30 52 PM" src="https://github.com/user-attachments/assets/c31cae29-8bcd-4daf-b806-ac17fa719aa2">

This section integrates with the map. Whenever you hover over a suggested batch, the corresponding orders are shown on the map.
<img width="1178" alt="Screenshot 2024-08-11 at 5 35 12 PM" src="https://github.com/user-attachments/assets/a2df5fc5-3968-4607-82e5-83de9fa3e781">

When a suggested batch is clicked the orders suggested will be highlighted and the page scrolls to the first order.
<img width="1177" alt="Screenshot 2024-08-11 at 5 37 31 PM" src="https://github.com/user-attachments/assets/881789d5-72c7-4d8b-8d67-6f725bc7d17a">

## Demo

https://github.com/user-attachments/assets/3e1e346c-2adf-4425-b423-b37c6d409c46

