import React from 'react';
import TopMenuFixed from './navbarMenujsx';
import FooterLayout from './footerLayoutjsx';
import TechOutlinePosts from './techOutlinePostsjsx';
import HealthPosts from './healthOutlinePostsjsx';
import BusinessPosts from './businessOutlinePostsjsx';
import SciencePosts from './scienceOutlinePostsjsx';
import TopHeadLinePosts from './topHeadlinePostjsx';
import EntertainmentPosts from './entertainmentArtsjsx';
import { Container, Divider } from 'semantic-ui-react';
import WorkLife from './workLifeOutlinejsx';




const DeskTopApp = (props) =>{
    return (
        
        <div>
        <TopMenuFixed />
        <Container style={{ marginTop: '7em' }}>
          <TopHeadLinePosts/>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Technology</a>
          </Divider>
          <TechOutlinePosts />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Science</a>
          </Divider>
          <SciencePosts />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Health</a>
          </Divider>
          <HealthPosts />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Work Life</a>
          </Divider>
            <WorkLife />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Business</a>
          </Divider>
          <BusinessPosts />
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Entertainment</a>
          </Divider>
          <EntertainmentPosts />
        </Container>
        <FooterLayout />
      </div>
        
    )
}

export default DeskTopApp;