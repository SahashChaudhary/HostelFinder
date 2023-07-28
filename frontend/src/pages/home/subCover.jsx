import { FaBed, FaCity } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import PropTypes from "prop-types";
export default function SubCover({ totalHostel, totaluser }) {
  const data = [
    {
      icon: <FaBed />,
      value: totaluser + " Client",
    },
    {
      icon: <AiFillHome />,
      value: totalHostel + "+ Hostels",
    },
    {
      icon: <PiStudentBold />,
      value: "Student Friendly",
    },
    {
      icon: <FaCity />,
      value: "3 Cities",
    },
  ];
  return (
    <div className="flex justify-center item-center gap-x-40">
      {data.map((item, id) => {
        return (
          <div
            key={id}
            className="flex flex-col gap-y-3 items-center justify-center"
          >
            <div className="sub_cover_icon">{item.icon}</div>
            <p>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
SubCover.propTypes = {
  totalHostel: PropTypes.number,
  totaluser: PropTypes.number,
};
