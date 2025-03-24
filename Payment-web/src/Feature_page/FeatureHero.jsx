import React from 'react'
import Feature1 from '../assets/images/feauter/feature-girl.png'
import Feature2 from '../assets/images/feauter/feature-rect.png'


const FeatureHero = () => {
  return (
    <div>
                     <section className="feature-hero"  data-aos="zoom-in">
                <div className="container">
                    <h1 className="text-center">FEATURES</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi
                        obcaecati dolorum!</p>
                    <div className="position-relative">
                        <div className="featur-video">
                            <a className="video-play-button" href="#">
                                <span className="fa-solid fa-play"></span>
                            </a>

                        </div>
                    <figure className="feature-img"><img src={Feature1} alt="img" />
                        </figure>
                        <figure className="feature-img2"><img src={Feature2} alt="img" />
                        </figure>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default FeatureHero
