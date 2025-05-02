import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  ContactHero,
  ContactForm
} from "../components/index.js";
import { findOneSection } from '../service/index.js';

const ContactPage = () => {



  const [dataForContactHero, setDataForContactHero] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const [dataForContactform, setDataForContactform] = useState({
    loading: false,
    error: null,
    data: null,
  });


  // Contact Hero

  const getDataForContactHeroSection = async () => {
    setDataForContactHero({ loading: true, error: null, data: null });

    try {
      const body = { id: "32" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForContactHero({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForContactHero({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForContactHero({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };



  // Contact form

  const getDataForContactFormSection = async () => {
    setDataForContactform({ loading: true, error: null, data: null });

    try {
      const body = { id: "34" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForContactform({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForContactform({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForContactform({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };



  useEffect(() => {
    getDataForContactHeroSection();
    getDataForContactFormSection();
  }, []);

  return (
    <div className="bg" style={{ backgroundColor: 'black' }}>
      <Header />


      <ContactHero loading={dataForContactHero.loading}
        error={dataForContactHero.error}
        data={dataForContactHero.data} />


      <ContactForm loading={dataForContactform.loading}
        error={dataForContactform.error}
        data={dataForContactform.data} />


      <Footer />
    </div>
  )
}

export default ContactPage
