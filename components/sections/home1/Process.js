

export default function Process() {
    return (
        <>
            <section className="process-section">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-5.png)' }} />
                <div className="auto-container">
                    <div className="sec-top row m-0 justify-content-md-between">
                        <div className="sec-title">
                            <h2>Parte de nuestro proceso  </h2>
                            <div className="text-decoration">
                                <span className="left" />
                                <span className="right" />
                            </div>
                        </div>
                        <div className="text">conoce los pasos para hacer más efectivo el proceso de atención  <br />.</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 process-block-one">
                            <div className="inner-box">
                                <h5><span className="count">01.</span> Cita </h5>
                                <div className="icon"><img src="/assets/images/icons/icon-4.png" alt="" /></div>
                                <h4>Realice una cita </h4>
                                <div className="text">A travez de todos los medios  con los cuales contamos  <br /> acuerde una visita Tecnica  .</div>
                            </div>
                        </div>
                        <div className="col-lg-4 process-block-one">
                            <div className="inner-box">
                                <h5><span className="count">02.</span>Visita tecnica</h5>
                                <div className="icon"><img src="/assets/images/icons/icon-5.png" alt="" /></div>
                                <h4>Visita Tecnica a Domicilio </h4>
                                <div className="text">Nuestros técnicos en el campo son informados
y acudiran a darle respuesta inmediata <br /> hacemos seguimiento constante de ello ..</div>
                            </div>
                        </div>
                        <div className="col-lg-4 process-block-one">
                            <div className="inner-box">
                                <h5><span className="count">03.</span> implementación</h5>
                                <div className="icon"><img src="/assets/images/icons/icon-6.png" alt="" /></div>
                                <h4>Implementación de solución</h4>
                                <div className="text">De ser el caso nuestros técnico implementaran la solución <br /> inmediatamente de ser reportado como listo se hara el seguimiento.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
