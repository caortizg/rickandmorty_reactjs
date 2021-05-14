/**
 * @flow
 */

import {rickAndMortyAPI} from './rickAndMortyAPI'


export const path = '/character';
export const characterStatus = ['alive', 'dead', 'unknown'];
export const characterGender = ['female', 'male', 'genderless', 'unknown'];




async function getPage(page)  {
    let response =  await rickAndMortyAPI.get(path,{
        page
    });
    return response.data;
}
async function getAll()  {
    let currentPage = 1;
    let response = await getPage(currentPage++);
    let pages = response.info.pages;
    let data = [...response.results];
    
    for (currentPage; currentPage <= pages; currentPage) {
        response = await getPage(currentPage++);
        data = [...data,...response.results];        
    }
    return data;
}

export default {
    getAll
};