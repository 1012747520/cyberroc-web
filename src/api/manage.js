import {axios} from '@/utils/request'

export function postAction(url,parameter) {
    return axios({
        url:url,
        method:'post',
        data:parameter
    })
}

export function postBlobAction(url,parameter) {
    return axios({
        url:url,
        method:'post',
        data:parameter,
        responseType: 'blob'
    })
}

export function getBlobAction(url,parameter) {
    return axios({
        url:url,
        method:'get',
        data:parameter,
        responseType: 'blob'
    })
}

export function getAction(url,parameter) {
    return axios({
        url:url,
        method:'get',
        data:parameter
    })
}