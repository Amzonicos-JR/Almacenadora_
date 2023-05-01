import React from 'react'
import { Link } from 'react-router-dom'
import '../HomePage/HomePage.css'
import ilustracion2 from '../../assets/img1.jpg'
import ilustracion1 from '../../assets/ilustracion1.svg'
import ilustracion3 from '../../assets/ilustracion3.svg'
import ilustracion4 from '../../assets/ilustracion4.svg'
import aa from '../../assets/ilustracion2.svg'
import cliente1 from '../../assets/face1.jpg'
import cliente2 from '../../assets/face2.jpg'
import img1 from '../../assets/img1.jpg'
import b1 from '../../assets/bodega1.png'
import b2 from '../../assets/bodega2.png'
import b3 from '../../assets/bodega3.png'
import b4 from '../../assets/bodega4.png'
import cb1 from '../../assets/cbodega1.png'
import cb2 from '../../assets/cbodega2.png'
import cb3 from '../../assets/cbodega3.png'
import cb4 from '../../assets/cbodega4.png'
import cb5 from '../../assets/cbodega5.png'
import camara from '../../assets/seguridad.png'
import carro from '../../assets/carro.png'
import aire from '../../assets/aire.png'

export const HomePage = () => {
    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap" rel="stylesheet" />

            <body>
                <header>
                    <nav>
                        <a href="#">Inicio</a>
                        <a href="#">¿Quienes Somos?</a>
                        <a href="#">Bodegas</a>
                        <a href="#">Servicios</a>
                        <a href="#">Contacto</a>
                        <Link to='/login'>
<<<<<<< HEAD
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
=======
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
>>>>>>> asumpango-2018373
                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
                            </svg>
                        </Link>
                    </nav>
                    <section class="textos-header">
                        <h1>Bienvenido a nuestra almacenadora</h1>
                        <h2>KINAL S.A</h2>
                    </section>
                </header>
                <main>
                    <section class="contenedor sobre-nosotros">
                        <h2 class="titulo">¿Quienes Somos?</h2>
                        <div class="contenedor-sobre-nosotros">
                            <img src={ilustracion1} alt="" class="imagen-about-us" />
                            <div class="contenido-textos">
                                <h3><span>1</span>Almacenadora del pueblo</h3>
                                <p>Almacenadora Kinal S.A, somos una empresa con más de 50 años de experiencia en la República de Guatemala,
                                    que cuenta con todo una infraestructura, equipo y personal de trabajo especializado en brindar los
                                    mejores servicios, de manera segura, confiable y eficaz.</p>
                                <h3><span>2</span>Misión</h3>
                                <p>Nuestra misión es ofrecer un servicio seguro, confiable y eficaz a todos nuestros clientes,
                                    contamos con distintos precios, muy accesibles y cómodos..</p>
                            </div>
                        </div>
                    </section>
                    <section id='Carrousel'>
<<<<<<< HEAD
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={cb2} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Bodega Manzanos</h5>
                                        <p>Zona 4, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={cb4} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Bodega Viñas de Cristal</h5>
                                        <p>Zona 10, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={cb5} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Bodega Los Amigos</h5>
                                        <p>Zona 2, Ciudad de Guatemala</p>
=======
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={cb2} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Bodega Manzanos</h5>
                                        <p>Zona 4, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={cb4} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Bodega Viñas de Cristal</h5>
                                        <p>Zona 10, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={cb5} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Bodega Los Amigos</h5>
                                        <p>Zona 2, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                    <section className="clientes contenedor">
                        <h2 className="titulo">Que dicen nuestros clientes</h2>
                        <div className="cards">
                            <div className="card">
                                <img src={cliente1} alt="" />
                                <div className="contenido-texto-card">
                                    <h4>Jennifer Peréz</h4>
                                    <p>Excelente servicio, estoy muy satisfecha con la seguridad</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={cliente2} alt="" />
                                <div className="contenido-texto-card">
                                    <h4>Andrea Casas</h4>
                                    <p>Muy satisfecha con el servicio y el personal</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="portafolio">
                        <div className="contenedor">
                            <h2 className="titulo">Nuestras bodegas mas populares:</h2>
                            <div className="galeria-port">
                                <div className="imagen-port">
                                    <img src={b1} alt="" />
                                    <div className="hover-galeria">
                                        <p>Bodega "El Sol"</p>
                                        <p>Zona 4, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div className="imagen-port">
                                    <img src={b2} alt="" />
                                    <div className="hover-galeria">
                                        <p>Bodega "Maderos"</p>
                                        <p>Zona 6, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div className="imagen-port">
                                    <img src={b3} alt="" />
                                    <div className="hover-galeria">
                                        <p>Bodega "La luz"</p>
                                        <p>Zona 14, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div className="imagen-port">
                                    <img src={b4} alt="" />
                                    <div className="hover-galeria">
                                        <p>Bodega "El Mar"</p>
                                        <p>Zona 3, Ciudad de Guatemala</p>
>>>>>>> asumpango-2018373
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
<<<<<<< HEAD
                    <section class="clientes contenedor">
                        <h2 class="titulo">Que dicen nuestros clientes</h2>
                        <div class="cards">
                            <div class="card">
                                <img src={cliente1} alt="" />
                                <div class="contenido-texto-card">
                                    <h4>Jennifer Peréz</h4>
                                    <p>Excelente servicio, estoy muy satisfecha con la seguridad</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={cliente2} alt="" />
                                <div class="contenido-texto-card">
                                    <h4>Andrea Casas</h4>
                                    <p>Muy satisfecha con el servicio y el personal</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="portafolio">
                        <div class="contenedor">
                            <h2 class="titulo">Nuestras bodegas mas populares:</h2>
                            <div class="galeria-port">
                                <div class="imagen-port">
                                    <img src={b1} alt="" />
                                    <div class="hover-galeria">
                                        <p>Bodega "El Sol"</p>
                                        <p>Zona 4, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div class="imagen-port">
                                    <img src={b2} alt="" />
                                    <div class="hover-galeria">
                                        <p>Bodega "Maderos"</p>
                                        <p>Zona 6, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div class="imagen-port">
                                    <img src={b3} alt="" />
                                    <div class="hover-galeria">
                                        <p>Bodega "La luz"</p>
                                        <p>Zona 14, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                                <div class="imagen-port">
                                    <img src={b4} alt="" />
                                    <div class="hover-galeria">
                                        <p>Bodega "El Mar"</p>
                                        <p>Zona 3, Ciudad de Guatemala</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="about-services">
                        <div class="contenedor">
                            <h2 class="titulo">Nuestros servicios</h2>
                            <div class="servicio-cont">
                                <div class="servicio-ind">
=======
                    <section className="about-services">
                        <div className="contenedor">
                            <h2 className="titulo">Nuestros servicios</h2>
                            <div className="servicio-cont">
                                <div className="servicio-ind">
>>>>>>> asumpango-2018373
                                    <img src={camara} alt="" />
                                    <h3>Seguridad Mejorada</h3>
                                    <p>Contamos con un servicio de cámaras de seguridad que graban las 24 hrs del dia y graban los 7 dias de la semana</p>
                                </div>
<<<<<<< HEAD
                                <div class="servicio-ind">
=======
                                <div className="servicio-ind">
>>>>>>> asumpango-2018373
                                    <img src={aire} alt="" />
                                    <h3>Aire Acondicionado</h3>
                                    <p>Contamos con el servicio de aire acondicionado profesional</p>
                                </div>
<<<<<<< HEAD
                                <div class="servicio-ind">
=======
                                <div className="servicio-ind">
>>>>>>> asumpango-2018373
                                    <img src={carro} alt="" />
                                    <h3>Transporte</h3>
                                    <p>Contamos con una solución rápida, segura, confiable y eficiente para que nuestros clientes puedan trasladar sus productos</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div class="contenedor-footer">
                        <div class="content-foo">
                            <h4>Teléfono Contacto</h4>
                            <p>(502) 2418-0062</p>
                        </div>
                        <div class="content-foo">
                            <h4>Correo Electrónico</h4>
                            <p>kinal_s.a@gmail.com</p>
                            <p>kinal_s.a@outlook.com</p>
                        </div>
                        <div class="content-foo">
                            <h4>Ubicación</h4>
                            <p>6A Avenida 13-54, Cdad. de Guatemala</p>
                        </div>
                    </div>
                    <h2 class="titulo-final">&copy; KINAL S.A</h2>
                </footer>
            </body>
        </>
    )
}