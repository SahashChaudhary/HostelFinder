import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ImgSwiper from "./imgSwapper";
import Layout from "../../component/Layout";

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
      <div>
        <ImgSwiper item={hostel.img_collection} />
        <p>{hostel.title}</p>
        <p>{hostel.price}</p>
        <p>{hostel.description}</p>
        <p>{hostel.phone}</p>
        <p>{hostel.address}</p>
        <p>{hostel.catagory}</p>
      </div>
    </Layout>
  );
}
