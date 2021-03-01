import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import PostList from './postList';
import AddForm from './Addpostjsx';
import TopMenuFixed from './navbarMenujsx';
import FooterLayout from './footerLayoutjsx';

class Dashboard extends React.Component {

    state = {
        activeItem: 'Posts'
        
    }

    handleItemClick = (e,{name}) => {
        this.setState({activeItem: name})
    }

    render(){
        const{ activeItem } = this.state;
        return (
            <div>
                <TopMenuFixed />
                <Container style={{marginTop: '5em'}}>
                    <Menu pointing style={{marginBottom: '5em'}} borderless >
                        <Menu.Item
                        name= 'Posts'
                        active={activeItem === 'Posts'}
                        onClick={this.handleItemClick}>
                        Posts
                        </Menu.Item>
                        <Menu.Item
                        name='Add'
                        active={activeItem === 'Add'}
                        onClick={this.handleItemClick}>
                            Add
                        </Menu.Item>
                    </Menu>
                    {
                     activeItem === 'Posts' ? <PostList /> : <AddForm />
                    }
                </Container>
                <FooterLayout />
            </div>
        )
    }
}

export default Dashboard;