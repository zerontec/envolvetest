'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // }
}

export default function MapSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel position-relative">
                <SwiperSlide className="inner-box">
                    <div className="icon-box">
                        <div className="icon"><span className="flaticon-discussion" /></div>
                        <h4>USA </h4>
                        {/* <h5>Branches over 6 cities</h5> */}
                    </div>
                    <h3>01. Pensilvania</h3>
                    <ul>
                        <li>236 North 9th Street, Reading, PA, USA</li>
                        <li>Mon - Sat: 08.00 to 21.00 Sun:Closed</li>
                        <li><Link href="tel:+1800555440055">+1 800 555 44 00 (Toll free)
+1 407 329 3838 &amp; 55</Link></li>
                        <li><Link href="mailto:supportteam@Envolve.com">admin@zeroncold.com</Link></li>
                    </ul>
                    <Link href="#" className="link-btn">Get Direction</Link>
                </SwiperSlide>
                <SwiperSlide className="inner-box">
                    <div className="icon-box">
                        <div className="icon"><span className="flaticon-discussion" /></div>
                        <h4>Mas medios de contacto</h4>
                        {/* <h5>Branches over 6 cities</h5> */}
                    </div>
                    <h3>01. Reading Pensilvania </h3>
                    <ul>
                        {/* <li>33/2 Korur Ap. Beyoglu, 34420</li> */}
                        <li>Mon - Sat: 08.00 to 21.00 Sun:Closed</li>
                        <li><Link href="tel:+1800555440055">+1 407 3293838</Link></li>
                        <li><Link href="mailto:supportteam@Envolve.com">zeron.cold@outlook.com</Link></li>
                    </ul>
                    <Link href="#" className="link-btn">Get Direction</Link>
                </SwiperSlide>
            </Swiper>

            <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                    <span>›</span>
                </button>
            </div>
        </>
    )
}
