import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import man from "../../assets/man3.jpg";


const Search = ({ profiles, subjects, options, setOptions }) => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    jobStatus: "",
    gender: "",
    city: ""
  });

  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearchInputChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  const handleSearch = () => {
    const result = profiles.filter((profile) =>
      Object.keys(searchInput).every((key) => {
        // Normalize both profile[key] and searchInput[key] by converting them to lowercase and trimming spaces
        if (searchInput[key] === "") return true; // Skip empty fields
        return profile[key] && profile[key].toLowerCase().includes(searchInput[key].toLowerCase());
      })
    );

    setFilteredProfiles(result);
  };

  return (
    <div className={styles.search}>
      <div className={styles.critery}>
        <h5>Axtarış kriteriyalarını daxil edin</h5>
      </div>

      <div className={styles.critery_container}>
        <div className={styles.container_inputs}>
         <select className={styles.subject_width}>
        <option value="">Select an option</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>



           <input
            type="text"
            placeholder="Ad"
            name="firstname"
            value={searchInput.firstname}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Soyad"
            name="lastname"
            value={searchInput.lastname}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="İş statusu"
            name="jobStatus"
            value={searchInput.jobStatus}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Cinsi"
            name="gender"
            value={searchInput.gender}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Şəhər"
            name="city"
            value={searchInput.city}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className={styles.container_buttons}>
          <button className={styles.button_top} onClick={handleSearch}>Axtar</button>
          <button className={styles.button_bottom} onClick={() => navigate("/add")}>Anket əlavə et</button>
        </div>
      </div>

      <div className={styles.search_boxes}>
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <div key={index} className={styles.search_box}>
              <div className={styles.box_top}>
                <div className={styles.box_top_left}>
                  <img src={profile.image ? URL.createObjectURL(profile.image) : man} alt="Profile" />
                </div>
                <div className={styles.box_top_right}>
                  <h6>{profile.firstname} {profile.lastname}</h6>
                  <p className={styles.speciality}>{profile.subject}</p>
                  <p>{profile.company}</p>
                  <p className={styles.position}>{profile.position}</p>
                </div>
              </div>
              <div className={styles.box_bottom}>
                <div>
                  <div>Proqramlar: {profile.skills}</div>
                  <div>Sertifikatlar: {profile.certificates}</div>
                </div>
                <div className={styles.status}>
                  <span className={styles.ish}>{profile.jobStatus}</span>
                  <span className={styles.full}>ətraflı</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default Search;