import React from "react";
import { useForm } from "react-hook-form";
import CatalogGrid from "./CatalogGrid";

export default function Form() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="item">Item</label>
          <input id="item"></input>
        </div>
        <div>
          <label for="price">Price</label>
          <input id="price"></input>
        </div>
        <div>
          <label for="quantity">Quantity</label>
          <input id="quantity"></input>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <CatalogGrid />
    </div>
  );
}
