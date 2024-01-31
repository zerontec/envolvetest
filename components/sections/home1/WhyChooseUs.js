

export default function WhyChooseUs() {
    return (
        <>
            <section className="why-choose-us-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/bg2.png)' }} />
                <div className="side-image"><img src="/assets/images/resource/bgwh2.png" alt="" /></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="sec-title light">
                                <h2>Razones por las cuales <br />elegirnos</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <ul className="features-list">
                                <li className="single-feature-item">
                                    <h5>Compromiso con la Calidad</h5>
                                    <span className="text">Nos enorgullece mantener los más altos estándares de calidad en todo lo que hacemos. Desde la selección de materiales hasta la entrega final, cada detalle cuenta.</span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Experiencia y Expertise</h5>
                                    <span className="text">Con 10 años de experiencia en el sector, nuestro equipo cuenta con la experiencia y el conocimiento necesarios para abordar los desafíos más complejos. </span>
                                </li>
                                <li className="single-feature-item">
                                    <h5>Soporte a tiempo</h5>
                                    <span className="text"> Nuestro equipo trabaja arduamente para brindar un soporte a tiempo y de calidad . </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="consult-form">
                                <form method="post" action="sendemail.php" className="contact-form">
                                    <h2>Solicita una cita<br />es totalmente gratis</h2>
                                    <div className="row clearfix">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <select className="custom-select" name="subject">
                                                <option value="*">Audit &amp; Asurance</option>
                                                <option value=".category-1">Business Aproach</option>
                                                <option value=".category-2">Trades &amp; Stock Market</option>
                                                <option value=".category-3">Strategy &amp; Planning</option>
                                                <option value=".category-4">Software &amp; Research</option>
                                                <option value=".category-5">Support &amp; Maintenance</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="btn-title">Send request</span></button>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <button className="theme-btn btn-style-three" type="submit" name="submit-form"><i className="far fa-calendar" />For flexible schedule</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
