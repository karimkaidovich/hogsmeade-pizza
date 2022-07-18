import { useDispatch } from "react-redux";
import { setFilterId } from "../features/filterSlice";
import React from "react";

interface IcategoriesProps {
  filterId: number;
}

const Categories: React.FC<IcategoriesProps> = ({ filterId }) => {
  const categories = ["All", "Meat", "Vegan", "Grill", "Hot"];

  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => (
          <li
            key={name}
            className={filterId === i ? "active" : ""}
            onClick={() => dispatch(setFilterId(i))}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
const MemoCategories = React.memo(Categories);
export default MemoCategories;
