import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentIntent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductWhereUniqueInput | null;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
