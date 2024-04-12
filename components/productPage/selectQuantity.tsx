import React from "react";

type Props = {};

export default function SelectQuantity({}: Props) {
  return (
    <select
      about="Quantity"
      className="w-1/2 p-2 mt-12 font-semibold rounded-lg cursor-pointer lg:w-44 bg-lightBackground drop-shadow-md"
      name="quantity"
      id="quantity"
    >
      <option value="1">Quantity: 1</option>
      <option value="2">Quantity: 2</option>
      <option value="3">Quantity: 3</option>
      <option value="4">Quantity: 4</option>
      <option value="5">Quantity: 5</option>
    </select>
  );
}
