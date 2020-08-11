import axios from 'axios';
import constant from './api';

const { base_url } = constant

export function request(url, method) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            baseURL: base_url,
            method: method,
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}
