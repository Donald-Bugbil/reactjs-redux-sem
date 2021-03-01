import React from 'react';
import {  Card, Button, Icon, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {deletePost, editPost} from '../store/actions'

const PostList = (props) => {

    return(
        <div>
                <Grid container columns={5} stackable>
                    <Grid.Row>
                        {
                            props.allPosts.map(({id, image, title, category, description}) => (
                                <Grid.Column >
                                    <Card>
                                        <Image src= {image}/>
                                        <Card.Content>
                                            <Card.Header>{title}</Card.Header>
                                            <Card.Meta>{category}</Card.Meta>
                                            <Card.Description>{description}</Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color ='red' animated='vertical' onClick={() => {return props.deletePost(id)}}>
                                                    <Button.Content hidden>
                                                        Delete
                                                    </Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='trash'/>
                                                    </Button.Content>
                                                </Button>
                                                <Button basic color ='green' animated='vertical'>
                                                    <Button.Content hidden>
                                                        Edit
                                                    </Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='edit'/>
                                                    </Button.Content>
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            )) 
                        }
                    </Grid.Row>
                </Grid>    
        
        </div>

    )
}
const mapStateToProps = state => {
    return {
        allPosts: state.post
    }
}
const mapDispatchToProps = {
    deletePost: deletePost,
    editPost: editPost
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList);