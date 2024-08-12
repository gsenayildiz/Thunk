import ActionTypes from '../actionTypes';


const initialState = {
    isLoading: false,
    error: null,
    restaurants: [], 
};

const restaurantReducer = (state = initialState, action) => {
    //console.log(action);
    switch(action.type){
        case ActionTypes.REST_LOADİNG:
            return {...state, isLoading: true};
            case ActionTypes.REST_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    error: null,
                    restaurants: action.payload,
                }
                case ActionTypes.REST_ERROR:
                    return{
                        ...state,
                        isLoading: false,
                        error: action.payload
                    }
                    default:
                        return state;
    }
    //return state;
};

export default restaurantReducer;