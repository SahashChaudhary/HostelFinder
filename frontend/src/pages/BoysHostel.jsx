import Layout from "../component/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LongCard from "../card/longCard";

const BoysHostel = () => {
  const [hostel, setHostel] = useState([]);
  const getAllHostel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/hostel/catagory/boyshostel"
      );
      console.log(response);
      setHostel(response.data.hostels);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllHostel();
  }, []);

  return (
    <Layout>
      <LongCard />
    </Layout>
  );
};

export default BoysHostel;
