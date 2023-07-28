import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../component/Layout";
import LongCard from "../../card/longCard";
import {
  UPDATE_AMENITIES,
  UPDATE_DETAILS,
  UPDATE_IMAGES,
  UPDATE_LOCATION,
} from "../../redux/reducers/hostelSlice";
import { useNavigate } from "react-router-dom";

export default function MyHostel() {
  const { id } = useSelector((state) => state.user);
  const [hostel, setHostel] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMyHostels = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/hostel/userRoom/${id}`
    );
    setHostel(data.hostels);
  };
  const handleUpdate = async (rid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/hostel/hostel/${rid}`
      );
      console.log(data);
      dispatch(
        UPDATE_LOCATION({ lng: data?.hostel?.lng, lat: data?.hostel?.lat })
      );
      dispatch(
        UPDATE_DETAILS({
          title: data?.hostel?.title,
          description: data?.hostel?.description,
          price: data?.hostel?.price,
          address: data?.hostel?.address,
        })
      );
      navigate("/update", { state: { roomId: rid, data: data.hostel } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMyHostels();
  }, []);
  return (
    <Layout>
      <div className="flex justify-center item-start gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {hostel.map((item) => {
          return (
            <div key={item._id}>
              <LongCard item={item} />
              <button className="btn" onClick={() => handleUpdate(item._id)}>
                Update
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
