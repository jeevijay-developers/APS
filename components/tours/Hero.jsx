"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <section className="pageHeader -type-2 -secondary">
        <div className="pageHeader__bg">
          <Image
            width={1800}
            height={350}
            src="/img/pageHeader/2.jpg"
            alt="image"
          />
          <Image
            width="1800"
            height="40"
            src="/img/hero/1/shape.svg"
            style={{ height: "auto" }}
            alt="image"
          />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="pageHeader__content">
                <h1 className="pageHeader__title">
                  WELCOME TO APS Online Academy
                </h1>

                <p className="pageHeader__text">
                  APS Online Academy Kota established in year 1898 named after
                  Sir Robert Crosthwaite the last agent to the Viceroy of the
                  Rajputana. The club is among the first 18 clubs prior to
                  ninteenth century.
                </p>

                {/* <div className="pageHeader__search">
                  <div className="searchForm -type-1 shadow-1">
                    <div ref={dropDownContainer} className="searchForm__form">
                      <div className="searchFormItem js-select-control js-form-dd">
                        <div
                          className="searchFormItem__button"
                          onClick={() =>
                            setCurrentActiveDD((pre) =>
                              pre == "location" ? "" : "location"
                            )
                          }
                        >
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                            <i className="text-20 icon-pin"></i>
                          </div>
                          <div className="searchFormItem__content">
                            <h5>Where</h5>
                            <div className="js-select-control-chosen">
                              {location ? location : "Search destinations"}
                            </div>
                          </div>
                        </div>

                        <Location
                          setLocation={setLocation}
                          active={currentActiveDD === "location"}
                        />
                      </div>

                      <div className="searchFormItem js-select-control js-form-dd js-calendar">
                        <div
                          className="searchFormItem__button"
                          onClick={() =>
                            setCurrentActiveDD((pre) =>
                              pre == "calender" ? "" : "calender"
                            )
                          }
                        >
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                            <i className="text-20 icon-calendar"></i>
                          </div>
                          <div className="searchFormItem__content">
                            <h5>When</h5>
                            <div>
                              <span className="js-first-date custom-input">
                                {" "}
                                <Calender />
                              </span>
                              <span className="js-last-date"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="searchFormItem js-select-control js-form-dd">
                        <div
                          className="searchFormItem__button"
                          onClick={() =>
                            setCurrentActiveDD((pre) =>
                              pre == "tourType" ? "" : "tourType"
                            )
                          }
                        >
                          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                            <i className="text-20 icon-flag"></i>
                          </div>
                          <div className="searchFormItem__content">
                            <h5>Tour Type</h5>
                            <div className="js-select-control-chosen">
                              {tourType ? tourType : "All tour"}
                            </div>
                          </div>
                        </div>

                        <TourType
                          setTourType={setTourType}
                          active={currentActiveDD === "tourType"}
                        />
                      </div>
                    </div>

                    <div className="searchForm__button">
                      <button className="button -dark-1 bg-accent-1 text-white">
                        <i className="icon-search text-16 mr-10"></i>
                        Search
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
