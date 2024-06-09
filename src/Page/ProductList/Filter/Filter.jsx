import React, { useState } from "react";
import Item from "./Item/Item";
import ItemColor from "./ItemColor/ItemColor";
import { useEffect } from "react";
import "./index.css";

const Filter = ({ data, setData }) => {
  // Khởi tạo các mảng điều kiện
  let count = 0;
  const [none, setNone] = useState(true);
  const [none1, setNone1] = useState(true);
  const [none2, setNone2] = useState(true);
  const [none3, setNone3] = useState(true);
  const [none4, setNone4] = useState(true);
  const [none5, setNone5] = useState(true);

  const setclassName = (e) => {
    if (e == true) return "list-filter block";
    else return "list-filter none";
  };
  const [arrcost, setArrcost] = useState([
    { name: "Dưới 1.000.000₫", check: false },
    { name: "Từ 1.000.000₫ - 1.500.000₫", check: false },
    { name: "Từ 1.500.000₫ - 3.000.000₫", check: false },
    { name: "Từ 3.000.000₫ - 5.000.000₫", check: false },
    { name: "Trên 5.000.000₫", check: false },
  ]);
  const [arrcolor, setArrcolor] = useState([
    { name: "Green", check: false },
    { name: "Red", check: false },
    { name: "Black", check: false },
    { name: "Pink", check: false },
    { name: "Yellow", check: false },
  ]);

  // Khởi tạo mảng điều type
  let dk = new Set();
  data.forEach((e) => {
    dk.add(e.type);
  });
  let arrtmp = [];
  const [arrtype, setArrtype] = useState([]);

  useEffect(() => {
    dk.forEach((e) => {
      arrtmp.push({ name: e, check: false });
    });
    arrtmp.sort((fi, se) => {
      let x = fi.name.toLowerCase();
      let y = se.name.toLowerCase();

      return x == y ? 0 : x > y ? 1 : -1;
    });
    setArrtype([...arrtmp]);
  }, []);

  // Xử lý điều kiện type
  useEffect(() => {
    let count = 0;
    setData((currentData) => {
      let newData = [...currentData]; // create a new copy of currentData
      arrtype.forEach((item) => {
        if (item.check === true) {
          count += 1;
          newData = newData.map((e) => {
            if (e.type !== item.name) {
              return { ...e, hide: false };
            }
            return e;
          });
        }
      });
      if (count === 0) {
        newData = newData.map((e) => ({ ...e, hide: true }));
      }
      return newData; // update the state
    });
  }, [arrtype]);

  // Xử lý điều kiện cost
  useEffect(() => {
    count = 0;
    arrcost.forEach((item) => {
      if (item.check == true) count += 1;
    });
    if (arrcost[0].check == true) {
      data.forEach((e) => {
        if (e.cost >= 1000000) e.hide = false;
      });
    }
    if (arrcost[1].check == true) {
      data.forEach((e) => {
        if (e.cost < 1000000 || e.cost >= 1500000) e.hide = false;
      });
    }
    if (arrcost[2].check == true) {
      data.forEach((e) => {
        if (e.cost < 1500000 || e.cost >= 3000000) e.hide = false;
      });
    }
    if (arrcost[3].check == true) {
      data.forEach((e) => {
        if (e.cost < 3000000 || e.cost >= 5000000) e.hide = false;
      });
    }
    if (arrcost[4].check == true) {
      data.forEach((e) => {
        if (e.cost < 20000000) e.hide = false;
      });
    }
    if (count == 0)
      data.forEach((e) => {
        e.hide = true;
      });
    setData([...data]);
  }, [arrcost]);

  // Thay đổi điều kiện khi input thay đổi
  const ChangeDk = (e) => {
    arrtype.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrtype([...arrtype]);
      }
    });
    arrcolor.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrcolor([...arrcolor]);
      }
    });
    arrcost.forEach((item) => {
      if (item.name == e) {
        item.check = !item.check;
        setArrcost([...arrcost]);
      }
    });
  };
  
  /*------------------------------------------------------------------------------------------------*/

  // Render
  return (
    <div className="filter">
      <div className="brand">
        <h2
          onClick={() => {
            setNone(!none);
          }}>
          Thương hiệu sản phẩm
        </h2>
        <div className={setclassName(none)}>
          <div>
            <input
              type="checkbox"
              id="thsp"
            />
            <label htmlFor="thsp"> Shoes Babies</label>
          </div>
        </div>
      </div>
      <div className="type">
        <h2
          onClick={() => {
            setNone1(!none1);
          }}>
          Loại sản phẩm
        </h2>
        <div className={setclassName(none1)}>
          {arrtype.map((item, index) => {
            return (
              <Item
                data={item}
                key={index}
                id={index}
                ChangeDk={ChangeDk}
              />
            );
          })}
        </div>
      </div>

      <div className="color">
        <h2
          onClick={() => {
            setNone3(!none3);
          }}>
          Màu sắc
        </h2>
        <div className={setclassName(none3)}>
          {arrcolor.map((item, index) => {
            return (
              <ItemColor
                data={item}
                id={index + 200}
                key={index + 200}
                ChangeDk={ChangeDk}
              />
            );
          })}
        </div>
      </div>
      <div className="fil_cost">
        <h2
          onClick={() => {
            setNone4(!none4);
          }}>
          Giá sản phẩm
        </h2>
        <div className={setclassName(none4)}>
          {arrcost.map((item, index) => {
            return (
              <Item
                data={item}
                id={index + 300}
                key={index + 300}
                ChangeDk={ChangeDk}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
