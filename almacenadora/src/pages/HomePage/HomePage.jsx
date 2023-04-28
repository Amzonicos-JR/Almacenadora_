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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                                    consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                                    velit doloribus laboriosam ut.</p>
                                <h3><span>2</span>Bueno, Bonito y Barato</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                                    consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                                    velit doloribus laboriosam ut.</p>
                            </div>
                        </div>
                    </section>
                    {/* <section>
                        <div clas="transition">
                            <ul class='lu'>
                                <li class='il'>
                                    <img class='imag3' src={img1} alt="" />
                                </li>
                                <li class='il'>
                                    <img class='imag3' src={img1} alt="" />
                                </li>
                                <li class='il'>
                                    <img class='imag3' src={img1} alt="" />
                                </li>
                                <li class='il'>
                                    <img class='imag3' src={img1} alt="" />
                                </li>

                            </ul>
                        </div>
                    </section> */}
                    <section class="portafolio">
                        <div class="contenedor">
                            <h2 class="titulo">Portafolio</h2>
                            <div class="galeria-port">
                                <div class="imagen-port">
                                    <img src={b1} alt="" />
                                    <div class="hover-galeria">
                                        <img src="img/icono1.png" alt="" />
                                        <p>Nuestro trabajo</p>
                                    </div>
                                </div>
                                <div class="imagen-port">
                                    <img src={b2} alt="" />
                                    <div class="hover-galeria">
                                        <img src="img/icono1.png" alt="" />
                                        <p>Nuestro trabajo</p>
                                    </div>
                                </div>
                                <div class="imagen-port">
                                    <img src={b3} alt="" />
                                    <div class="hover-galeria">
                                        <img src="img/icono1.png" alt="" />
                                        <p>Nuestro trabajo</p>
                                    </div>
                                </div>
                                <div class="imagen-port">
                                    <img src={b4} alt="" />
                                    <div class="hover-galeria">
                                        <img src="img/icono1.png" alt="" />
                                        <p>Nuestro trabajo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="clientes contenedor">
                        <h2 class="titulo">Que dicen nuestros clientes</h2>
                        <div class="cards">
                            <div class="card">
                                <img src={cliente1} alt="" />
                                <div class="contenido-texto-card">
                                    <h4>Jennifer Peréz</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente!</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={cliente2} alt="" />
                                <div class="contenido-texto-card">
                                    <h4>Andrea Casas</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="about-services">
                        <div class="contenedor">
                            <h2 class="titulo">Nuestros servicios</h2>
                            <div class="servicio-cont">
                                <div class="servicio-ind">
                                    <img src={ilustracion1} alt="" />
                                    <h3>Seguridad Mejorada</h3>
                                    <p>Contamos con un servicio de cámaras de seguridad que graban las 24 hrs del dia y graban los 7 dias de la semana</p>
                                </div>
                                <div class="servicio-ind">
                                    <img src={ilustracion3} alt="" />
                                    <h3>Aire Acondicionado</h3>
                                    <p>Contamos con el servicio de aire acondicionado profesional</p>
                                </div>
                                <div class="servicio-ind">
                                    <img src={aa} alt="" />
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