import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const SearchForm = () => {
    const [curentSearchString, setCurentSearchString] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATED_SEARCHSTRING", payload: curentSearchString });
    setCurentSearchString("");
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        type="text"
        value={curentSearchString}
        onChange={(e) => setCurentSearchString(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
}
  
export default SearchForm;