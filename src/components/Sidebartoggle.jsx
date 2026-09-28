function SidebarToggle({ isOpen, setIsOpen }) {
    return (
        <button
            className="sidebar-toggle"
            onClick={() => setIsOpen(!isOpen)}
        >
            <i className="bi bi-three-dots-vertical"></i>
        </button>
    );
}

export default SidebarToggle;