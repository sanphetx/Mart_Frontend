import React from "react";
import Item1 from "./Item1";
import data from "./data";
const Home = () => {
    return (
      <>
        
        <section className="py-4 container" style={{ marginTop: "30vh"}}>
          <div className="row justify-content-left">
          <h3 id="h3"> รายการสินค้า</h3>
            {data.productData.map((item, index) => {
              return (
                <Item1
                  img={item.img}
                  title={item.title}
                  desc={item.esc}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
            
          </div>
        </section>
        
      </>
      
    );
  };
export default Home;