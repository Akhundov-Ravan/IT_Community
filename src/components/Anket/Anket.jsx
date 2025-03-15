
import React, { useState } from "react";
import styles from "./Anket.module.css";

const Anket = ({ onSubmit, inputRef, options, setOptions }) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    subject: "Front-End",
    gender: "",
    company: "",
    position: "",
    resume: null,
    image: null,
    url: "",
    skills: "",
    certificates: "",
    about: "",
    jobStatus: "İş axtarır", 
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subjects, setSubjects] = useState([
    "Front-End",
    "Back-End",
    "Cybersecurity",
    "Pentester",
    "İnformasiya təhlükəsizliyi",
    "Java developer",
    "React developer",
  ]);
  const [customSubject, setCustomSubject] = useState("");

  const handleChanges = (e) => {
    const { name, type, value, files } = e.target;
    setValues({ ...values, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setIsSubmitted(true);
  };

  const ResetFun = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      subject: "Front-End",
      city: "",
      gender: "",
      company: "",
      position: "",
      resume: null,
      image: null,
      url: "",
      skills: "",
      certificates: "",
      about: "",
      jobStatus: "İş axtarır", 
    });
    setCustomSubject(""); 
    // Reset file inputs by clearing the file inputs manually
    document.getElementById("resume").value = "";
    document.getElementById("image").value = "";
  };

  const handleAddSubject = () => {
    if (customSubject.trim() && !subjects.includes(customSubject)) {
      setSubjects([...subjects, customSubject]);
      setValues({ ...values, subject: customSubject }); 
      setCustomSubject(""); // Clear the custom subject input
    }
  };

  const [newOption, setNewOption] = useState("");

  const addOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]); // Update the parent state
      setNewOption(""); // Clear input field
    }
  };

  return (
    <div className={styles.container}>
      {isSubmitted ? (
        <h1> Məlumatlar göndərildi. </h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Məlumatları daxil edin:</h1>


          <h3>Add Options</h3>
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Enter option"
      />
      <button onClick={addOption}>Add</button>

      <select>
        <option value="">Select an option</option>
        {options && options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

          <label htmlFor="firstname">Ad*</label>
          <input
            ref={inputRef}
            value={values.firstname}
            type="text"
            name="firstname"
            placeholder="Adı daxil edin"
            required
            onChange={handleChanges}
          />

          <label htmlFor="lastname">Soyad*</label>
          <input
            type="text"
            value={values.lastname}
            name="lastname"
            placeholder="Soyadı daxil edin"
            required
            onChange={handleChanges}
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            value={values.email}
            name="email"
            placeholder="Email daxil edin"
            required
            onChange={handleChanges}
          />

          <label htmlFor="mobile">Mobil nömrə</label>
          <input
            type="text"
            value={values.mobile}
            name="mobile"
            placeholder="Mobil nömrə daxil edin"
            onChange={handleChanges}
          />

          <label htmlFor="gender">Cinsi</label>
          <input
            type="radio"
            name="gender"
            value="Kişi"
            checked={values.gender === "Kişi"}
            onChange={handleChanges}
          />{" "}
          Kişi
          <input
            type="radio"
            name="gender"
            value="Qadın"
            checked={values.gender === "Qadın"}
            onChange={handleChanges}
          />{" "}
          Qadın

          <input
            type="text"
            value={values.city}
            name="city"
            placeholder="Yaşadığı yeri daxil edin"
            required
            onChange={handleChanges}
          />




          <label htmlFor="subject">Sahə</label>
          <select
            name="subject"
            value={values.subject}
            required
            onChange={handleChanges}
          >
            {subjects.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={customSubject}
            placeholder="Yeni sahə əlavə edin"
            onChange={(e) => setCustomSubject(e.target.value)}
          />
          <button
            className={styles.formButton}
            type="button"
            onClick={handleAddSubject}
          >
            Əlavə et
          </button>

          <label htmlFor="jobStatus">İş axtarır</label>
          <select
            name="jobStatus"
            value={values.jobStatus}
            onChange={handleChanges}
          >
            <option value="İş axtarır">İş axtarır</option>
            <option value="Təklifə açıq">Təklifə açıq</option>   
            <option value="İşləyir">İşləyir</option>
          </select>

          <label htmlFor="company">İşlədiyi yer</label>
          <input
            type="text"
            name="company"
            placeholder="İşlədiyi yer daxil edin"
            onChange={handleChanges}
          />

          <label htmlFor="position">Vəzifəsi</label>
          <input
            type="text"
            name="position"
            placeholder="Vəzifəsini daxil edin"
            onChange={handleChanges}
          />

          <label htmlFor="resume">CV</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChanges}
          />

          <label htmlFor="image">Şəkil</label>
          <input
            type="file"
            id="image"
            name="image"
            required
            accept="image/*"
            onChange={handleChanges}
          />

          <label htmlFor="url">Linkedin</label>
          <input
            type="text"
            name="url"
            placeholder="Linkedin profilinin url-ni daxil et"
            onChange={handleChanges}
          />

          <label htmlFor="skills">Biliklər</label>
          <textarea
            name="skills"
            value={values.skills}
            required
            cols="30"
            rows="10"
            onChange={handleChanges}
          ></textarea>

          <label htmlFor="certificates">Sertifikatlar</label>
          <textarea
            name="certificates"
            value={values.certificates}
            required
            cols="30"
            rows="10"
            onChange={handleChanges}
          ></textarea>

          <label htmlFor="about">Haqqında</label>
          <textarea
            name="about"
            value={values.about}
            required
            cols="30"
            rows="10"
            onChange={handleChanges}
          ></textarea>

          <button className={styles.formButton} type="button" onClick={ResetFun}>
            Yenilə
          </button>
          <button type="submit" className={styles.formButton}>
            Təsdiqlə
          </button>
        </form>
      )}
    </div>
  );
};

export default Anket;