import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const Post = ({ id, image, title, category, description, content }) => {


    return (
        <div>
            <Card style={{boxShadow: 'none'}} as={Link} to={`/post/${id}`}>
                <Image src= {image}/>
                <Card.Content >
                   <Card.Header>{title}</Card.Header>
                    <Card.Meta>{category}</Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}



export default Post;
