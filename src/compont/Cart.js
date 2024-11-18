import React from 'react';
import { useCart } from "react-use-cart";


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // ป้องกันการโหลดหน้าใหม่
      const cash = parseFloat(e.target.value);
      if (!isNaN(cash)) {
        const change = cash - cartTotal;
        alert(`ยอดเงินที่ต้องชำระ: ${cartTotal} บาท\nจำนวนเงินที่รับ: ${cash} บาท\nเงินทอน: ${change} บาท`);
        emptyCart();
      } else {
        alert("กรุณาใส่จำนวนเงินที่ถูกต้อง");
      }
    }
  };

  if (isEmpty) {
    return <h2 className="text-center" style={{marginTop: '280px',marginLeft: "32%"}}>ตะกร้าสินค้าว่าง</h2>;
  }

  return (
    <section className="py-5 container" style={{ marginTop: "25vh",marginLeft: "30%"}}>
    <div className="row justify-content-center">
      <div className="col-20 text-left">
        <h5 style={{ whiteSpace: 'nowrap' }}>Cart ({totalUniqueItems}) สินค้าในตะกร้าตอนนี้: ({totalItems})</h5>
   
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ width: "6rem", height: "6rem", objectFit: "contain" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price} บาท</td>
                    <td>({item.quantity}) ชิ้น</td>
                    <td>
                      <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button className="btn btn-info ms-2" style={{marginTop: '5px'}} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="btn btn-danger ms-2"style={{marginTop: '5px'}} onClick={() => removeItem(item.id)}>ลบสินค้า</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>ราคารวมสินค้าทั้งหมด: {cartTotal} บาท </h2>
        </div>
        
      </div>
      <div className="col-auto">
        <input
          type="number"
          placeholder="ใส่จำนวนเงินที่รับ (บาท)"
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="col-auto">
  <button className="btn btn-danger m-2" onClick={() => emptyCart()}>ล้างตะกร้า</button>
  <button className="btn btn-primary m-2" onClick={() => {
    const cash = prompt("กรุณาใส่จำนวนเงินที่รับ (บาท)", "");
    if (cash !== null && !isNaN(cash)) {
      const change = cash - cartTotal;
      alert(`ยอดเงินที่ต้องชำระ: ${cartTotal} บาท\nจำนวนเงินที่รับ: ${cash} บาท\nเงินทอน: ${change} บาท`);
      emptyCart();
    } else {
      alert("กรุณาใส่จำนวนเงินที่ถูกต้อง");
    }
  }}>ชำระเงิน</button>
</div>

    </section>
 

  );
};

export default Cart;
