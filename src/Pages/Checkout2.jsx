import React from "react";
import CheckoutComponent from "../Components/CheckoutComponent";
import { Form } from "../Components/Form";

export function Checkout2() {
  return (
    <div className="lg:grid grid-cols-2 justify-between px-4 ">
      <div className="px-2">
        <Form />
      </div>
      <div className="hidden lg:block px-2">
              <CheckoutComponent />
              <CheckoutComponent />
              <CheckoutComponent />
      </div>
    </div>
  );
}
