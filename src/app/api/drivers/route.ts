const data = [
    {
        "id_user": 34,
        "full_name": "Dima Arafat",
        "da_user_code": "stg-cfdfd6039c64486782d377e5f6015e27@idp.noon.partners",
        "driver_status": "Ready",
        "dropoff_zone_code": null,
        "is_called_up": 0,
        "warehouse_latitude": 25.197525,
        "warehouse_longitude": 55.273506,
        "waiting_loc_latitude": 25.191568,
        "waiting_loc_longitude": 55.263652,
        "timezone": "+04:00",
        "vehicle_code": "car_toyota_rush_ae",
        "vehicle_name": "Toyota Rush",
        "vehicle_type_code": "car",
        "vehicle_type_description": "Car",
        "queue_position": 1,
        "orders": [
            "Sedky-test-8519",
            "Ola-test-3833"
        ],
        "shipments": [
            "PEA3737771228A",
            "PEA6783381396A"
        ],
        "queue": {
            "position": 1,
            "top_x_value": 1,
            "should_show_requeue_reason": 0,
            "requeue_reason": null,
            "is_queue_enabled": false
        },
        "eta": 1680,
        "eta2": "2024-07-18T06:10:16+00:00",
        "sort_key": [
            1,
            1680,
            "2024-07-18T06:10:16+00:00"
        ],
        "can_callup": 0,
        "estimated_ready_at": 1680
    },
    {
        "id_user": 32,
        "full_name": "Esraa Sherif",
        "da_user_code": "stg-3b780a9b79da40b0ad86712f27b79713@idp.noon.partners",
        "driver_status": "Delivering",
        "dropoff_zone_code": null,
        "is_called_up": 0,
        "warehouse_latitude": 25.197525,
        "warehouse_longitude": 55.273506,
        "waiting_loc_latitude": 25.201137,
        "waiting_loc_longitude": 55.251803,
        "timezone": "+04:00",
        "vehicle_code": "motorcycle_normal_ae",
        "vehicle_name": "Standard Motorcycle",
        "vehicle_type_code": "motorcycle",
        "vehicle_type_description": "Motorcycle",
        "queue_position": 2,
        "orders": [
            "test-20240711-1",
            "Sedky-test-15-7-4"
        ],
        "shipments": [
            "PEA2560243502A",
            "PEA8001097624A"
        ],
        "queue": {
            "position": 2,
            "top_x_value": 1,
            "should_show_requeue_reason": 0,
            "requeue_reason": null,
            "is_queue_enabled": false
        },
        "eta": 7682182.628360033,
        "eta2": "2024-07-26T10:01:53+00:00",
        "sort_key": [
            2,
            7682182.628360033,
            "2024-07-26T10:01:53+00:00"
        ],
        "can_callup": 0,
        "estimated_ready_at": null
    },
    {
        "id_user": 21,
        "full_name": "Anup Samyal",
        "da_user_code": "stg-3c6c627a97734b45a77cd2d0221eba96@idp.noon.partners",
        "driver_status": "Away",
        "dropoff_zone_code": null,
        "is_called_up": 0,
        "warehouse_latitude": 25.197525,
        "warehouse_longitude": 55.273506,
        "waiting_loc_latitude": 25.204019,
        "waiting_loc_longitude": 55.285950,
        "timezone": "+04:00",
        "vehicle_code": "motorcycle_normal_ae",
        "vehicle_name": "Standard Motorcycle",
        "vehicle_type_code": "motorcycle",
        "vehicle_type_description": "Motorcycle",
        "queue_position": 3,
        "orders": [],
        "shipments": [],
        "queue": {
            "position": 3,
            "top_x_value": 1,
            "should_show_requeue_reason": 0,
            "requeue_reason": null,
            "is_queue_enabled": false
        },
        "eta": 2100,
        "eta2": "2024-07-29T10:47:25+00:00",
        "sort_key": [
            3,
            2100,
            "2024-07-29T10:47:25+00:00"
        ],
        "can_callup": 0,
        "estimated_ready_at": 2100
    },
    {
        "id_user": 24,
        "full_name": "Ola Sameh",
        "da_user_code": "stg-0b10afec882c4572b360f7a6cb75a66a@idp.noon.partners",
        "driver_status": "Returning",
        "dropoff_zone_code": null,
        "is_called_up": 0,
        "warehouse_latitude": 25.197525,
        "warehouse_longitude": 55.273506,
        "waiting_loc_latitude": 25.195834,
        "waiting_loc_longitude": 55.265563,
        "timezone": "+04:00",
        "vehicle_code": "car_toyota_rush_ae",
        "vehicle_name": "Toyota Rush",
        "vehicle_type_code": "car",
        "vehicle_type_description": "Car",
        "queue_position": 4,
        "orders": [],
        "shipments": [],
        "queue": {
            "position": 4,
            "top_x_value": 1,
            "should_show_requeue_reason": 0,
            "requeue_reason": null,
            "is_queue_enabled": false
        },
        "eta": 0,
        "eta2": "2024-07-31T10:53:23+00:00",
        "sort_key": [
            4,
            0,
            "2024-07-31T10:53:23+00:00"
        ],
        "can_callup": 1,
        "estimated_ready_at": 0
    }
];

export async function GET() {
    return Response.json(data);
}