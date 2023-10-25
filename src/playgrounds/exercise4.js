import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

export async function runCode(urlApi) {
    try {
        new URL(urlApi);
        const response = await fetch(urlApi);
        return response.json();
    } catch (error) {
        if (error.message === "Failed to construct 'URL': Invalid URL"){
            throw new Error('Invalid URL');
            } else {
            throw new Error('Something was wrong');
            }
    }
}

await runCode(`${API}/products`)
    .then(products => {
        console.log(products)})
