import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../component/Layout";
import LongCard from "../../card/longCard";
import {
  UPDATE_DETAILS,
  UPDATE_LOCATION,
} from "../../redux/reducers/hostelSlice";
import { useNavigate } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { toast } from "react-toastify";

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
  //
  const [deletes, setDelete] = useState(false);
  //handle delete room
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/hostel/deleteHostel/${id}`
      );
      if (data && data.success) {
        toast.success(data.message);
        setDelete(!deletes);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  useEffect(() => {
    handleMyHostels();
  }, [deletes]);

  return (
    <Layout>
      <div className="flex justify-start item-start gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {hostel.map((item) => {
          return (
            <div key={item._id}>
              <LongCard item={item} />
              <div className="flex items-center justify-center gap-x-3">
                <button className="btn" onClick={() => handleUpdate(item._id)}>
                  Update
                </button>
                <Popconfirm
                  title="Delete the Hostel"
                  description="Are you sure to delete this Hostel?"
                  onConfirm={() => handleDelete(item._id)}
                  onCancel={cancel}
                  okText={<span style={{ color: "green" }}>Yes</span>}
                  cancelText={<span style={{ color: "red" }}>No</span>}
                >
                  <button type="link" className="btn uppercase">
                    Delete
                  </button>
                </Popconfirm>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
