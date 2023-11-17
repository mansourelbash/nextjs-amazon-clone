import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="paymentIntent" source="paymentIntent" />
        <BooleanInput label="paymentStatus" source="paymentStatus" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="products.id"
          reference="Product"
          label="products"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
