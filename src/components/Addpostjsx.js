import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../store/actions';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, TextArea, Select } from 'semantic-ui-react';

class AddForm extends React.Component {
    
    state ={
        id: uuidv4(),
        image: "",
        title: "",
        category: "",
        description: "",
        content: ""
    }
    
    onChangeHandler = (event) => {
        console.log(event)
        const{name, value } = event.target;

        this.setState({[name]: value})
    }
    
    render(){
        const categoryOptions = [
            {
                key: 'tech', 
                value: 'Technology', 
                text: 'Technology'
            },
            {
                key: 'hlth',
                value: 'Health',
                text: 'Health'
            },
            {
                key: 'sci',
                value: 'Science',
                text: 'Science'
            },
            {
                
                key: 'ent',
                value: 'Entertainment',
                text: 'Entertainment'
            },
            {
                key: 'buz',
                value: 'Business',
                text: 'Business'
            },
            {
                key: 'wrk',
                value: 'Worklife',
                text: 'Worklife'
            }

        ]
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Image</label>
                        <input  type='file' name='image' />
                    </Form.Field>
                    <Form.Field>
                        <label>Title</label>
                        <input name='title' placeholder='Title'/>
                    </Form.Field>
                    <Form.Field>
                        <Select placeholder='Select Category' name='category' options={categoryOptions}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input name='description' placeholder='Description'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Content</label>
                        <TextArea name='content' placeholder='Content' />
                    </Form.Field>
                    <Form.Field>
                        <Button type='submit'>Add Post</Button>
                    </Form.Field>
                </Form>
            </div>
        )

    }
}

const mapDispatchToProps = {
    addPost: addPost
}
const mapStateToProps = state =>{
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddForm);
