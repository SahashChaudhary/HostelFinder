import ConditionalRoutes from "./routes/conditionalRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ConditionalRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
