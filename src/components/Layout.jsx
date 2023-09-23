import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <section className="py-4 shadow-lg flex justify-between px-10">
                <div className="text-xl font-semibold">Amajhon</div>
                <ul className="flex gap-5 font-semibold">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                </ul>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;