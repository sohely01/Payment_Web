import sendRequest from "../sendRequest";

export const findOneSection = async (body) => {
    try {
        const url = "http://localhost:8989/api/v1/findonesection";
        const method = "POST"

        const sendRequestResponse = await sendRequest(url, method, body);
        // console.log("sendRequestResponse >> ", sendRequestResponse);
        if (sendRequestResponse.status === "failed" || sendRequestResponse.message === 'Network Error') {
            return ({ "status": "failed", "message": sendRequestResponse.message })
        }


        return sendRequestResponse;
    } catch (error) {
        console.error("ERROR findOneSection() >> ", error);
    }
}