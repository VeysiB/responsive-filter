import { useState,useEffect } from 'react'
import Data from "./assets/Data/Data.json";
import Card from "./components/Card";
import FilterButton from './components/FilterButton';
import FilterModal from './components/FilterModal';
import './App.css'



const App = () => {
  const [item, setItem] = useState(Data);
  const [isMobile, setIsMobile] = useState(false);
  const menuItems = [...new Set(Data.map((val) => val.category))];


  const filterItems = (cat) => {
    const newItems = Data.filter((newVal) => newVal.category === cat);
    setItem(newItems);  }; 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }; 

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize


    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
        {isMobile ? (
          <>
            <button type="button" className="btn btn-dark m-3" data-bs-toggle="modal" data-bs-target="#filterModal">
              Filter
            </button>
            <FilterModal menuItems={menuItems} filterItems={filterItems} setItem={setItem} Data={Data} />
          </>
        ) : (
          <FilterButton menuItems={menuItems} filterItems={filterItems} setItem={setItem} Data={Data} />
        )}
      </div>
      <Card item={item} />
    </div>  ); }; 

export default App;
