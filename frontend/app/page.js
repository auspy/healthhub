"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let datepicker1Instance, datepicker2Instance, select2Instance;

    // Initialize Datepicker 1
    const datepicker1 = document.getElementById("datepicker");
    if (datepicker1) {
      datepicker1Instance = new GijgoDatePicker(datepicker1, {
        iconsLibrary: "fontawesome",
        icons: {
          rightIcon: '<span className="fa fa-caret-down"></span>',
        },
      });
    }

    // Initialize Datepicker 2
    const datepicker2 = document.getElementById("datepicker2");
    if (datepicker2) {
      datepicker2Instance = new GijgoDatePicker(datepicker2, {
        iconsLibrary: "fontawesome",
        icons: {
          rightIcon: '<span className="fa fa-caret-down"></span>',
        },
      });
    }

    // Initialize Select2
    const selectElement = document.querySelector(".js-example-basic-multiple");
    if (selectElement) {
      select2Instance = new Select2(selectElement);
    }

    // Clean up JavaScript plugins on component unmount
    return () => {
      if (datepicker1Instance) {
        datepicker1Instance.destroy();
      }
      if (datepicker2Instance) {
        datepicker2Instance.destroy();
      }
      if (select2Instance) {
        select2Instance.destroy();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      <body>
        <p className="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please{" "}
          <a href="https://browsehappy.com/">upgrade your browser</a> to improve
          your experience and security.
        </p>

        <header>
          <div className="header-area ">
            <div className="header-top_area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-md-6 "></div>
                  <div className="col-xl-6 col-md-6">
                    <div className="short_contact_list">
                      <ul>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-envelope"></i>{" "}
                            cardio-neuro-health-hub.com
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-phone"></i> 9867452301
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sticky-header" className="main-header-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <Image
                          src="/logo.png"
                          alt=""
                          height={200}
                          width={200}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="index.html">
                              Home
                            </a>
                          </li>
                          <li></li>
                          <li>
                            <a href="#">
                              Diseases <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                {" "}
                                <b>Heart Diseases </b>
                                <ul>
                                  <li> Cardiac sarcoidosis</li>
                                  <li> Congestive heart failure</li>
                                  <li> Coronary artery Disease</li>
                                </ul>
                              </li>
                              <li>
                                {" "}
                                <b> Brain Diseases </b>
                                <ul>
                                  <li> Brain Stroke</li>
                                  <li> Brain Cancer</li>
                                  <li> Brain Tumor</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Disease Detection Page{" "}
                            <i className="ti-angle-down"></i>
                            <ul className="submenu">
                              <Link href="/heart">
                                {" "}
                                Heart Disease Detection Page
                              </Link>
                              <Link href="/brain">
                                Brain Disease Detection Page
                              </Link>
                            </ul>
                          </li>

                          <li>Prognosis</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      <div className="book_btn d-none d-lg-block">
                        <a className="popup-with-form" href="#test-form">
                          Detect Diseases
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="slider_area">
          <div className="slider_active owl-carousel">
            <div
              className="single_slider  d-flex align-items-center slider_bg_1"
              style={{
                backgroundImage: "url('/banner/banner.png')",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="slider_text ">
                      <h3>
                        {" "}
                        <span>
                          Cardio Neuro Health Hub: Disease Detection, Diagnosis
                          and Prognosis
                        </span>{" "}
                        <br />
                      </h3>
                      <p>
                        Health is timeless, essential for lifelong well-being.{" "}
                        <br />
                        Health is one of the topmost priorities of every living
                        being which can’t be ignored. <br />
                        The Cardio-Neuro Health Hub Project is dedicated to
                        early detection and diagnosis of brain and heart
                        diseases. <br />
                        Feature: Our platform allows users to upload
                        reports/data and receive preventive measures,
                        encouraging preventive health management. <br />
                        Aim: to promote overall well-being by enabling informed
                        decision-making and timely interventions.
                      </p>
                      <a href="#" className="boxed-btn3">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="single_slider  d-flex align-items-center slider_bg_2">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="slider_text ">
                      <h3>
                        {" "}
                        <span>
                          So what are the problems which will be solved by this
                          project?
                        </span>{" "}
                        <br />
                      </h3>
                      <p>
                        The Cardio-Neuro Health Hub Project addresses the
                        pressing issue of heart and brain diseases that continue
                        to afflict millions worldwide. The critical problem we
                        aim to solve is the delayed diagnosis and insufficient
                        access to preventive measures. Our project seeks to
                        provide a comprehensive solution by creating a platform
                        where individuals can upload their health reports.
                        Utilizing advanced machine learning algorithms, we
                        intend to achieve high accuracy in disease detection and
                        prognosis, enabling timely intervention and personalized
                        care. Beyond detection, our goal is to empower
                        individuals with the knowledge and tools needed for
                        effective management and improved prognostic outcomes,
                        ultimately promoting overall health and well-being.
                      </p>
                      <a href="#" className="boxed-btn3">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service_area">
          <div className="container p-0">
            <div className="row no-gutters">
              <div className="col-xl-4 col-md-4">
                <div className="single_service">
                  <div className="icon">
                    <i className="flaticon-electrocardiogram"></i>
                  </div>
                  <h3> Disease Detection </h3>
                  <p>
                    Identifying a disease or condition, often through advanced
                    technologies or symptom recognition. Early detection allows
                    for timely intervention and better treatment outcomes.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_service">
                  <div className="icon">
                    <i className="flaticon-emergency-call"></i>
                  </div>
                  <h3>Diagnosis</h3>
                  <p>
                    The specific identification and classification of a disease
                    using patient history, tests, and physical exams. Accurate
                    diagnosis tailors treatment plans to individual patients.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_service">
                  <div className="icon">
                    <i className="flaticon-first-aid-kit"></i>
                  </div>
                  <h3>Prognosis </h3>
                  <p>
                    {" "}
                    Predicting a disease's course and outcome. It helps patients
                    and healthcare providers understand the potential
                    implications, aiding in treatment decisions and lifestyle
                    adjustments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome_docmed_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="welcome_thumb">
                  <div className="thumb_1">
                    <img src="/about/1.png" alt="" />
                  </div>
                  <div className="thumb_2">
                    <img src="/about/2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="welcome_docmed_info">
                  <h2>Welcome to Cardio-Neuro Health Hub</h2>
                  <h3>
                    Best Care For Your <br />
                    Good Health
                  </h3>
                  <ul>
                    {" "}
                    <b>Research Objectives </b>
                    <li>
                      RO1: Aid in recognizing cardiac or psychiatric disorders.
                    </li>
                    <li>
                      RO2: Develop a web app for uploading medical reports and
                      risk factors, facilitating informed decisions.
                    </li>
                    <li>
                      RO3: Use ML and deep learning algorithms for early
                      detection of heart and brain diseases, enhancing
                      diagnostics.
                    </li>
                    <li>
                      RO4: Recommend preventive measures for early-stage disease
                      management, improving patient outcomes.
                    </li>
                  </ul>

                  <a href="#" className="boxed-btn3-white-2">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our_department_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title text-center mb-55">
                  <h3>Heart and Brain diseases</h3>
                  <p>
                    The heart and the brain disease that can be detected using
                    this platform are :{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src="/department/1.png" alt="" />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">Cardiac sarcoidosis</a>
                    </h3>
                    <p>
                      Cardiac sarcoidosis is a rare condition characterized by
                      inflammation and the formation of granulomas in the heart.
                      This inflammatory disease can affect the heart's
                      electrical system, leading to arrhythmias, heart failure,
                      and in severe cases, sudden cardiac death. Diagnosis can
                      be challenging as symptoms vary widely, but treatment
                      typically involves medications to reduce inflammation and
                      manage symptoms, sometimes supplemented by implantable
                      devices like pacemakers or defibrillators.
                    </p>
                    <a href="#" className="learn_more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src="/department/2.png" alt="" />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">Congestive heart failure</a>
                    </h3>
                    <p>
                      Congestive heart failure occurs when the heart is unable
                      to pump blood effectively, leading to a buildup of fluid
                      in the body. This condition can result from various heart
                      issues such as coronary artery disease, high blood
                      pressure, or heart valve disorders. Symptoms include
                      shortness of breath, fatigue, and swelling in the legs.
                      Treatment involves lifestyle changes, medications, and
                      sometimes surgical interventions like heart valve repair
                      or transplant
                    </p>
                    <a href="#" className="learn_more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src="/department/3.png" alt="" />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">Coronary Artery Disease (CAD)</a>
                    </h3>
                    <p>
                      CAD is a common heart condition where plaque buildup
                      narrows the arteries supplying blood to the heart muscles.
                      This reduction in blood flow can cause chest pain
                      (angina), shortness of breath, or in severe cases, heart
                      attacks. Management includes lifestyle modifications
                      (diet, exercise), medications to control cholesterol and
                      blood pressure, and procedures like angioplasty or bypass
                      surgery to restore blood flow.
                    </p>
                    <a href="#" className="learn_more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src="/department/4.png" alt="" />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">Brain Stroke</a>
                    </h3>
                    <p>
                      A stroke occurs when there's a sudden interruption of
                      blood flow to the brain, depriving it of oxygen and
                      nutrients. Ischemic strokes, caused by blood clots, and
                      hemorrhagic strokes, caused by bleeding in the brain, are
                      the two main types. Symptoms include sudden numbness or
                      weakness in the face, arm, or leg, confusion, trouble
                      speaking or understanding speech, and difficulty walking.
                      Immediate medical attention is crucial to minimize brain
                      damage. Treatment may involve medication, surgery, or
                      rehabilitation.
                    </p>
                    <a href="#" className="learn_more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src="/department/5.png" alt="" />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">Brain tumor</a>
                    </h3>
                    <p>
                      Brain tumors are abnormal growths of cells in the brain.
                      They can be benign (non-cancerous) or malignant
                      (cancerous). Symptoms vary widely based on the tumor's
                      location and size but may include headaches, seizures,
                      changes in vision, or difficulties with speech and motor
                      functions. Treatment options include surgery, radiation
                      therapy, chemotherapy, or a combination, tailored to the
                      tumor's type and stage.
                    </p>
                    <a href="#" className="learn_more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src="/department/6.png" alt="" />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">Brain cancer</a>
                    </h3>
                    <p>
                      Brain cancer refers to the abnormal growth of cells in the
                      brain. There are various types of brain tumors, each with
                      its own characteristics and treatment approaches. Symptoms
                      can include headaches, seizures, cognitive changes, and
                      neurological deficits. Treatment options may include
                      surgery, radiation therapy, chemotherapy, or a combination
                      of these, depending on the type, location, and stage of
                      the tumor.
                    </p>
                    <a href="#" className="learn_more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Script src="js/vendor/modernizr-3.5.0.min.js"></Script>
        <Script src="js/vendor/jquery-1.12.4.min.js"></Script>
        <Script src="js/popper.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/ajax-form.js"></Script>
        <Script src="js/waypoints.min.js"></Script>
        <Script src="js/jquery.counterup.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/scrollIt.js"></Script>
        <Script src="js/jquery.scrollUp.min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/nice-select.min.js"></Script>
        <Script src="js/jquery.slicknav.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/plugins.js"></Script>
        <Script src="js/gijgo.min.js"></Script>

        <Script src="js/contact.js"></Script>
        <Script src="js/jquery.ajaxchimp.min.js"></Script>
        <Script src="js/jquery.form.js"></Script>
        <Script src="js/jquery.validate.min.js"></Script>
        <Script src="js/mail-Script.js"></Script>

        <Script src="js/main.js"></Script>
      </body>
    </>
  );
}
