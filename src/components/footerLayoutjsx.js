import React from 'react';
import { Segment,
         Divider,
         List,
         Container,
         Grid,
         Header } from 'semantic-ui-react';

        
const FooterLayout = () => {
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em'}}>

            <Container textAlign='center'>
                <Grid divided inverted stackable >
                    <Grid.Column width={4}>
                        <List inverted link>
                            <Header content=''/>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List inverted link>
                            <Header content=''/>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List inverted link>
                            <Header content=''/>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List inverted link>
                            <Header content=''/>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                            <List.Item as = 'a' ></List.Item>
                        </List>
                    </Grid.Column>

                </Grid>
                <Divider inverted section/>
                <List horizontal inverted link divided >
                    <List.Item as= 'a' href=''>
                        Site Map
                    </List.Item>
                    <List.Item as= 'a' href=''>
                        Contact Us
                    </List.Item>
                    <List.Item as= 'a' href=''>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as= 'a' href=''>
                        Privacy Policy
                    </List.Item>
                
                </List>

            
            </Container>
            
        
        </Segment>

    )
}
export default FooterLayout;