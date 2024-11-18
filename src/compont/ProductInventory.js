import React, { useState } from "react";
import data from "./data"; // import ข้อมูลจาก data.js

function ProductInventory() {
  const [products, setProducts] = useState(data.productData);

  return (
    <div>
      <h1>เพิ่มสินค้า</h1>
      <table className="table">
        <thead>
          <tr>
            <th>รูปภาพ</th>
            <th>ชื่อสินค้า</th>
            <th>จำนวนสินค้า</th>
            <th>ราคา</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.img} alt={product.title} />
              </td>
              <td>{product.title}</td>
              <td>{product.desc} ชิ้น</td>
              <td>{product.price} บาท</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductInventory;
