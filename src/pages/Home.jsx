import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">

            <section className="machinery-section">

                <div className="container-fluid">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="section-tag">
                                SHEET METAL PRESS TOOLS
                            </span>

                            <h1 className="machinery-title">
                                Precision Press Tools.
                                <span> Reliable Tooling Solutions.</span>
                            </h1>

                            <p className="machinery-text">
                                Vedant Enterprises is a small-scale manufacturer
                                specializing in sheet metal press tools and
                                precision tooling solutions for industrial
                                manufacturing requirements.
                            </p>

                            <p className="machinery-text">
                                Our capabilities include forming, blanking,
                                piercing and bending tools, supported by
                                reliable turning and hardening operations.
                            </p>

                            <div className="hero-buttons">

                                <Link
                                    to="/products"
                                    className="primary-btn"
                                >
                                    Explore Products
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                                <Link
                                    to="/contact"
                                    className="secondary-btn"
                                >
                                    Get a Quote
                                </Link>

                            </div>

                            <div className="row g-3 mt-4">

                                <div className="col-sm-6">

                                    <div className="stat-card">

                                        <h2>4+</h2>

                                        <p>
                                            Press Tool Types
                                        </p>

                                    </div>

                                </div>

                                <div className="col-sm-6">

                                    <div className="stat-card">

                                        <h2>2+</h2>

                                        <p>
                                            Supporting Operations
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="machinery-image">

                                <div className="image-content">

                                    <i className="bi bi-gear-wide-connected"></i>

                                    <h3>
                                        Precision Tooling
                                    </h3>

                                    <p>
                                        Reliable press tool manufacturing
                                        for sheet metal applications.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="quality-section">

                <div className="container-fluid">

                    <div className="home-section-heading">

                        <span className="section-tag">
                            WHY CHOOSE US
                        </span>

                        <h2>
                            Precision You Can Depend On
                        </h2>

                        <p>
                            We focus on precision manufacturing, consistent
                            quality and dependable tooling solutions for
                            sheet metal applications.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">

                            <div className="feature-card">

                                <i className="bi bi-patch-check"></i>

                                <h4>
                                    Quality-Focused Manufacturing
                                </h4>

                                <p>
                                    Press tools are manufactured with
                                    attention to accuracy, consistency
                                    and reliable performance.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="feature-card">

                                <i className="bi bi-tools"></i>

                                <h4>
                                    Customized Tooling
                                </h4>

                                <p>
                                    Tooling solutions can be developed
                                    according to specific sheet metal
                                    component requirements.
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="feature-card">

                                <i className="bi bi-bullseye"></i>

                                <h4>
                                    Precision & Consistency
                                </h4>

                                <p>
                                    Our manufacturing approach focuses on
                                    dimensional accuracy and consistent
                                    tooling quality.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="home-about">

                <div className="container-fluid">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <div className="about-visual">

                                <i className="bi bi-building-gear"></i>

                                <span>
                                    VEDANT ENTERPRISES
                                </span>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <span className="section-tag">
                                ABOUT OUR COMPANY
                            </span>

                            <h2 className="home-heading">
                                Precision Tooling
                                For Sheet Metal Applications
                            </h2>

                            <p className="home-description">
                                Vedant Enterprises is a small-scale
                                manufacturer specializing in sheet metal
                                press tools and precision tooling solutions.
                            </p>

                            <p className="home-description">
                                Our tooling capabilities include forming,
                                blanking, piercing and bending, with
                                supporting turning and hardening operations
                                through reliable suppliers.
                            </p>

                            <Link
                                to="/about"
                                className="learn-btn"
                            >
                                Learn More
                                <i className="bi bi-arrow-right"></i>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            <section className="products-section">

                <div className="container-fluid">

                    <div className="home-section-heading">

                        <span className="section-tag">
                            OUR PRODUCTS
                        </span>

                        <h2>
                            Sheet Metal Press Tools
                        </h2>

                        <p>
                            Precision tooling solutions designed for
                            different sheet metal manufacturing applications.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-box"></i>
                                </div>

                                <h4>
                                    Forming Tools
                                </h4>

                                <p>
                                    Tooling solutions for shaping and
                                    forming sheet metal components.
                                </p>

                                <Link to="/products">
                                    View Product
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-scissors"></i>
                                </div>

                                <h4>
                                    Blanking Tools
                                </h4>

                                <p>
                                    Press tooling designed for accurate
                                    blanking operations.
                                </p>

                                <Link to="/products">
                                    View Product
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-bullseye"></i>
                                </div>

                                <h4>
                                    Piercing Tools
                                </h4>

                                <p>
                                    Precision tooling for creating holes
                                    and openings in sheet metal components.
                                </p>

                                <Link to="/products">
                                    View Product
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-layers"></i>
                                </div>

                                <h4>
                                    Bending Tools
                                </h4>

                                <p>
                                    Tooling solutions for accurate sheet
                                    metal bending and forming operations.
                                </p>

                                <Link to="/products">
                                    View Product
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="industries-section">

                <div className="container-fluid">

                    <div className="home-section-heading">

                        <span className="section-tag">
                            OUR CAPABILITIES
                        </span>

                        <h2>
                            Tooling & Manufacturing Capabilities
                        </h2>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-card">

                                <i className="bi bi-box"></i>

                                <h4>
                                    Forming
                                </h4>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-card">

                                <i className="bi bi-scissors"></i>

                                <h4>
                                    Blanking
                                </h4>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-card">

                                <i className="bi bi-bullseye"></i>

                                <h4>
                                    Piercing
                                </h4>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-card">

                                <i className="bi bi-layers"></i>

                                <h4>
                                    Bending
                                </h4>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-card">

                                <i className="bi bi-gear"></i>

                                <h4>
                                    Turning
                                </h4>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="industry-card">

                                <i className="bi bi-fire"></i>

                                <h4>
                                    Hardening
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="infrastructure-section">

                <div className="container-fluid">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-7">

                            <span className="section-tag">
                                OUR CUSTOMERS
                            </span>

                            <h2 className="home-heading">
                                Trusted Customer
                                Relationships
                            </h2>

                            <p className="home-description">
                                Vedant Enterprises works with organizations
                                across the engineering and tooling sector,
                                focusing on dependable tooling solutions
                                and long-term professional relationships.
                            </p>

                            <div className="infrastructure-list">

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Reliable Tooling Solutions
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Consistent Quality
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Precision Manufacturing
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Long-Term Relationships
                                </div>

                            </div>

                            <Link
                                to="/major-customers"
                                className="learn-btn"
                            >
                                View Major Customers
                                <i className="bi bi-arrow-right"></i>
                            </Link>

                        </div>

                        <div className="col-lg-5">

                            <div className="factory-box">

                                <i className="bi bi-people"></i>

                                <h3>
                                    Major Customers
                                </h3>

                                <p>
                                    Engineering & Tooling Industry
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="home-cta">

                <div className="container">

                    <div className="cta-content">

                        <span>
                            LET'S BUILD TOGETHER
                        </span>

                        <h2>
                            Looking For Reliable
                            Sheet Metal Press Tools?
                        </h2>

                        <p>
                            Discuss your tooling requirements
                            with Vedant Enterprises.
                        </p>

                        <Link
                            to="/contact"
                            className="cta-btn"
                        >
                            Get In Touch
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;
