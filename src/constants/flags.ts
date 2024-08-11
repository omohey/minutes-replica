export const flags = ["is_cancelled", "is_batched", "is_with_associate_driver", "has_customization", "is_gift_bag_required", "is_heavy_order",
    "is_delivery_code_required", "is_id_capture_required", "is_hll_delivery"];

export const flagsMap: { [key: string]: string } = {
    is_with_associate_driver: "associateDrivers",
    is_batched: "batchFlag",
    is_cancelled: "cancelledOrder",
    is_id_capture_required: "CIDRequired",
    has_customization: "customized",
    is_delivery_code_required: "delCodeRequired",
    is_gift_bag_required: "gift",
    is_heavy_order: "heavyOrder",
    is_hll_delivery: "hllDrivers",
};
