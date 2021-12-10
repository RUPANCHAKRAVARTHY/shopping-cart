import Navbar from "./navbar";
import { BsLightningFill } from "react-icons/bs";
import './App.css';
import Card from "./Card"
import React, { useState } from 'react';
import Cartblock from './cartblock';
import { Items } from "./Items";

function App() {

  const [searchString, setSearchString] = useState('');
  const [dataitems, setdataitems] = useState(Items);
  const [opencart, setopencart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalvalues, settotalvalues] = useState(0);

  let openCart = () => {
    return setopencart(!opencart);
  }

  let incrementItemsCount = (id) => {
    let findincindex = dataitems.findIndex(obj => obj.id === id);
    dataitems[findincindex].count = dataitems[findincindex].count + 1;
    setdataitems([...dataitems]);
  }

  let decrementItemsCount = (id) => {
    let finddecindex = dataitems.findIndex(obj => obj.id === id);
    dataitems[finddecindex].count = dataitems[finddecindex].count - 1;
    dataitems[finddecindex].count > 0 ? setdataitems([...dataitems]) : dataitems[finddecindex].count = 1;
  }

  let totalcalc = () => {
    let ftotal = cartItems.reduce((acc, obj) => {
      return acc + (obj.count * obj.finalPrice);
    }, 0);
    settotalvalues(ftotal);
  }

  let addcartItems = (id) => {
    let finddataIndex = dataitems.findIndex(obj => obj.id === id);
    let findcartIndex = cartItems.findIndex(obj => obj.id === id);
    cartItems[findcartIndex] = dataitems[finddataIndex];
    dataitems[finddataIndex].isAddedtoCart = true;
    let finaldata = findcartIndex >= 0 ? [...cartItems] : [...cartItems, dataitems[finddataIndex]];
    setcartItems(finaldata);
  }

  let cartitemclose = (id) => {
    let finddataIndex = dataitems.findIndex(obj => obj.id === id);
    dataitems[finddataIndex].isAddedtoCart = false;
    let finditemIndex = cartItems.findIndex(obj => obj.id === id);
    cartItems.splice(finditemIndex, 1);
    setcartItems([...cartItems]);
    totalcalc();
  }

  return (
    <div className="App" >

      <div className="container-fluid mainnav" >
        <Navbar handleCart={openCart} count={cartItems.length} searchstring={searchString} setsearchstring={setSearchString} />
      </div>

      <span>
        <Cartblock status={opencart} items={cartItems} finaltotal={totalvalues} handleclose={cartitemclose} handlecalc={totalcalc} />
      </span>

      <div className="container mt-3">

        <h4 className="flashSales"><span className="flash-icon">
          <BsLightningFill style={{ color: "#e94560" }} />
        </span>Lightning Deals</h4>

        <div className="row">
          {dataitems.filter((obj) => {
            return obj.title.toLowerCase().includes(searchString.toLowerCase()) || obj.companyName.toLowerCase().includes(searchString.toLowerCase());
          }).map((obj) => {
            return <Card key={obj.id} Data={obj} handleinc={incrementItemsCount} handledec={decrementItemsCount} handleCart={addcartItems} />
          })
          }
        </div>

      </div>

    </div >
  );
}

export default App;
