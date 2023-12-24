import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="container mx-auto text-xl">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;