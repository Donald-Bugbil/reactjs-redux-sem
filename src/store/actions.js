

export const addPost = post =>{
    return  {
        type: 'ADD_POST',
        payload: post
    }
}

export const deletePost = id => {
    return {
        type: 'DELETE_POST',
        payload: id
    }
}

export const editPost = (id, post) =>{
    return {
        type: 'EDIT_POST',
        id: id,
        post: post 
    }
}