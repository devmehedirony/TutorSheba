import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";


const Root = () => {
  return (
    <div className="font-primary">
      <NavBar />
      <main className="my-10">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Root;