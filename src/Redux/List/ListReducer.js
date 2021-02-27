import { ADD_TO_LIST, ELIMINATE_FROM_LIST } from "./ListConstants";

 var initialState = [];
 var ListReducer = (state = initialState, action) =>{
    var {type, payload} = action;
    switch(type) {
         case ADD_TO_LIST:
           return [...state, payload.Info,];
         case ELIMINATE_FROM_LIST:
            return state.filter((transaction) => transaction.ID != payload.transactionID);
        default:
            return state;
    }
 }

 export default ListReducer;