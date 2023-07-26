import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ImgSwiper from "./imgSwapper";
import Layout from "../../component/Layout";
import { BiSolidEditLocation } from "react-icons/bi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FcHome } from "react-icons/fc";
import { AiFillSketchCircle } from "react-icons/ai";

import "./style.css";

export default function RespectiveHostel() {
  const { state } = useLocation();
  const [hostel, setHostel] = useState({});

  const getSingleHostel = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/hostel/hostel/${state}`
    );
    setHostel(data.hostel);
  };

  useEffect(() => {
    getSingleHostel();
  }, [state]);

  return (
    <Layout>
      <div className=" m-3 mr-10 ml-10">
        <ImgSwiper item={hostel.img_collection} />
        <div className="respective_hostel_container flex flex-col gap-y-3">
          <div className="resp_title_price">
            <p className="respective_hostel_title">{hostel.title}</p>
            <p className=" p-2 border w-52 text-center rounded-lg bg-emerald-800 text-[white]">
              Nrs {hostel.price}
            </p>
          </div>
          <div className="flex gap-x-10 items-center">
            <div className="flex gap-x-2 items-center">
              <BiSolidEditLocation className=" text-[#7dc142]" />
              <p className="respective_hostel_address">{hostel.address}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <BsFillTelephoneForwardFill />
              <p className="respective_hostel_address">{hostel.phone}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <FcHome />
              <p className="respective_hostel_address">{hostel.catagory}</p>
            </div>
          </div>
          <div className="res_hostel_des">
            <p className="res_hostel_title">Hostel Details</p>
            <p>{hostel.description}</p>
          </div>
          <div className="res_features">
            <p className="res_hostel_title">Hostel Features</p>
            {hostel.features &&
              hostel?.features.split(",").map((item, id) => {
                return (
                  <div key={id} className="flex gap-x-2 mb-2 items-center">
                    <AiFillSketchCircle />
                    <p className="res_title_features">{item}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
