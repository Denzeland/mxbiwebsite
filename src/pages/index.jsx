import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionUsers from 'components/SectionUsers'
import SectionIntegrations from 'components/SectionIntegrations'
import SectionGetStarted from 'components/SectionGetStarted'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      controls: null,
    }

    this.addControls = this.addControls.bind(this)
    this.removeControls = this.removeControls.bind(this)
  }

  addControls() {
    this.setState({ controls: 'controls' })
  }

  removeControls() {
    this.setState({ controls: null })
  }

  render() {
    return (
      <Layout
        title="木星BI平台帮助您理解您的数据"
        description="Use Redash to connect to any data source (PostgreSQL, MySQL, Redshift, BigQuery, MongoDB and many others), query, visualize and share your data to make your company data driven."
        location={this.props.location}
      >
        <section className="section section__databricks">
          <div className="container">
            <img src="/assets/images/databricks-redash.png"/>
            <h1>木星BI平台加入了Databricks</h1>
            <Link
              data-track
              data-track-location="databricks"
              track-event="Clicked Learn More about Databricks"
              to="#"
              className="btn btn-primary btn-lg"
            >
              了解更多
            </Link>
          </div>
        </section>
        <section className="section section--hero">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h1 className="mb-xs">
                木星BI平台帮助您理解您的数据
                </h1>
                <h3 className="font-light">
                连接和查询您的数据源，构建仪表板以可视化数据并与您的公司共享它们。
                </h3>
                {/* <Link
                  data-track
                  data-track-location="hero"
                  track-event="Clicked Get Started"
                  to="https://app.redash.io/signup"
                  className="btn btn-primary btn-lg"
                >
                  Get Started
                </Link> */}
              </div>
              <div className="col-md-7 hidden-xs hidden-sm">
                <div className="browser-container hidden-xs">
                  <img src="/assets/images/elements/browser-header.png" />
                  <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    id="main-video"
                    controls={this.state.controls}
                    onMouseEnter={this.addControls}
                    onMouseLeave={this.removeControls}
                  >
                    <source
                      src="/assets/images/elements/redash-intro-720.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="/assets/images/elements/redash-intro-720.ogv"
                      type="video/ogg"
                    />
                    <source
                      src="/assets/images/elements/redash-intro-720.webm"
                      type="video/webm"
                    />
                    您的浏览器不支持播放视频，请升级您的浏览器
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionUsers />

        <section className="section section__feature section__feature--query">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="/assets/images/elements/write-queries.png"
                  id="write-query-illustrated"
                  className="visible-xs"
                />

                <h2>编写有效的查询</h2>

                <p className="highlight-p">
                利用基于云的服务的协作优势享受SQL客户机的强大和舒适。
                </p>

                <ul className="highlight-ul">
                  <li>强大的在线SQL编辑器</li>
                  <li>浏览模式并单击插入</li>
                  <li>创建代码片段并重用它们</li>
                </ul>
              </div>
              <div className="col-sm-6 hidden-xs">
                <img
                  src="/assets/images/elements/write-queries.png"
                  id="write-query-illustrated"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section__feature section__feature--visualize">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="/assets/images/elements/visualize-data.png"
                  id="visualize-illustrated"
                />
              </div>
              <div className="col-sm-6">
                <h2>在仪表板上可视化您的数据</h2>

                <p className="highlight-p">
                总是看到大的，容易消化的图片，以便更深入的理解和更好的决策。
                </p>

                <ul className="highlight-ul">
                  <li>拖放和调整任何可视化</li>
                  <li>定期从数据源刷新</li>
                  <li>与您的团队或公众共享仪表板</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section__more-features">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-xs-12 p-0 flex-content-center flex">
                <div className="feature-container">
                  <img
                    src="/assets/images/elements/icon-api.png"
                    width="64px"
                  />
                  <h4>API</h4>
                </div>

                <div className="feature-container">
                  <img
                    src="/assets/images/elements/icon-alerts.png"
                    width="64px"
                  />
                  <h4>通知</h4>
                </div>

                <div className="feature-container">
                  <img
                    src="/assets/images/elements/icon-user-management.png"
                    width="64px"
                  />
                  <h4>用户管理</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <br />
                <Link
                  data-track
                  data-track-location="features"
                  track-event="Clicked All Redash Features"
                  to="/product"
                  className="btn btn-secondary"
                >
                  所有的木星BI特性
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionIntegrations />

        <section className="section section__open-source">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-lg-offset-2 col-sm-5 col-sm-offset-1">
                <img
                  src="/assets/images/elements/open-source.png"
                  id="open-source-illustrated"
                  className="visible-xs"
                />
                <h2>木星BI平台是一个流行的开源项目</h2>
                <p className="highlight-p">
                定制和添加特性，没有锁定，回馈社区
                </p>
                <Link
                  data-track
                  data-track-location="open-source"
                  track-event="Clicked Community"
                  to="#"
                  className="btn btn-secondary"
                >
                  我们的社区
                </Link>
              </div>

              <div className="col-lg-4 col-sm-5 text-right hidden-xs">
                <img
                  src="/assets/images/elements/open-source.png"
                  id="open-source-illustrated"
                />
              </div>
            </div>
          </div>
        </section>

        <SectionGetStarted />
      </Layout>
    )
  }
}

export default Homepage
