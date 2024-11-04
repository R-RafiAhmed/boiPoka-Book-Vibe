import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <main className="container m-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;