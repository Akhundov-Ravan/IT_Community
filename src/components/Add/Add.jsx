// import React, { useState, useRef } from "react";
// import styles from "./Add.module.css";
// import specialists from "../../assets/fon.jpg";
// import Button from "../Button/Button";
// import Anket from "../Anket/Anket";

// const Add = () => {
//   const [showForm, setShowForm] = useState(false);
//   const inputRef = useRef(null); 

//   const handleClick = () => {
//     setShowForm(true); 

//        setTimeout(() => {
//       if (inputRef.current) {
//         inputRef.current.focus();
//       }
//     }, 0);
//   };

//   const handleFormSubmit = () => {
//     setShowForm(false); 
//   };

//   return (
//     <div>
//       <div className={styles.add}>
//         <div className={styles.container_left}>
//           <h4>
//             Bizim{" "}
//             <span>
//               İT MÜTƏXƏSSİSLƏRİ <br />{" "}
//             </span>{" "}
//             <span>icma</span>mıza qoşul{" "}
//           </h4>
//           <Button
//             text="Müraciət et"
//             onClick={handleClick}
//             style={{ backgroundColor: "rgb(247, 246, 242)" }}
//           />
//         </div>
//         <div className={styles.container_right}>
//           <img src={specialists} alt="" />
//         </div>
//       </div>

//       {showForm && <Anket onSubmit={handleFormSubmit} inputRef={inputRef} />}
//     </div>
//   );
// };

// export default Add;


import React, { useState, useRef } from "react";
import styles from "./Add.module.css";
import specialists from "../../assets/fon.jpg";
import Button from "../Button/Button";
import Anket from "../Anket/Anket";

const Add = ({ onAddProfile }) => {
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
      {showForm && <Anket onSubmit={handleFormSubmit} inputRef={inputRef} />}
    </div>
  );
};
export default Add;
