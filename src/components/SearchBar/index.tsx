import { useDispatch } from "react-redux";
import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import styles from "./SearchBar.module.scss";
import { setSearchValue } from "../../features/filterSlice";

const SearchBar: React.FC = () => {
  const [valueLocal, setValueLocal] = useState("");

  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce((e) => {
      dispatch(setSearchValue(e.target.value));
    }, 200),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueLocal(e.target.value);
    debouncedSearch(e);
  };

  return (
    <input
      placeholder="Search..."
      className={styles.root}
      type="search"
      value={valueLocal}
      onChange={(e) => onChangeInput(e)}
    />
  );
};

export default SearchBar;
