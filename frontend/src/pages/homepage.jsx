import Layout from "../component/Layout";
import Homecard from "../card/homecard";
import "./homepage.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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
      <div className="flex gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {hostel.map((item, id) => {
          return (
            <div key={item._id}>
              <Homecard
                title={item.title}
                price={item.price}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Homepage;
