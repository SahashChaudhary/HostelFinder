import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SubNav = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const navDetails = [
    { title: "Home", link: "/" },
    { title: "Boys Hostel", link: "/boys-hostel" },
    { title: "Girls Hostel", link: "/girls-hostel" },
    { title: "Add Hostel", link: isLoggedIn ? "/add_hostel" : "/login" },
    { title: "My Hostels", link: "/meroHostel" },
  ];
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          height: "50px",
          marginTop: "20px",
        }}
      >
        {navDetails.map((item, id) => {
          return (
            <Link key={id} to={item.link}>
              <button className="button">{item.title}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubNav;
