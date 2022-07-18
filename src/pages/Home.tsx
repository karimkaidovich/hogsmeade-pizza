import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import { getPizzas } from "../features/pizzaSlice";
import Error from "../components/Error";
import { RootState, useAppDispatch } from "../store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  // categories state RTK
  const { filterId } = useSelector((state: RootState) => state.filter);

  // sort state RTK
  const { sortId, sortName } = useSelector(
    (state: RootState) => state.filter.sort,
  );

  // pizzas state RTK
  const { status } = useSelector((state: RootState) => state.pizza);

  const fetchItems = async () => {
    /// &sortBy=price&order=desc
    const endpointFilter = `${filterId === 0 ? "" : `&category=${filterId}`}`;

    const endpointSort = `?sortBy=${
      sortName.includes("price") ? "price" : sortName
    }&order=${sortName.includes("descending") ? "desc" : "asc"}`;

    dispatch(getPizzas({ endpointSort, endpointFilter }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItems();
  }, [sortId, sortName, filterId]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories filterId={filterId} />
          <SearchBar />
          <Sort />
        </div>
        <h2 className="content__title">Pizzas</h2>
        <div className="content__items">
          {status === "error" ? <Error /> : <Cards />}
        </div>
      </div>
    </div>
  );
};

export default Home;
