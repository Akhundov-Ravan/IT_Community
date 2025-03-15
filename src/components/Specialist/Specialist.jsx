import React from "react";
import styles from "./Specialist.module.css";
import left_arrow from "../../assets/left_arrow.png";
import man3 from "../../assets/man3.jpg";

const Specialist = () => {
  return (
    <div className={styles.questionnaire}>
      <h1 className={styles.back_arrow}>
        <img src={left_arrow} alt="" /> Back to Search
      </h1>

      <div className={styles.container}>
        <div className={styles.container_left}>
          <img src={man3} alt="" />
          <h3>Rəvan Axundov</h3>
          <p>Front-End developer</p>
          <p>Bakı</p>
          <button>İş axtarır</button>
        </div>
        <div className={styles.container_right}>
          <div className={styles.titles}>
            <span>Haqqımda</span>
            <span>Biliklərim</span>
            <span>İş təcrübəm</span>
            <span>Sertifikatlarım</span>
            <span>Əlaqə</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.contents}>
            <div id={styles.haqqımda}>
              <h5>Haqqımda</h5>
              <p>
                Are you ready to become part of XtraFit Team? With over 8 years
                as a Personal Trainer and Fighting Coaching. The design of each
                PT session is to be fun, varied, and functional. You’ll be
                working directly with myself at the gym, following a bespoke
                plan to ensure you hit your goals in record time. Whether you
                want to slim down, add muscle or anything in between, my
                personal training packages will get you there in a fun and
                sustainable way. Whether you’re new to fitness or you’re a
                seasoned veteran, there is a personal training programme for
                you. Do not hesitate to take that first step to a better you and
                get in touch to book in your free consultation session today.
                Follow my business page on lnstagram @xtra.fit.
              </p>
            </div>
            <div id={styles.haqqımda}>
              <h5>Biliklərim</h5>
              <p>
                Are you ready to become part of XtraFit Team? With over 8 years
                as a Personal Trainer and Fighting Coaching. The design of each
                PT session is to be fun, varied, and functional. You’ll be
                working directly with myself at the gym, following a bespoke
                plan to ensure you hit your goals in record time. Whether you
                want to slim down, add muscle or anything in between, my
                personal training packages will get you there in a fun and
                sustainable way. Whether you’re new to fitness or you’re a
                seasoned veteran, there is a personal training programme for
                you. Do not hesitate to take that first step to a better you and
                get in touch to book in your free consultation session today.
                Follow my business page on lnstagram @xtra.fit.
              </p>
            </div>
            <div id={styles.haqqımda}>
              <h5>İş təcrübəm</h5>
              <p>
                Are you ready to become part of XtraFit Team? With over 8 years
                as a Personal Trainer and Fighting Coaching. The design of each
                PT session is to be fun, varied, and functional. You’ll be
                working directly with myself at the gym, following a bespoke
                plan to ensure you hit your goals in record time. Whether you
                want to slim down, add muscle or anything in between, my
                personal training packages will get you there in a fun and
                sustainable way. Whether you’re new to fitness or you’re a
                seasoned veteran, there is a personal training programme for
                you. Do not hesitate to take that first step to a better you and
                get in touch to book in your free consultation session today.
                Follow my business page on lnstagram @xtra.fit.
              </p>
            </div>
            <div id={styles.haqqımda}>
              <h5>Sertifikatlarım</h5>
              <p>
                Are you ready to become part of XtraFit Team? With over 8 years
                as a Personal Trainer and Fighting Coaching. The design of each
                PT session is to be fun, varied, and functional. You’ll be
                working directly with myself at the gym, following a bespoke
                plan to ensure you hit your goals in record time. Whether you
                want to slim down, add muscle or anything in between, my
                personal training packages will get you there in a fun and
                sustainable way. Whether you’re new to fitness or you’re a
                seasoned veteran, there is a personal training programme for
                you. Do not hesitate to take that first step to a better you and
                get in touch to book in your free consultation session today.
                Follow my business page on lnstagram @xtra.fit.
              </p>
            </div>
            <div id={styles.haqqımda}>
              <h5>Əlaqə</h5>
              <p>
                Are you ready to become part of XtraFit Team? With over 8 years
                as a Personal Trainer and Fighting Coaching. The design of each
                PT session is to be fun, varied, and functional. You’ll be
                working directly with myself at the gym, following a bespoke
                plan to ensure you hit your goals in record time. Whether you
                want to slim down, add muscle or anything in between, my
                personal training packages will get you there in a fun and
                sustainable way. Whether you’re new to fitness or you’re a
                seasoned veteran, there is a personal training programme for
                you. Do not hesitate to take that first step to a better you and
                get in touch to book in your free consultation session today.
                Follow my business page on lnstagram @xtra.fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
