import {
  ADD_TO_LIST,
  ELIMINATE_FROM_LIST,
  SET_ALL_LIST,
} from "./ListConstants";

// Adding Transaction
export var SetToList = (Info) => async (dispatch) => {
  dispatch({
    type: ADD_TO_LIST,
    payload: {
      Info,
    },
  });
  // console.log(Info);
};

// Deleting Transaction
export var EliminateFromList = (transactionID) => async (dispatch) => {
  try {
    // console.log(product);
    dispatch({
      type: ELIMINATE_FROM_LIST,
      payload: {
        transactionID,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const SetTransactionsList = (transactions) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ALL_LIST,
      payload: {
        transactions,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
