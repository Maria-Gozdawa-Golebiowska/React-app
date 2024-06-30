import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { useDispatch } from 'react-redux';
import { addColumn } from "../../redux/columnsRedux";

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId}));
    setTitle('');
    setIcon('');
 };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.inputStyle}
      />
      <span className={styles.inputText}>Icon: </span>
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        className={styles.inputStyle}
      />
      <Button>add Column</Button>
    </form>
  );
};
export default ColumnForm;