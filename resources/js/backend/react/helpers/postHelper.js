import axios from 'axios';


export function getAllPosts(success, fail){

  axios.get(`/api/admin/post/all`)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}

export function getPost(postId, success, fail){

  axios.get(`/api/admin/post/show/${postId}`)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}


export function submitPost(newPost, success, fail){

  axios.post('/api/admin/post/store', newPost)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}

export function updatePost(updatedPost, success, fail){

  axios.post('/api/admin/post/update', updatedPost)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}
export function deletePost(postId, success, fail){

  axios.delete(`/api/admin/post/destroy/${postId}`)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}
