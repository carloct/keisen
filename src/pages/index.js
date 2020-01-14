import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Features from "../components/features"

export default () => {
  return (
    <>
      <Layout>
        <Header />
        <Banner />
        <About />
        <Features />
      </Layout>
    </>
  )
}
