import { useState } from "react";
import data from "./data";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";

function generateRandomQuantity() {
  return Math.floor(Math.random() * 10) + 1; //สุ่มจำนวนสินค้าที่ขายไป
  
}

function generateRandomTime() {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}`; //สุ่มเวลาที่ซื้อ
}

function ProductTable() {
  const [productList, setProductList] = useState(data.productData);

  const tableHeader = (
    <thead>
      <tr>
        <th>รูปภาพ</th>
        <th>ชื่อสินค้า</th>
        <th>ราคา</th>
        <th>เวลาที่ซื้อ</th>
        <th>จำนวนที่ขาย</th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {productList.map((product) => (
        <tr key={product.id}>
          <td>
            <img src={product.img} alt={product.title} width="50" />
          </td>
          <td>{product.title}</td>
          <td>{product.price} บาท</td>
          <td>{generateRandomTime()}</td>
          <td>{generateRandomQuantity()} ชิ้น</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className="table">
      {tableHeader}
      {tableBody}
    </table>
  );
}

export default ProductTable;
