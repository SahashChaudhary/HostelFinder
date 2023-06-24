import { useNavigate } from "react-router-dom";
const SubNav = () => {
  const navigate = useNavigate();
  const navDetails = [
    "Home",
    "Boys Hostel",
    "Girls Hostel",
    "Add Hostel",
    "Add Location",
  ];

  const handleClick = (value) => {
    if (value === "Add Hostel") {
      navigate("/add_hostel");
    } else if (value === "Home") {
      navigate("/");
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          height: "50px",
        }}
      >
        {navDetails.map((item, id) => {
          return (
            <div
              key={id}
              style={{
                border: "1px solid black",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={(e) => handleClick(e.target.innerHTML)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubNav;
