import React from 'react';
import { Grid } from 'semantic-ui-react';
import Post from './postjsx';
import { connect } from 'react-redux';

const TechOutlinePosts = (props) => {
    return (
        <div>
            <Grid container columns={5} stackable verticalAlign='middle'>
                <Grid.Row>
                {
                    props.techPosts.map(({ id, image, title, category, description, content }) => (
                        <Grid.Column>
                            <Post
                            id={id}
                            image={image}
                            title={title}
                            category={category}
                            description={description}
                            content={content} />
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
        techPosts: state.post.filter(post => { return post.category === 'Technology' })
    }
}

export default connect(mapStateToProps)(TechOutlinePosts);