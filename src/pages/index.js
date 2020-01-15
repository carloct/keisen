import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Features from "../components/features"
import Footer from "../components/footer"

export default () => {
  return (
    <>
      <Layout>
        <Header />
        <Banner />
        <Features />
        <About />
        <Footer />
      </Layout>
    </>
  )
}
