import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <section className="py-4 shadow-lg">Nav</section>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;