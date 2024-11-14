import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Footer from "./components/Footer";
import ScrollToTop from "./subComponents/ScrollToTop";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <ScrollToTop/>
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
