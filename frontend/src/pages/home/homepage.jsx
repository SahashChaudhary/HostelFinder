import Layout from "../../component/Layout";
// import Homecard from "../../card/homecard";
import "./homepage.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LongCard from "../../card/longCard";
import CoverImage from "./coverImage";
import SubCover from "./subCover";

const Homepage = () => {
  const [hostel, setHostel] = useState([]);
  const getAllHostel = async () => {
    const response = await axios.get("http://localhost:8000/api/hostel/hostel");
    setHostel(response.data.rooms);
  };
  useEffect(() => {
    getAllHostel();
  }, []);

  return (
    <Layout>
      <CoverImage />
      <SubCover />
      <div className="flex justify-center item-center gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {hostel.map((item, id) => {
          return (
            <div key={item._id}>
              <LongCard item={item} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Homepage;
