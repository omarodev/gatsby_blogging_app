import React, { Component } from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layouts'
import { getClient } from '../services/ContentfulClient'
import { SectionContainer, PaddingDiv, PlayFairText, SearchBox, FlexContainer, BackBtn, PostSummary, Card, BlogLoadMoreBtn } from '../components';


export const query = graphql`
  query {
    site {
      siteMetadata {
        contentful {
          space,
          accessToken
        }
      }
    }
  }
`

class BlogsPage extends Component {
  state = {
    blogs: [],
    skip: 0,
  }

  componentDidMount() {
    this.loadEntries();
  }

  loadEntries = async () => {
    const { skip, blogs } = this.state;
    const { data } = this.props;
    const { space, accessToken } = data.site.siteMetadata.contentful;
    const client = getClient(space, accessToken);
    const entriesResponse = await client.getEntries({
      content_type: 'blogPost',
      skip: skip,
      limit: 2,
      order: 'sys.createdAt'
    });
    const newBlogs = entriesResponse.items.map((entry) => entry.fields);
    this.setState({ blogs: blogs.concat(newBlogs), skip: skip + 2 });
  }

  moreLoadHander = () => {
    this.loadEntries();
  }

  moreReadHandler = () => {

  }
  
  render() {
    const { blogs } = this.state;
    return (
      <React.Fragment>
        <Layout
          pageTitle='Blogs'
          meta={[
            { name: 'description', content: 'Mottion PWA Blogs' },
            { name: 'keywords', content: 'Mottion, Gatsby, PWA, Blogs' },
          ]}
        >
          <section>
            <SectionContainer column>
              <PaddingDiv top={20} bottom={10}>
                <BackBtn url={"/"} title={'Home'} />
              </PaddingDiv>
              <PaddingDiv top={10} bottom={40}>
                <FlexContainer justifyContent="space-between">
                  <PlayFairText weight="900" size={72} color="#000">
                    Blogs
                  </PlayFairText>
                  <SearchBox placeholder="Search blog" />
                </FlexContainer>
              </PaddingDiv>
            </SectionContainer>
          </section>
          <section style={{ background: '#f5f5f5' }}>
            <SectionContainer column>
              <PaddingDiv top={60} bottom={40}>
                <FlexContainer style={{ flexFlow: 'row wrap', margin: '0 -15px', justifyContent: 'flex-start' }}>
                  {blogs.map((blog, index) => (
                    <Card key={index}>
                      <PostSummary blog={blog} blackTheme />
                    </Card>
                  ))}
                </FlexContainer>
              </PaddingDiv>
              <FlexContainer>
                <BlogLoadMoreBtn moreLoadHander={this.moreLoadHander} />
              </FlexContainer>
            </SectionContainer>
            <PaddingDiv bottom={300} />
          </section>
        </Layout>
      </React.Fragment>
    )
  }
}

export default BlogsPage