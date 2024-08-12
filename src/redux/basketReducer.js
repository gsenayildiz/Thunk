import ActionTypes from "./actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    data: [],
}

const basketReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {...state, data: state.data.concat(action.payload)};
            case ActionTypes.UPDATE_CART:
                //sepet dizisindeki eski elemanı çıkarıp yerine payload ile gelen elemanı koyabilemk için diziyi map ile dönüp id leri ile karşılaştırp yerine payload ile gelen veriyi koymasını söyledik
              const  updateArr =  state.data.map((i) => i.id === action.payload.id ? action.payload : i);
             return{...state, data: updateArr};
             case ActionTypes.ERROR_CART:
                return{...state, error: action.payload};
                case ActionTypes.DELETE_FROM_CART:
                    //ID sini bildiğimiz ürünü data dizinden kaldırmak için filter metodu kullandık
                  const filtred =  state.data.filter((i) => i.id !== action.payload)
                   console.log(filtred)
                   return{...state, data: filtred};
            default:
             return state;

    }
};
export default basketReducer;