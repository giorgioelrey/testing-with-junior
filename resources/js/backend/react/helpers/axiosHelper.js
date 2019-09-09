export function getLoginConfig({ email, password, password_confirmation }){

  //Data from the form
  const userData = { email, password, password_confirmation };

  //create string for axios
  const axiosData = Object.keys(userData).map((key) =>( encodeURIComponent(key) + '=' + encodeURIComponent(userData[key]))).join('&');

  //assemble the Axios Config
  const loginConfig = {
    url: '/api/admin/login',
    method: 'post',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    data: axiosData,
    responseType: 'json',
  };

  return loginConfig;

}

export function getLogoutConfig(token){

    //assemble the Axios Config with token
  return {
    url: '/api/admin/logout',
    method: 'get',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization' : 'Bearer ' + token},
    responseType: 'json',
  }


}
