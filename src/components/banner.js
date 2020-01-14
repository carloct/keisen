import React from "react"

import imgBanner from "../img/header-img.png"

export default props => {
  return (
    <section className="banner-area relative">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-center">
          <div className="banner-left col-lg-6">
            <img className="d-flex mx-auto img-fluid" src={imgBanner} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="story-content">
              <h6 className="text-uppercase">From the for User interface</h6>
              <h1>
                Behind Every <span className="sp-1">Success</span>
                <br />
                There is a <span className="sp-2">Cactus</span>
              </h1>
              <a href="#" className="genric-btn primary circle arrow">
                Get Started<span className="lnr lnr-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
