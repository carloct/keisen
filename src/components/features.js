import React from "react"

export default props => {
  return (
    <section className="features pt-80 relative">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services d-block">
              <div className="icon mb-2">
                <span className="lnr lnr-diamond"></span>
              </div>
              <div className="media-body">
                <h3 className="heading mb-2">Latest technologies</h3>
                <p>
                  We use the latest technologies to deliver the best value for
                  your project
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services d-block">
              <div className="icon mb-2">
                <span className="lnr lnr-layers"></span>
              </div>
              <div className="media-body">
                <h3 className="heading mb-2">Bullet-proof process</h3>
                <p>
                  Over 10 years of experience in managing the entire workflow,
                  from your idea to the product
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services d-block">
              <div className="icon mb-2">
                <span className="lnr lnr-rocket"></span>
              </div>
              <div className="media-body">
                <h3 className="heading mb-2">Migration of legacy system</h3>
                <p>
                  Old system can be a bottleneck, we can help to move to newer,
                  more efficient technologies
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services d-block">
              <div className="icon mb-2">
                <span className="lnr lnr-cloud"></span>
              </div>
              <div className="media-body">
                <h3 className="heading mb-2">Scaling up</h3>
                <p>
                  A range of technologie that will help to scale up your project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
