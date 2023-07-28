import Layout from "../../component/Layout";
// import Homecard from "../../card/homecard";
import "./homepage.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LongCard from "../../card/longCard";
import CoverImage from "./coverImage";
import SubCover from "./subCover";
import Paginations from "../../Utils/pagination";

const Homepage = () => {
  const [hostel, setHostel] = useState([]);
  const [radio, setRadio] = useState([]);
  const [pageNumber, setPageNumber] = useState();
  const getAllHostel = async (page) => {
    const response = await axios.get(
      `http://localhost:8000/api/hostel/product-list/${page}?size=6`
    );
    setHostel(response.data.rooms);
    setPageNumber(response.data.totalItem);
  };
  useEffect(() => {
    getAllHostel();
  }, []);

  return (
    <Layout>
      <CoverImage />
      <SubCover />
      <div className="flex justify-center item-start gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {hostel.map((item, id) => {
          return (
            <div key={item._id}>
              <LongCard item={item} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end p-10">
        <Paginations pageNumber={pageNumber} handlePage={getAllHostel} />
      </div>
    </Layout>
  );
};

export default Homepage;
