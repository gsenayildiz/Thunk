import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { getRestaurants } from "../redux/actions/restaurantActions";
import { useEffect } from "react";
import Error from "../components/Error";
import Loader from '../components/Loader';
import RestaurantCard from "../components/RestaurantCard";


const Main = () => {
  const dispatch = useDispatch();
  //restaurant verilerine abone ol
  const { isLoading, error, restaurants } =  useSelector((store) => store.restaurants);
//console.log(isLoading);
//console.log(error);
//console.log(restaurants);


//verileri almak için oluşturduğumuz fonksiyon
  const getData = () =>{
    dispatch(getRestaurants());
  };
//restaurant verilerini al
  useEffect(() => {
    getData();
  },[]);


  return (
    <Container>
      <h1 className="text-3xl">Tüm Restauranlar</h1>
    
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
       {
        isLoading ? (
        <Loader /> 
        ): error ? 
        (<Error message={error} retry={getData} /> 
        ): (
          restaurants.length > 0 && 
          restaurants.map((item) =>
          <RestaurantCard key={item.id} data={item} />)
        )}
     </div>
    
    </Container>
  )
}

export default Main;
