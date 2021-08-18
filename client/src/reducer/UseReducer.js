export const initialState=false;

export const reducer=(initialState,state,action)=>{
    if(action.type==="USER"){
        return action.payload;
    }
    return state;
}