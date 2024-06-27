// Card.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button type="button" className={clsx(styles.button, props.isFavorite && styles.favorite)} onClick={handleToggleFavorite}>
        <i className="fa fa-star-o"></i>
      </button>
    </li>
  );
};

export default Card;
