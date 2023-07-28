import { useSelector } from "react-redux";
import LongCard from "../../card/longCard";
import Layout from "../../component/Layout";

export default function SearchHostel() {
  const { searchHostel } = useSelector((state) => state.room);

  return (
    <Layout>
      <p className="search_ui">Search Hostel</p>
      <div className="flex justify-center item-start gap-[10px] flex-wrap mt-[10px] p-[20px]">
        {searchHostel &&
          searchHostel.map((item, id) => {
            return (
              <div key={item._id}>
                <LongCard item={item} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
