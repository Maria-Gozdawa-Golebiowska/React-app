import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.icons}>
        <button
          type="button"
          className={clsx(styles.button, props.isFavorite && styles.favorite)}
          onClick={handleToggleFavorite}
        >
          <i className="fa fa-star-o"></i>
        </button>
        <button
          type="button"
          className={clsx(styles.button, styles.trashButton)}
          onClick={handleRemove}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
