import { useState } from 'react';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');  

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title, icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <div className={styles.fieldGroup}>
                <label className={styles.label}>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className={styles.input}
                />
            </div>
            <div className={styles.fieldGroup}>
                <label className={styles.label}>Icon:</label>
                <input 
                    type="text" 
                    value={icon} 
                    onChange={e => setIcon(e.target.value)} 
                    className={styles.input}
                />
            </div>
            <Button className={styles.button}>Add column</Button>
        </form>
    );
};

export default ColumnForm;

