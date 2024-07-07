import React, { useEffect, useState } from "react";

const getLocalStore = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function ProductList() {
  const [inputData, setInputData] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState(getLocalStore());

  const addItem = () => {
    if (!inputData || !price) {
      return;
    }
    const newItem = { productName: inputData, productPrice: price };
    setItems([...items, newItem]);
    setInputData("");
    setPrice("");
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, index) => index !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <div className="flex justify-center items-center gap-2 my-5 mx-2">
        <div>
          <label className="text-xl">Product Name</label>
          <input
            type="text"
            placeholder="Product"
            className="px-4 py-4 p-3 border-1 rounded-lg w-full"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl">Price</label>
          <input
            type="text"
            placeholder="Product price"
            className="px-10 py-4 p-3 border-1 rounded-lg w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center items-start mt-4 ml-10">
        <button className="btn" onClick={addItem}>
          Add product
        </button>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 text-gray-600 py-3 mt-6 flex justify-around items-center"
        >
          <div className="text-gray-500">{item.productName}</div>
          <div className="text-gray-500">$ {item.productPrice}</div>
          <div>
            <button
              className="text-white bg-red-400 p-1 font-bold cursor-pointer"
              onClick={() => deleteItem(index)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
