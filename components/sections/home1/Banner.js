
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-one">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/s10.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>Soluciones en Equipos de Refrigeración </h3>
                                    <h2>Especialistas <br /> en en Ramo</h2>
                                    
                                    <div className="text">con un Equipo especializado y preparado para responder a sus solicitudes .</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Our Company</span></Link>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/s9.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3 >Soluciones inmediatas </h3>
                                    <h2>Reparacion y  <br /> mantenimiento</h2>
                                    <div className="text" >Reparación Mantenimiento Preventivo en todos los equipos de Refrigeración.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Our Company</span></Link>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/s11.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3>Contactenos estamos a un clic de distancia </h3>
                                    <h2>Ponte en  <br /> Contacto</h2>
                                    
                                    <div className="text">Nuestros operadores los atenderan con mucho gusto .</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">LA empresa</span></Link>
                                        <Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Contactanos </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
