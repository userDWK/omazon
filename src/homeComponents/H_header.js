import React, { useEffect, useState } from "react";
import styleHome from "../css/styleHome.module.css";

const H_header = () => {
  const { kakao } = window;
  const [pos, setPos] = useState({});
  const [error, setError] = useState("");
  const [add, setAdd] = useState("");
  const getAddr = () => {
    let geoCoder = new kakao.maps.services.Geocoder();
    let coord = new kakao.maps.LatLng(pos.lat, pos.lng);
    let callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const arr = { ...result };
        const _arr = arr[0].address.address_name;
        setAdd(_arr);
      }
    };
    geoCoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };
  useEffect(() => {
    const success = (position) => {
      setPos({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };
    const error = (error) => {
      setError(error.message);
    };
    navigator.geolocation.getCurrentPosition(success, error);
    getAddr();
  }, []);
  return (
    <div className={styleHome.con}>
      <div className={styleHome.headerUpper}>
        <div className={styleHome.headerLogo}></div>
        <div className={styleHome.headerlocation}>
          <p>
            Deliver to
            <i></i>
            <br />
            <span>{add}</span>
          </p>
        </div>
        <div className={styleHome.headerSearch}>
          <div className={styleHome.searchBox}>
            <form>
              <select>
                <option>All</option>
                <option>All Departments</option>
                <option>Arts & Crafts</option>
                <option>Baby</option>
                <option>Beauty & Personal Care</option>
                <option>Books</option>
                <option>Boys' Fashion</option>
                <option>Computers</option>
                <option>Deals</option>
                <option>Digital Music</option>
                <option>Electronics</option>
                <option>Girls' Fashion</option>
                <option>Health & Household</option>
                <option>Home & Kitchen</option>
                <option>Industrial & Scientific</option>
                <option>Kindle Store</option>
                <option>Luggage</option>
                <option>Men's Fashion</option>
                <option>Movies & TV</option>
                <option>Music, CDs & Vinyl</option>
                <option>Pet Supplies</option>
                <option>Prime Video</option>
                <option>Software</option>
                <option>Sports & Outdoors</option>
                <option>Tools & Home Improvement</option>
                <option>Toys & Games</option>
                <option>Video Games</option>
                <option>Women's Fashion</option>
              </select>
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
        </div>
        <div className={styleHome.headerLanguage}></div>
        <div className={styleHome.headerSign}></div>
        <div className={styleHome.headerOrder}></div>
        <div className={styleHome.headerCart}></div>
      </div>
      <div className={styleHome.headerLower}>
        <div className={styleHome.navBox}>
          <nav>
            {/* <button></button> */}
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default H_header;
