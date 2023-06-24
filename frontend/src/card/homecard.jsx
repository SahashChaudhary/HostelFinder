import "./homecard.css";
import { useNavigate } from "react-router-dom";

const homecard = ({ title, price, description }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-img">
        <div className="img"></div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-subtitle">{description}</div>
      <hr className="card-divider" />
      <div className="card-footer">
        <div className="card-price">
          <span>Nrs</span> {price}
        </div>
        <button className="card-btn">see more details</button>
      </div>
    </div>
  );
};

export default homecard;
