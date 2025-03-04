import { useState } from "react";
import styles from './Blog.module.css'

const Blog = () => {
  const options = ["Front-End", "Back-End", "Cybersecurity"];

  const [selectedOption, setSelectedOption] = useState("");

  // Handle the change in the first select
  const handleFirstSelect = (event) => {
    setSelectedOption(event.target.value);
  };

   return (
    <div className={styles.container}>
   <select onChange={handleFirstSelect} className="border p-2 rounded">
        <option value="">Select a category</option>
        {options.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select className="border p-2 rounded ml-2">
        <option value="">Select an option</option>
        {options.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
   </div>
  );
};

export default Blog;
