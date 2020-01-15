import React from "react"

import imgBanner from "../img/header-img.png"

const scrollToBottom = e => {
  e.preventDefault()

  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  )
}

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
              <h6 className="text-uppercase">Web application development</h6>
              <h1>
                Let us help <span className="sp-1">you</span>
                <br />
                to build your next <span className="sp-2">idea</span>
              </h1>
              <a
                href="#"
                className="genric-btn primary circle arrow"
                onClick={scrollToBottom}
              >
                Contact us<span className="lnr lnr-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
