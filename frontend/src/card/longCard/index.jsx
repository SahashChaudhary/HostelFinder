import { Avatar } from "@mui/material";
import styles from "./style.module.css";
import PropTypes from "prop-types";

export default function LongCard({ item }) {
  return (
    <div className={styles.long_card_container}>
      <div className={styles.image}>
        <img src={item?.img_collection[0]} alt="image" />
      </div>
      <div className={styles.content_container}>
        <div className={styles.user}>
          <Avatar src="https://picsum.photos/200">N</Avatar>
        </div>
        <div className={styles.hoster_details}>
          <p className=" font-extrabold text-2xl w-[250px]">{item?.title}</p>
          <p className=" font-bold text-xl text-blue-600">Nrs: {item.price}</p>
          <div className={styles.label_value_wrapper}>
            <p className={styles.label}>Categroty:</p>
            <p className={styles.value}>{item.catagory}</p>
          </div>
          <div className={styles.label_value_wrapper}>
            <p className={styles.label}>Contact:</p>
            <p className={styles.value}>{item.phone}</p>
          </div>
          <div className={styles.label_value_wrapper}>
            <p className={styles.label}>Address:</p>
            <p className={styles.value}>{item.address}</p>
          </div>
          <button className="btn mt-8">See more details</button>
        </div>
      </div>
    </div>
  );
}
LongCard.propTypes = {
  item: PropTypes.object,
};
