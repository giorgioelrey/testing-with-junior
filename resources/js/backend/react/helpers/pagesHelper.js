import axios from 'axios';

export function getAllPages(success, fail){

  axios.get('/api/admin/pages/all')
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}
