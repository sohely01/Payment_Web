import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  FeatureHero,
  FeatureServices,
  FeatureCore,
  FeatureVisa
} from "../components/index";
import { findOneSection } from '../service/index.js';


const FeaturePage = () => {


  const [dataForFeatureHero, setDataForFeatureHero] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForFeatureServices, setDataForFeatureServices] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForFeatureCore, setDataForFeatureCore] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const [dataForFeatureVisa, setDataForFeatureVisa] = useState({
    loading: false,
    error: null,
    data: null,
  });





  // Feature Feature
  const getDataForFeatureHeroSection = async () => {
    setDataForFeatureHero({ loading: true, error: null, data: null });

    try {
      const body = { id: "18" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForFeatureHero({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForFeatureHero({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForFeatureHero({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };

  // Feature Services
  const getDataForFeatureServiceSection = async () => {
    setDataForFeatureServices({ loading: true, error: null, data: null });

    try {
      const body = { id: "37" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForFeatureServices({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForFeatureServices({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForFeatureServices({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };



  // Feature core
  const getDataForFeatureCoreSection = async () => {
    setDataForFeatureCore({ loading: true, error: null, data: null });

    try {
      const body = { id: "20" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForFeatureCore({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForFeatureCore({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForFeatureCore({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };



  // Feature Visa
  const getDataForFeatureVisaSection = async () => {
    setDataForFeatureVisa({ loading: true, error: null, data: null });

    try {
      const body = { id: "31" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForFeatureVisa({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForFeatureVisa({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForFeatureVisa({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };


  useEffect(() => {
    getDataForFeatureHeroSection();
    getDataForFeatureServiceSection();
    getDataForFeatureCoreSection();
    getDataForFeatureVisaSection();
  }, []);

  return (
    <div className="bg" style={{ backgroundColor: 'black' }}>
      <Header />
      <FeatureHero loading={dataForFeatureHero.loading}
        error={dataForFeatureHero.error}
        data={dataForFeatureHero.data} />


      <FeatureServices loading={dataForFeatureServices.loading}
        error={dataForFeatureServices.error}
        data={dataForFeatureServices.data} />


      <FeatureCore loading={dataForFeatureCore.loading}
        error={dataForFeatureCore.error}
        data={dataForFeatureCore.data} />


      <FeatureVisa loading={dataForFeatureVisa.loading}
        error={dataForFeatureVisa.error}
        data={dataForFeatureVisa.data} />


      <Footer />
    </div>
  )
}

export default FeaturePage
