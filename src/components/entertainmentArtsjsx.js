import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Post from './postjsx';


const EntertainmentPosts = (props) => {
    return (
        <div>
        <Grid container columns= {5} stackable verticalAlign='middle'>
            <Grid.Row>
                
                    {
                        props.entertainment.map(({id, image, title, category, description, content}) => (
                        <Grid.Column>
                            <Post
                            id= {id}
                            image= {image}
                            title= {title}
                            category= {category}
                            description= {description}
                            content={content}/>
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
        entertainment: state.post.filter(post => {return post.category === 'Entertainment'})
    }
}

export default connect(mapStateToProps)(EntertainmentPosts);