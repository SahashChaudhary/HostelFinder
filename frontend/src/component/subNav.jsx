import { Link } from "react-router-dom";
const SubNav = () => {
  const navDetails = [
    { title: "Home", link: "/" },
    { title: "Boys Hostel", link: "/boys-hostel" },
    { title: "Girls Hostel", link: "/girls-hostel" },
    { title: "Add Hostel", link: "/add_hostel" },
    { title: "Add Location", link: "/" },
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
        }}
      >
        {navDetails.map((item, id) => {
          return (
            <Link key={id} to={item.link}>
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: "lightblue",
                  color: "black",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubNav;
