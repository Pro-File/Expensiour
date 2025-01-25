import {
  ADD_TO_LIST,
  ELIMINATE_FROM_LIST,
  SET_ALL_LIST,
} from "./ListConstants";

var initialState = [];
var ListReducer = (state = initialState, action) => {
  let transactions;
  var { type, payload } = action;

  switch (type) {
    case SET_ALL_LIST:
      transactions = [...payload.transactions];;
      return transactions;
    case ADD_TO_LIST:
      transactions = [...state, payload.Info];
      //   localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    case ELIMINATE_FROM_LIST:
      transactions = state.filter(
        (transaction) => transaction.ID != payload.transactionID
      );
      // localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default ListReducer;
