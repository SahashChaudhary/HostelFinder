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
  const [pageNumber, setPageNumber] = useState();
  const [totalHostel, setTotalHostel] = useState(0);
  const [totaluser, setTotalUser] = useState(0);
  const getAllHostel = async (page) => {
    const response = await axios.get(
      `http://localhost:8000/api/hostel/product-list/${page}?size=8`
    );
    setHostel(response.data.rooms);
    setPageNumber(response.data.totalItem);
    setTotalHostel(response.data.totalHostel);
    setTotalUser(response.data.totalUser);
  };
  useEffect(() => {
    getAllHostel();
  }, []);

  return (
    <Layout>
      <CoverImage />
      <SubCover totalHostel={totalHostel} totaluser={totaluser} />
      <div className="flex justify-center item-start gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {hostel.map((item) => {
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
