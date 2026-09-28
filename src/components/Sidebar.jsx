import { NavLink } from "react-router-dom";

function Sidebar({ isOpen }) {
    const menuItems = [
        { name: "Home", path: "/", icon: "bi-house" },
        { name: "About Us", path: "/about", icon: "bi-building" },
        { name: "Products", path: "/products", icon: "bi-gear" },
        { name: "Infrastructure", path: "/infrastructure", icon: "bi-buildings" },
        { name: "Quality", path: "/quality", icon: "bi-patch-check" },
        { name: "Industries", path: "/industries", icon: "bi-tools" },
        { name: "Contact Us", path: "/contact", icon: "bi-envelope" }
    ];

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>

            <div className="sidebar-header">

                <div className="company-logo">
                    PS
                </div>

                <div>
                    <h5>PS INDUSTRIAL</h5>
                    <small>COMPONENTS PVT. LTD.</small>
                </div>

            </div>

            <div className="sidebar-menu">

                <p className="menu-title">
                    MAIN MENU
                </p>

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className={`bi ${item.icon}`}></i>
                        <span>{item.name}</span>
                    </NavLink>
                ))}

            </div>

            <div className="sidebar-bottom">

                <p>
                    Need a Quote?
                </p>

                <NavLink
                    to="/contact"
                    className="quote-btn"
                >
                    Get In Touch
                </NavLink>

            </div>

        </aside>
    );
}

export default Sidebar;