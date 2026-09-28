import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "918380039896";

        const whatsappMessage = `
New Requirement - PS Industrial Components Pvt. Ltd.

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Requirement: ${formData.requirement}

Message:
${formData.message}
        `;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, "_blank");

        setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            requirement: "",
            message: ""
        });
    };

    return (
        <div className="contact-page">

            <section className="inner-hero">

                <span className="section-tag">
                    CONTACT US
                </span>

                <h1>
                    Let's Discuss Your Requirement
                </h1>

                <p>
                    Get in touch with PS Industrial Components
                    for industrial component requirements.
                </p>

            </section>


            <section className="contact-section">

                <div className="container-fluid">

                    <div className="row g-5">

                        <div className="col-lg-5">

                            <span className="section-tag">
                                GET IN TOUCH
                            </span>

                            <h2 className="inner-heading">
                                Let's Build
                                Something Reliable
                            </h2>

                            <p className="inner-description">
                                Have a requirement for industrial components,
                                customized parts or engineering solutions?
                                Contact our team to discuss your requirement.
                            </p>


                            <div className="contact-info">

                                <div className="contact-info-item">

                                    <div className="contact-icon">
                                        <i className="bi bi-building"></i>
                                    </div>

                                    <div>
                                        <h4>
                                            Company
                                        </h4>

                                        <p>
                                            PS Industrial Components Pvt. Ltd.
                                        </p>
                                    </div>

                                </div>


                                <div className="contact-info-item">

                                    <div className="contact-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>

                                    <div>
                                        <h4>
                                            Location
                                        </h4>

                                        <p>
                                            MIDC, Pune, Maharashtra
                                        </p>
                                    </div>

                                </div>


                                <div className="contact-info-item">

                                    <div className="contact-icon">
                                        <i className="bi bi-whatsapp"></i>
                                    </div>

                                    <div>
                                        <h4>
                                            WhatsApp
                                        </h4>

                                        <p>
                                            +91 83800 39896
                                        </p>
                                    </div>

                                </div>


                                <div className="contact-info-item">

                                    <div className="contact-icon">
                                        <i className="bi bi-clock"></i>
                                    </div>

                                    <div>
                                        <h4>
                                            Business Hours
                                        </h4>

                                        <p>
                                            Monday - Saturday
                                        </p>

                                        <p>
                                            9:00 AM - 6:00 PM
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-7">

                            <div className="contact-form-box">

                                <h3>
                                    Send Us Your Requirement
                                </h3>

                                <p>
                                    Fill in the details below and our team
                                    will get back to you.
                                </p>

                                <form onSubmit={handleSubmit}>

                                    <div className="row g-3">

                                        <div className="col-md-6">

                                            <label>
                                                Your Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6">

                                            <label>
                                                Company Name
                                            </label>

                                            <input
                                                type="text"
                                                name="company"
                                                className="form-control"
                                                placeholder="Enter company name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />

                                        </div>


                                        <div className="col-md-6">

                                            <label>
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Enter email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6">

                                            <label>
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Enter phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-12">

                                            <label>
                                                Requirement
                                            </label>

                                            <input
                                                type="text"
                                                name="requirement"
                                                className="form-control"
                                                placeholder="Enter component requirement"
                                                value={formData.requirement}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-12">

                                            <label>
                                                Message
                                            </label>

                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Tell us about your requirement"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>

                                        </div>


                                        <div className="col-12">

                                            <button
                                                type="submit"
                                                className="contact-submit-btn"
                                            >
                                                Send Requirement
                                                <i className="bi bi-whatsapp"></i>
                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="contact-bottom">

                <div className="container">

                    <div className="contact-location-box">

                        <i className="bi bi-geo-alt-fill"></i>

                        <div>
                            <h3>
                                PS Industrial Components Pvt. Ltd.
                            </h3>

                            <p>
                                MIDC, Pune, Maharashtra
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Contact;