import React from 'react';
import {Sidebar, Menu, Divider, Container, Icon, Button } from 'semantic-ui-react';
import FooterLayout from './footerLayoutjsx';
import TechOutlinePosts from './techOutlinePostsjsx';
import HealthPosts from './healthOutlinePostsjsx';
import BusinessPosts from './businessOutlinePostsjsx';
import SciencePosts from './scienceOutlinePostsjsx';
import TopHeadLinePosts from './topHeadlinePostjsx';
import EntertainmentPosts from './entertainmentArtsjsx';
import WorkLife from './workLifeOutlinejsx';

class MobileLayout extends React.Component{
    state ={}
    handleSidebarHide = () =>{
        this.setState({sidebarOpened: false })
    }
    handleToggle = () =>{
        this.setState({sidebarOpened: true})
    }

    render(){
        const{sidebarOpened} = this.state;
        return (
            <div>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='overlay' inverted vertical visible={sidebarOpened} onHide={this.handleSidebarHide}>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Video</Menu.Item>
                        <Menu.Item as='a'>World</Menu.Item>
                        <Menu.Item as='a'>Ghana</Menu.Item>
                        <Menu.Item as='a'>Tech</Menu.Item>
                        <Menu.Item as='a'>Business</Menu.Item>
                        <Menu.Item as='a'>Health</Menu.Item>
                        <Menu.Item as='a'>Entertainment&Arts</Menu.Item>
                        <Menu.Item as='a'>Science</Menu.Item>
                        <Menu.Item as='a'>Politics</Menu.Item>
                        <Menu.Item as='a'>Worklife</Menu.Item>
                        <Menu.Item as='a'>DashBoard</Menu.Item>
                        s
                    </Sidebar>
                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Menu inverted size='large'>
                            <Container>
                                    <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar'/>
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Log in
                                        </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                                        </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
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
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
   
}

export default MobileLayout;