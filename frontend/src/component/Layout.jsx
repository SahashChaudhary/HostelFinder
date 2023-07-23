import Footer from "./Footer";
import Header from "./Header";
import SubNav from "./subNav";

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

export default Layout;
