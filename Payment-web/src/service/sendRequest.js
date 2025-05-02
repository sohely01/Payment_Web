import axios from "axios";

const sendRequest = (url, method, body) => {

    let config = {
        url: url,
        method: method,
        data: body,//JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        maxBodyLength: Infinity
    };

    const apiResponse = axios.request(config)
        .then((response) => {
            // console.log("REPONSE from sendRequest() >> ", JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log("ERROR in sendRequest() >> ", error);
        });

    return apiResponse;
}

export default sendRequest;