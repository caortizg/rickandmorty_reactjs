import rickAndMortyCharacterManager from '../dataManagers/rickAndMortyCharacter';

export const tableStatusCodes = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    ERROR: 'ERROR',
}
export const nameModel = 'character';

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