import axios from 'axios';
import constant from './api';

const { base_url } = constant

export function request(url, method, data) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            baseURL: base_url,
            method: method,
            data: data
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}
