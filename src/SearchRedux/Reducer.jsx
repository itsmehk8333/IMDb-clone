import { Seach } from "./Actiontype";

const init= {
    input:''
}

export const SearchReducder =(store= init,{type,payload})=>{
    switch(type){
        case Seach:
            return{...store, input: payload}
        default:
            return{...store}
    }
}