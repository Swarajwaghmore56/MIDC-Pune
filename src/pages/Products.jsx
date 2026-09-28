function Products() {
    return (
        <div className="products-page">

            <section className="products-hero">

                <span className="section-tag">
                    OUR PRODUCTS
                </span>

                <h1>
                    Industrial Components
                </h1>

                <p>
                    Precision-engineered components designed for
                    reliable industrial performance.
                </p>

            </section>


            <section className="products-list-section">

                <div className="container-fluid">

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
                                    High-precision gears designed for
                                    industrial machinery and mechanical
                                    applications.
                                </p>

                                <button className="product-details-btn">
                                    View Details
                                    <i className="bi bi-arrow-right"></i>
                                </button>

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
                                    machinery and industrial equipment.
                                </p>

                                <button className="product-details-btn">
                                    View Details
                                    <i className="bi bi-arrow-right"></i>
                                </button>

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
                                    Customized machined components
                                    manufactured according to specific
                                    requirements.
                                </p>

                                <button className="product-details-btn">
                                    View Details
                                    <i className="bi bi-arrow-right"></i>
                                </button>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-wrench-adjustable"></i>
                                </div>

                                <h4>
                                    Precision Parts
                                </h4>

                                <p>
                                    Precision components for various
                                    engineering and manufacturing
                                    applications.
                                </p>

                                <button className="product-details-btn">
                                    View Details
                                    <i className="bi bi-arrow-right"></i>
                                </button>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-hammer"></i>
                                </div>

                                <h4>
                                    Fabricated Components
                                </h4>

                                <p>
                                    Industrial fabricated components
                                    designed for demanding applications.
                                </p>

                                <button className="product-details-btn">
                                    View Details
                                    <i className="bi bi-arrow-right"></i>
                                </button>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">

                            <div className="product-card">

                                <div className="product-icon">
                                    <i className="bi bi-box-seam"></i>
                                </div>

                                <h4>
                                    Custom Components
                                </h4>

                                <p>
                                    Customized components manufactured
                                    based on customer specifications.
                                </p>

                                <button className="product-details-btn">
                                    View Details
                                    <i className="bi bi-arrow-right"></i>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="products-cta">

                <h2>
                    Need a Customized Component?
                </h2>

                <p>
                    Share your requirement with our engineering team.
                </p>

                <a href="/contact" className="primary-btn">
                    Get a Quote
                    <i className="bi bi-arrow-right"></i>
                </a>

            </section>

        </div>
    );
}

export default Products;