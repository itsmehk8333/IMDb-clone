import { AddMovie } from "./ActionType"


const init={
    list:[]
}

export const WishListReducer =(store = init ,{type,payload}) =>{
    switch(type){
        case AddMovie:
            return {...store, list:[...store.list , payload]}
        default:
            return {...store}
    }

}