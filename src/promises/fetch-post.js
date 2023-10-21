import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentiales: 'same-origin',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
        "title": "MAC Computer",
        "price": 10000,
        "description": "Apple Computer",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
    }

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("Finally"));