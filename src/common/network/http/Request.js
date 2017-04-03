/**
 * Created by Peter Hoang Nguyen on 4/2/2017.
 */
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    console.log("before request: success", config);
    return config;
}, function (error) {
    console.log("before request: not success");
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log("response: success");
    return response;
}, function (error) {
    // Do something with response error
    console.log("response: not success");
    return Promise.reject(error);
});

let baseUrl = "http://localhost:8084"

class Request {
    get(url, params) {

        var params = Object.assign({},params, {crossDomain : true,
            xhrFields: {
                withCredentials: true
            }});

        url = baseUrl + url;
        let promise = Promise.resolve(axios.get(url, params))
        promise.then(response => {
                Promise.resolve(response);
            }).catch(function (error) {
            Promise.reject(error);
        });

    }

    post(url, params) {

        var params = Object.assign({},params, {crossDomain : true,
            xhrFields: {
                withCredentials: true
            }});

        url = baseUrl + url;
        let promise = Promise.resolve(axios.post(url, params))
        promise.then(response => {
            Promise.resolve(response);
        }).catch(function (error) {
            Promise.reject(error);
        });

    }
}

const request = new Request();
export default request;
