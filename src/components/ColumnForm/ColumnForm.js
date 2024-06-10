import { useState } from 'react';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');  

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
                Title:
                <input 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className={styles.input}
                />
            </label>
            <label className={styles.label}>
                Icon:
                <input 
                    type="text" 
                    value={icon} 
                    onChange={e => setIcon(e.target.value)} 
                    className={styles.input}
                />
            </label>
            <Button className={styles.button}>Add column</Button>
        </form>
    );
};

export default ColumnForm;
