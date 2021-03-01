import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const TopMenuFixed = () => {

 return (
     <div>
     <Menu inverted fixed= 'top' size='small' >
        <Container >
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as='a'>Video</Menu.Item>
            <Menu.Item as='a'>World</Menu.Item>
            <Menu.Item as='a'>Ghana</Menu.Item>
            <Menu.Item as='a'>Tech</Menu.Item>
            <Menu.Item as='a'>Business</Menu.Item>
            <Menu.Item as='a'>Health</Menu.Item>
            <Menu.Item as='a'>Entertainment & Arts</Menu.Item>
            <Menu.Item as='a'>Science</Menu.Item>
            <Menu.Item as='a'>Politics</Menu.Item>
            <Menu.Item as='a'>Worklife</Menu.Item>
            <Menu.Item as={ Link } to='/dashboard'>Dashboard</Menu.Item>
        
        </Container>
     </Menu>
     </div>
 )
}

export default TopMenuFixed;