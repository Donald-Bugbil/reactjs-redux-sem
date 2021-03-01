import React from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TopMenuFixed from './navbarMenujsx';
import {useParams} from  'react-router-dom';


const DetailPage= (props) => {
    const idParam =  useParams().id;
    const{id , title, image, category, description, content} =  props.posts.find(post =>{return post.id === idParam});
    
        return (
            <div>
                <TopMenuFixed />
                <Container text style={{marginTop: '7em '}} textAlign='left'>
                    
                    <Header as='h1'>{title}</Header>
                    <Image fluid src={image} style={{height: '50vh', marginTop: '5vh', marginBottom: '3em'}}/>
                    <p>{content}</p>

                
                </Container>
            
            </div>
    )
    
}

const mapStateToProps = (state) =>{
    return {
         posts: state.post
    }
}

export default connect(mapStateToProps)(DetailPage);