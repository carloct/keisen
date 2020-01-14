import React from "react"

import imgABout from "../img/about.png"

export default props => {
  return (
    <section className="about-area pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="story-content">
              <h2>
                Brief Information <br />
                About <span>CellOn</span>
              </h2>
              <p className="mt-30">
                Few would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior. While men’s borderline-inappropriate
                behavior is often laughed off as “boys will be boys,” women face
                higher conduct standards – especially in the workplace. <br />{" "}
                <br />
                While men’s borderline-inappropriate behavior is often laughed
                off as “boys will be boys,”
              </p>
              <a href="#" className="genric-btn primary-border circle arrow">
                View More<span className="lnr lnr-arrow-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid d-flex mx-auto" src={imgABout} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
