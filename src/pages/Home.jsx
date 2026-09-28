import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">

            <section className="machinery-section">
                <div className="container-fluid">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="section-tag">
                                INDUSTRIAL MANUFACTURING
                            </span>

                            <h1 className="machinery-title">
                                Precision Engineering.
                                <span> Trusted Industrial Components.</span>
                            </h1>

                            <p className="machinery-text">
                                PS Industrial Components Pvt. Ltd. is a
                                Pune-based industrial components manufacturing
                                company providing reliable, precision-engineered
                                components and customized manufacturing solutions.
                            </p>

                            <p className="machinery-text">
                                Since <strong>2012</strong>, we have been focused
                                on quality manufacturing, consistent performance,
                                and long-term customer relationships.
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
                                        <h2>770+</h2>
                                        <p>Happy Customers</p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="stat-card">
                                        <h2>10+</h2>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="machinery-image">

                                <div className="image-content">

                                    <i className="bi bi-gear-wide-connected"></i>

                                    <h3>
                                        Advanced Machinery
                                    </h3>

                                    <p>
                                        Precision manufacturing for
                                        demanding industrial applications.
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
                            Engineering You Can Depend On
                        </h2>

                        <p>
                            We combine manufacturing expertise, modern
                            processes and quality-focused production to
                            deliver dependable industrial components.
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
                                    Every component is manufactured with
                                    attention to precision, durability,
                                    and consistent quality.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card">

                                <i className="bi bi-tools"></i>

                                <h4>
                                    Customized Solutions
                                </h4>

                                <p>
                                    Customized component manufacturing
                                    solutions designed around specific
                                    industrial requirements.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card">

                                <i className="bi bi-buildings"></i>

                                <h4>
                                    Industrial Expertise
                                </h4>

                                <p>
                                    Reliable engineering solutions for
                                    multiple industrial sectors and
                                    applications.
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
                                    EST. 2012
                                </span>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <span className="section-tag">
                                ABOUT OUR COMPANY
                            </span>

                            <h2 className="home-heading">
                                Building Better Components
                                For Modern Industry
                            </h2>

                            <p className="home-description">
                                PS Industrial Components Pvt. Ltd. is
                                committed to delivering dependable
                                industrial components for businesses
                                that demand precision and performance.
                            </p>

                            <p className="home-description">
                                From component manufacturing to customized
                                engineering requirements, our approach
                                focuses on quality, consistency and
                                customer satisfaction.
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
                            Industrial Components
                        </h2>

                        <p>
                            Engineered component solutions for
                            demanding industrial applications.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">
                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-gear"></i>
                                </div>

                                <h4>
                                    Precision Gears
                                </h4>

                                <p>
                                    Precision-manufactured gears designed
                                    for reliable industrial performance.
                                </p>

                                <Link to="/products">
                                    View Product
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-circle"></i>
                                </div>

                                <h4>
                                    Industrial Shafts
                                </h4>

                                <p>
                                    Durable shafts manufactured for
                                    industrial machinery and equipment.
                                </p>

                                <Link to="/products">
                                    View Product
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-nut"></i>
                                </div>

                                <h4>
                                    Machined Components
                                </h4>

                                <p>
                                    Customized machined components built
                                    according to specific requirements.
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
                            INDUSTRIES WE SERVE
                        </span>

                        <h2>
                            Supporting Multiple Industries
                        </h2>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="industry-card">

                                <i className="bi bi-car-front"></i>

                                <h4>
                                    Automotive
                                </h4>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="industry-card">

                                <i className="bi bi-gear-wide-connected"></i>

                                <h4>
                                    Engineering
                                </h4>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="industry-card">

                                <i className="bi bi-truck"></i>

                                <h4>
                                    Heavy Machinery
                                </h4>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="industry-card">

                                <i className="bi bi-lightning-charge"></i>

                                <h4>
                                    Energy
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
                                OUR INFRASTRUCTURE
                            </span>

                            <h2 className="home-heading">
                                Modern Manufacturing
                                Infrastructure
                            </h2>

                            <p className="home-description">
                                Our manufacturing environment is designed
                                to support precision production, quality
                                inspection and efficient industrial
                                component manufacturing.
                            </p>

                            <div className="infrastructure-list">

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Precision Manufacturing
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Quality Inspection
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Modern Equipment
                                </div>

                                <div>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Efficient Production
                                </div>

                            </div>

                            <Link
                                to="/infrastructure"
                                className="learn-btn"
                            >
                                Explore Infrastructure
                                <i className="bi bi-arrow-right"></i>
                            </Link>

                        </div>

                        <div className="col-lg-5">

                            <div className="factory-box">

                                <i className="bi bi-buildings"></i>

                                <h3>
                                    Pune Manufacturing Facility
                                </h3>

                                <p>
                                    MIDC, Pune, Maharashtra
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
                            Industrial Components?
                        </h2>

                        <p>
                            Discuss your manufacturing requirements
                            with our team.
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

