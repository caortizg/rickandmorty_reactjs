import rickAndMortyCharacterManager from '../dataManagers/rickAndMortyCharacter';

export const tableStatusCodes = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    ERROR: 'ERROR',
}
export const nameModel = 'character';

export const filterCharacterByAnyAttribute = (characters, attributes) => {
    let {name, status, species, type, gender, location} = attributes;
    let data = characters.filter(row=>{
        return (
            (name    ? row.name.toLowerCase().trim().includes(name.toLowerCase().trim())         : false) ||
            (status  ? row.status.toLowerCase().trim().includes(status.toLowerCase().trim())     : false) ||
            (species ? row.species.toLowerCase().trim().includes(species.toLowerCase().trim())   : false) ||
            //(type    ? row.type.toLowerCase().trim().includes(type.toLowerCase().trim())         : false) ||
            (gender  ? row.gender.toLowerCase().trim().includes(gender.toLowerCase().trim())     : false) ||
            (location ? row.location.name.toLowerCase().trim().includes(location.toLowerCase().trim())     : false)   
        );
    });
    return data;
};

export default {
    state: {
        list: [],
        listStateCode: null,
        ini: false,
    }, 
    reducers: {
        // handle state changes with pure functions
        ini(state,) {
            return {
                ...state, ini:true
            }
        },
        setList(state, list) {
            return {
                ...state, list
            }
        },
        listStateLoading(state) {
            return { ...state, listStateCode: tableStatusCodes.LOADING };
        },
        listStateLoaded(state) {
            return { ...state, listStateCode: tableStatusCodes.LOADED };
        },
        listStateError(state) {
            return { ...state, listStateCode: tableStatusCodes.ERROR };
        },
    },
    effects: dispatch => ({
        async iniAsync(props, rootState) {
            if(rootState[nameModel].ini===false){
                this.ini();
                this.loadListAsync();
            }
        },
        async loadListAsync() {
            this.listStateLoading();
            rickAndMortyCharacterManager.getAll().then(data => {
                this.setList(data);
                this.listStateLoaded();
            }).catch(error=>{
                console.log({error});
                this.listStateError();
            });
        },
    }),
}