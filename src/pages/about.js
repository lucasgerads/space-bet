import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About "{ data.site.siteMetadata.title }"</h1>
    <p>
      In December 2015, SpaceX landed a rocket back on Earth, and Elon Musk promised to take us all to Mars. Leon is 
      gullible, and he believed him. Lucas is wiser, and was skeptical. 
      
      So, they made a bet: if humans made it to Mars by 11:59 pm, December 31, 2029, Leon would be the victor. Otherwise,
      all the glory of being correct would go to Lucas. 

      Winner gets a coke (and Mars bar). 

      This was all before Elon Musk outed himself as a crazy person, and before the phallic imagery occured to us.

      Still--a bet's a bet.

    </p>
  </Layout>
)

export const query = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
}
`