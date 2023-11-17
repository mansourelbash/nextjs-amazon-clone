import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentIntent: string | null;
  paymentStatus: boolean | null;
  price: number | null;
  products?: Product | null;
  status: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
