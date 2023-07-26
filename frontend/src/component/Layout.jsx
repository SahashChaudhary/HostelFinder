import Footer from "./Footer";
import Header from "./Header";
import SubNav from "./subNav";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <SubNav />
      </div>
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
