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
                About <span>Keisen</span>
              </h2>
              <p className="mt-30">
                Keisen provides all-round web-development services in the UK,
                mainly in London. We have more than 10 years experience in the
                web-development industry and have played an important part in
                the development of many complex web-applications for
                corporations such as Sainsbury's, Sony/ATV, NBC and many more.
                <br /> <br />
                Build secure high-performance, scalable, distributed systems
                Build maintainable, tested, high-quality code Build REST-full
                API's Design and build databases Build clean, responsive and
                intuitive UI's Carefully analyse system requirements in order to
                find the best solutions Supply highly skilled and dedicated
                agile developers
              </p>
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
