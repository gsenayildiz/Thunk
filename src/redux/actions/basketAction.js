import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//sepete yeni eleman ekleyecek fonksiyon
 export const addToBasket = (product, rest) => (dispatch) => {
 console.log(product)
 console.log(rest);
 //!1. adım:sepete eklenilecek olan ürünün bilgilerini belirle
 const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
 };
 //! 2.adım: elemanı API ye ekle
 api.post("/cart", newItem).then(() => 
    //!3.adım: veri apiye eklenirse reducera gönder
    dispatch({
    type: ActionTypes.ADD_TO_CART,
    payload: newItem,
 }));
};

//sepeteeki elemanı günceller miktar arrtırma ve azaltma
export const updateItem = (id, newAmount) => (dispatch) => {
  // console.log("id", id)
  // console.log("amount", newAmount)
   //! 1. adım : API de bulunan elemanı güncelle
   api.patch(`/cart/${id}`, {amount: newAmount})
   .then((res) => {
    //  console.log(res);
      //!2.adım: istek başarılı olursa reducer ahaber ver
      dispatch({
         type: ActionTypes.UPDATE_CART,
         payload: res.data //! güncellenecek item
      })
   }).catch((err) =>
      //! 3. adım: işlem gerçekleşmesse err içerisindeki mesajı  reducer a gönder
      dispatch({type: ActionTypes.ERROR_CART,
      payload: err.message
   }))
};

export const deleteItem = (id) => (dispatch) => {
   console.log(id);
   api.delete(`/cart/${id}`).then(() => dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
   }))

};

