import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Post from './postjsx';

const HealthPosts = (props) => {
    return (
        <div>
            <Grid container columns={5} stackable verticalAlign='middle'>
                <Grid.Row>

                    {
                        props.healthPosts.map(({ id, image, title, category, description, content }) => (
                            <Grid.Column>
                                <Post id={id}
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
        healthPosts: state.post.filter(post => post.category === "Health")
    }
}

export default connect(mapStateToProps)(HealthPosts);