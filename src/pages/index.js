import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default function Home({ data }) {
              
  return (
    <Layout>
      <div>
        <div 
        css={css`
          /*===== Vertical Timeline =====*/
          #conference-timeline {
            position: relative;
            max-width: 920px;
            width: 100%;
            margin: 0 auto;
          }
          #conference-timeline .timeline-start,
          #conference-timeline .timeline-end {
            display: table;
            font-family: "Roboto", sans-serif;
            font-size: 18px;
            font-weight: 900;
            text-transform: uppercase;
            background: #00b0bd;
            padding: 15px 23px;
            color: #fff;
            max-width: 5%;
            width: 100%;
            text-align: center;
            margin: 0 auto;
          }
          #conference-timeline .conference-center-line {
            position: absolute;
            width: 3px;
            height: 100%;
            top: 0;
            left: 50%;
            margin-left: -2px;
            background: #00b0bd;
            z-index: -1;
          }
          #conference-timeline .conference-timeline-content {
            padding-top: 67px;
            padding-bottom: 67px;
          }
          .timeline-article {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            margin: 20px 0;
          }
          .timeline-article .content-left-container,
          .timeline-article .content-right-container {
            max-width: 44%;
            width: 100%;
          }
          .timeline-article .timeline-author {
            display: block;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #242424;
            text-align: right;
          }
          .timeline-article .content-left,
          .timeline-article .content-right {
            position: relative;
            width: auto;
            border: 1px solid #ddd;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,.03);
            padding: 27px 25px;
          }
          .timeline-article p {
            margin: 0 0 0 60px;
            padding: 0;
            font-weight: 400;
            color: #242424;
            font-size: 14px;
            line-height: 24px;
            position: relative;
          }
          .timeline-article p span.article-number {
            position: absolute;
            font-weight: 300;
            font-size: 25px;
            top: 10px;
            left: -60px;
            color: #00b0bd;
          }
          .timeline-article .content-left-container {
            float: left;
          }
          .timeline-article .content-right-container {
            float: right;
          }
          .timeline-article .content-left:before,
          .timeline-article .content-right:before{
            position: absolute;
            top: 20px;
            font-size: 23px;
            font-family: "FontAwesome";
            color: #fff;
          }
          .timeline-article .content-left:before {
            content: "\f0da";
            right: -8px;
          }
          .timeline-article .content-right:before {
            content: "\f0d9";
            left: -8px;
          }
          
          .timeline-article .meta-date {
            position: absolute;
            top: 0;
            left: 50%;
            width: 62px;
            height: 62px;
            margin-left: -31px;
            color: #fff;
            border-radius: 100%;
            background: #00b0bd;
          }
          
          .timeline-article .meta-date .date,
          .timeline-article .meta-date .month {
            display: block;
            text-align: center;
            font-weight: 900;
          }
          .timeline-article .meta-date .date {
            font-size: 30px;
            line-height: 40px;
          }
          .timeline-article .meta-date .month {
            font-size: 18px;
            line-height: 10px;
          }
          /*===== // Vertical Timeline =====*/
          
          /*===== Responsive Vertical Timeline =====*/
          @media only screen and (max-width: 830px) {
            #conference-timeline .timeline-start,
            #conference-timeline .timeline-end {
              margin: 0;
            }
            #conference-timeline .conference-center-line {
              margin-left: 0;
              left: 50px;
            }
            .timeline-article .meta-date {
              margin-left: 0;
              left: 20px;
            }
            .timeline-article .content-left-container,
            .timeline-article .content-right-container {
              max-width: 100%;
              width: auto;
              float: none;
              margin-left: 110px;
              min-height: 53px;
            }
            .timeline-article .content-left-container {
              margin-bottom: 20px;
            }
            .timeline-article .content-left,
            .timeline-article .content-right {
              padding: 10px 25px;
              min-height: 65px;
            }
            .timeline-article .content-left:before {
              content: "\f0d9";
              right: auto;
              left: -8px;
            }
            .timeline-article .content-right:before {
              display: none;
            }
          }
          @media only screen and (max-width: 400px) {
            .timeline-article p {
              margin: 0;
            }
            .timeline-article p span.article-number {
              display: none;
            }
            
          }
          /*===== // Responsive Vertical Timeline =====*/
        `}
        >
          <section id="conference-timeline">
            <div className="timeline-start">2030</div>
            <div className="conference-center-line"></div>
            <div className="conference-timeline-content">
            {data.allMarkdownRemark.group.slice(0).reverse().map(( entriesOfDate, idx ) =>
              {
                console.log(idx)
                return (
                <div className="timeline-article"  key={idx}>
                {
                entriesOfDate.edges.slice(0,2).map(( { node }) => { 
                  console.log(node)
                  let splitDate = node.frontmatter.date.split(" ");
                  splitDate[1] = splitDate[1].slice(0, -1); 
                  console.log(splitDate)
                  if (node.parent.relativeDirectory === 'Lucas'){
                    console.log("yay Lucas")
                    return(
                      <>
                      <div className="content-left-container">
                        <div className="content-left">
                          <p>{node.rawMarkdownBody}<span className="article-number">{node.frontmatter.percentage}</span></p>
                        </div>
                      <span className="timeline-author">{node.frontmatter.date}</span>
                      </div>
                      <div className="meta-date">
                        <span className="date">{splitDate[1]}</span>
                        <span className="month">{splitDate[0]}</span>
                      </div>
                      </>
                    )
                  } else {
                    console.log("yay Leon")
                    return(
                      <>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>{node.rawMarkdownBody}<span className="article-number">{node.frontmatter.percentage}</span></p>
                        </div>
                      <span className="timeline-author">{node.frontmatter.date}</span>
                      </div>
                      <div className="meta-date">
                        <span className="date">{splitDate[1]}</span>
                        <span className="month">{splitDate[0]}</span>
                      </div>
                      </>
                    )
                  }
                } 
                )
                }
                </div>
                )
              })
            }
           
    <div className="timeline-end">2020</div>
    </div>
    </section>
    </div>
    </div>
    </Layout>
  )
}


export const query = graphql`
query {
  allMarkdownRemark
  {
    group(field: frontmatter___date) {
    totalCount
    edges {
      node {
        rawMarkdownBody
        frontmatter {
          percentage
          date(formatString: "MMM DD, YYYY")
          title
        }
        parent {
          ... on File {
            id
            name
            relativeDirectory
          }
        }
      }
    }
    }
  }
} 
`