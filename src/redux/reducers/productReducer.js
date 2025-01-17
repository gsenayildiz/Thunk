import ActionTypes from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    products: []
}

const productReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case ActionTypes.PRODUCT_LOADİNG:
      return { ...state, isLoading: true };
    case ActionTypes.PRODUCT_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload,
      };
    
    default:
      return state;
  }
};
export default productReducer;