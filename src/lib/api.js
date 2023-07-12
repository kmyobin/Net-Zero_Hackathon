import axios from "axios";

const api_end_point = 'http:localhost:5000';

function fetchData(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(api_end_point + url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
    })
  })
}

export const example = async (id, pw) =>{
  const postData = {
    id: id,
    pw: pw
  }

  return fetchData('user/login', postData)
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
  })
}