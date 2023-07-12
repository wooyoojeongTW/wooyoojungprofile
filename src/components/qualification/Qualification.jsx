import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
         
            

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">졸업</h3>
                <span className="qualification__subtitle">
                신일여자중학교(미술중점)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2012.03 - 2015.02
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">졸업</h3>
                <span className="qualification__subtitle">
                신일여자고등학교(미술반)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015.03 - 2018.02
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">졸업 </h3>
                <span className="qualification__subtitle">
                동국대학교 경주캠퍼스
(미술학과)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018.03 - 2022.02
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
           

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">교환학생</h3>
                <span className="qualification__subtitle">
                시나카린위롯대학교
(비주얼아트학과 교환학생)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019.08 - 2020.02
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">세잔IT직업전문학교 수료</h3>
                <span className="qualification__subtitle">웹디자인&멀티미디어콘텐츠제작</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 22022.04.25 - 2022.10.17

                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
