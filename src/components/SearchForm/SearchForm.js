import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const searchString = useSelector(state => state.searchString);
  const [curentSearchString, setCurentSearchString] = useState(searchString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchString(''));
  }, [dispatch]);

  useEffect(() => {
    setCurentSearchString(searchString);
  }, [searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(curentSearchString));
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
