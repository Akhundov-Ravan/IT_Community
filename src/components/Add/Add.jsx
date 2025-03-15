import React, { useState, useRef } from "react";
import styles from "./Add.module.css";
import specialists from "../../assets/fon.jpg";
import Button from "../Button/Button";
import Anket from "../Anket/Anket";

const Add = ({ onAddProfile, options, setOptions }) => {
  const [showForm, setShowForm] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setShowForm(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleFormSubmit = (formData) => {
    onAddProfile(formData);
    setShowForm(false);
  };

  return (
    <div>
      <div className={styles.add}>
        <div className={styles.container_left}>
          <h4>Bizim <span>İT MÜTƏXƏSSİSLƏRİ</span> <br></br> icmamıza qoşul</h4>
          <Button text="Müraciət et" onClick={handleClick} />
        </div>
        <div className={styles.container_right}>
          <img src={specialists} alt="" />
        </div>
      </div>
      {showForm && <Anket onSubmit={handleFormSubmit} inputRef={inputRef} options={options} setOptions={setOptions}/>}
    </div>
  );
};
export default Add;