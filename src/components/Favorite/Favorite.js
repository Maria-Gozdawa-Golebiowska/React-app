import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';

const Favorite = () => {
    const cards = useSelector(state => getFavoriteCard(state));

    if(cards.length === 0) return <PageTitle>You didn't choose favorite cards...</PageTitle>;

    return (
        <div className={styles.favoriteWrapper}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.cardWrapper}>
                <ul className={styles.cards}>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            isFavorite={card.isFavorite}
                            id={card.id} 
                        />
                    ))}
                </ul>
            </article>
        </div>
    );
};

export default Favorite;
