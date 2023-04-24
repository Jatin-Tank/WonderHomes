const BASE_URL = "http://localhost:5000"

export const signUp = (requestBody, successFunction, failureFunction) => {
    makeServerRequest("/signup", "POST", requestBody, successFunction, failureFunction)
}

const makeServerRequest = (requestURL, requestMethod, requestBody, successCallBackFunction, failureCallBackFunction) => {
    const requestConfiguration = {
        method: requestMethod,
        url: BASE_URL + requestURL,
        data: requestBody,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    axios(requestConfiguration)
        .then(
            function (serverResponse) {
                successCallBackFunction(serverResponse.data, serverResponse.status)
            }
        )
        .catch(function (err) {
            console.log(err)
            failureCallBackFunction(err.response)
        })
};