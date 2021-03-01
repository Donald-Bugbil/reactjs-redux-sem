import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Post from './postjsx';


const BusinessPosts = (props) => {
    return (
        <div>
        <Grid container columns={5} stackable verticalAlign='middle'>
            <Grid.Row>
                
                    {
                        props.businessPosts.map(({id, image, title, category, description, content}) => (
                        <Grid.Column>
                            <Post id= {id} 
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
        businessPosts: state.post.filter(post => {return post.category === 'Business'})
    }
}

export default connect(mapStateToProps)(BusinessPosts);