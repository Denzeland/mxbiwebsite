import React from 'react'
import Link from 'components/Link'

const GetStarted = () => (
  <section className="section section--small get-started">
    <div className="container">
      <div className="row get-started--signup text-center">
        <div className="col-sm-12 p-0">
          <h3 className="mb-xs">
          从木星BI平台开始，构建一个数据驱动的未来
          </h3>
          <Link
            data-track
            data-track-location="get-started"
            data-track-event="Clicked Get Started"
            to="#"
            className="btn btn-lg btn-primary"
          >
            免费注册
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default GetStarted
