/**
 * @flow
 */

import axios from 'axios';
import {parameters} from '../config/parameters';

const rickAndMortyGet = axios.create({
    withCredentials: false,
    baseURL: parameters.API_URL_BASE,
    responseType: 'json',
});

const rickAndMortyAPI = {
    get(uri, data, config){
        return rickAndMortyGet(uri,{...config,params:data});
    }
}
export {rickAndMortyAPI};