import {DangerCircleSvg} from "./danger-circle";
import {DefaultCircleSvg} from "./default-circle";
import {SuccessCircleSvg} from "./success-circle";
import {WarningCircleSvg} from "./warning-circle";

export const statusOptions = [
  {name: "Low", uid: "low"},
  {name: "Moderate", uid: "moderate"},
  {name: "High", uid: "high"},
  {name: "Out of Stock", uid: "out_of_stock"},
] as const;

export type StatusOptions = (typeof statusOptions)[number]["name"];

export const statusColorMap: Record<StatusOptions, JSX.Element> = {
  Low: DangerCircleSvg,
  Moderate: WarningCircleSvg,
  High: SuccessCircleSvg,
  "Out of Stock": DefaultCircleSvg,

};

export type Inventory = {
  inventory_id: number;
  location: string;
  sku_color_id: string;
  qty: number;
  warehouse_number: string;
  amount_needed: number;
  status: StatusOptions;
};

export type ColumnsKey =
  | "inventory_id"
  | "location"
  | "sku_color_id"
  | "qty"
  | "warehouse_number"
  | "amount_needed"
  | "status";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "inventory_id",
  "location",
  "sku_color_id",
  "qty",
  "warehouse_number",
  "amount_needed",
  "status",
];

export const columns = [
  {name: "Inventory ID", uid: "inventory_id"},
  {name: "Location", uid: "location"},
  {name: "SKU Color ID", uid: "sku_color_id"},
  {name: "Quantity", uid: "qty"},
  {name: "Warehouse Number", uid: "warehouse_number"},
  {name: "Amount Needed", uid: "amount_needed"},
  {name: "Stock Level", uid: "status"},
];

const inventoryData = [
  {
    inventory_id: 171,
    location: "A01-01",
    sku_color_id: "HU-KP001-4DR SS",
    qty: 84,
    warehouse_number: "499 A",
    amount_needed: 0,
    status: "High" as StatusOptions,
  },
  {
    inventory_id: 172,
    location: "A01-02",
    sku_color_id: "HP-RT005-4DR TXPT",
    qty: 169,
    warehouse_number: "499 A",
    amount_needed: 0,
    status: "Out of Stock" as StatusOptions,
  },
  // ...additional data...
];

export const inventory: Inventory[] = inventoryData;
