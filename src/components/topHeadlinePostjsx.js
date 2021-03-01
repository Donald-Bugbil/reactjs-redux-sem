import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Post from './postjsx';

const TopHeadLinePosts = (props) => {

    

    return (
        <div>
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Post id={props.firstPost.id} 
                        image={props.firstPost.image} 
                        title={props.firstPost.title} 
                        category={props.firstPost.category} 
                        description={props.firstPost.description}
                        content={props.firstPost.content}/> 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid stackable columns={3}>
                            <Grid.Row>
                                {
                                    props.filteredPosts.map(({id, image, title, category, description, content}) => (
                                        <Grid.Column width={5}>
                                            <Post id={id} 
                                            image={image} 
                                            title={title} 
                                            category={category} 
                                            description={description}
                                            content={content}/>
                                        </Grid.Column>
                                    ))
                                }
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        
    )
}

const mapStateToProps = (state) =>{
    return {
        firstPost: state.post[0],
        filteredPosts: state.post.slice(1, 7)
    }
}



export default connect(mapStateToProps)(TopHeadLinePosts);
