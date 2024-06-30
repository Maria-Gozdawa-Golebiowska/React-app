import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.inputStyle}
      />
      <span>Description:</span>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.inputStyle}
      />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
