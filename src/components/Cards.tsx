import { useSelector } from "react-redux";
import Card from "./Card";
import CardPlaceholder from "./Card/CardPlaceholder";
import { RootState } from "../store";

const Cards: React.FC = (): any => {
  const { status, pizzas } = useSelector((state: RootState) => state.pizza);
  const { searchValue } = useSelector((state: RootState) => state.filter);
  const searchPizzas = pizzas
    .filter(({ title }: { title: string }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map((item) => {
      return <Card key={item.id} {...item} />;
    });

  return status === "pending"
    ? [...new Array(2)].map((_, index) => <CardPlaceholder key={index} />)
    : searchPizzas;
};

export default Cards;
