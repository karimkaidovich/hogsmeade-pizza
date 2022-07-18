import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { addCartItem } from "../../features/cartSlice";
import { IpizzaCard } from "../../features/pizzaSlice";

const Card = ({ imageUrl, price, sizes, title, types }: IpizzaCard) => {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const pizzaTypes = ["thin", "traditional"];
  const [pizzaPrice, setPizzaPrice] = useState(price);
  useEffect(() => {
    if (activeType === 0) {
      setPizzaPrice(price);
    }
    if (activeType === 1) {
      setPizzaPrice(price + 2);
    }
    if (activeSize === 0) setPizzaPrice((state) => state);
    if (activeSize === 1) setPizzaPrice((state) => state + (20 / 100) * state);
    if (activeSize === 2) setPizzaPrice((state) => state + (40 / 100) * state);
  }, [activeType, activeSize]);
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((index, i) => (
            <li
              key={pizzaTypes[index]}
              onClick={() => setActiveType(i)}
              className={activeType === i ? "active" : ""}
            >
              {pizzaTypes[index]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active" : ""}
            >
              {`${size} cm.`}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from £ {pizzaPrice.toFixed(2)}</div>
        <button
          onClick={() => {
            dispatch(
              addCartItem({
                id: Math.random() * 1000,
                title,
                price: pizzaPrice,
                imageUrl,
                type: pizzaTypes[activeType],
                size: `${sizes[activeSize]} cm`,
              }),
            );
          }}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
