import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Conoce algunos de  &amp; <br /> nuestros servicios </h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-career" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/servicio.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Prevención</h5>
                                    <h4>Mantenimiento Preventivo</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Prevención </h5>
                                        <h4>mantenimiento Preventivo</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(assets/images/resource/servicio.jpg)' }}>
                                        <p>Ofrecemos servicios de mantenimiento regular para asegurar el óptimo funcionamiento de los sistemas de refrigeración.</p>
                                        <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-question" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/servicio1.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Conocimiento</h5>
                                    <h4>Reparación de sistemas de refrigeración </h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Conocimiento</h5>
                                        <h4>Reparación de sistemas de refrigeración </h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(assets/images/resource/servicio1.jpg)' }}>
                                        <p>Nuestro equipo de técnicos altamente capacitados está preparado para diagnosticar y reparar cualquier tipo de avería en sistemas de refrigeración.</p>
                                        <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-customer-service" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/servicio2.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Soluciones</h5>
                                    <h4>Instalación de sitemas de Refrigeración</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Soluciones</h5>
                                        <h4>Instalación de sitemas de Refrigeración</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(assets/images/resource/servicio2.jpg)' }}>
                                        <p>Brindamos servicios completos de instalación de sistemas de refrigeración, ya sea para hogares, oficinas o comercios.</p>
                                        <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content text-center">
                        <div className="text">Necesitas  ayuda? .</div>
                        <h3>Realiza una cita es totalmente gratis</h3>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Enviar solicitud</span></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}
