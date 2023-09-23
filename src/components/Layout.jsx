import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <section className="py-4 shadow-lg flex justify-between px-10">
                <div className="text-xl font-semibold">Amajhon</div>
                <ul className="flex gap-5 font-semibold">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" >Dashboard</Link>
                    </li>
                </ul>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;