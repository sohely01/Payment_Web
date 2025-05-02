import React, { useEffect, useState } from "react";
import {
  Header,
  Home_Hero,
  Home_About,
  Home_Finance,
  Home_gateway,
  Home_Services,
  Home_Visa,
  Home_Faq,
  Footer
} from "../components/index.js";
import { findOneSection } from "../service/index.js";

const HomePage = () => {
  const [dataForHome_Hero, setDataForHome_Hero] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForHomeAbout, setDataForHomeAbout] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForFinance, setDataForFinance] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const [dataForHomeGateway, setDataForHomeGateway] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const [dataForHomeServices, setDataForHomeServices] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const [dataForHomeVisa, setDataForHomeVisa] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const [dataForHomeProffessionals, setDataForHomeProffessionals] = useState({
    loading: false,
    error: null,
    data: null,
  });


  const [dataForHomeFaq, setDataForHomeFaq] = useState({
    loading: false,
    error: null,
    data: null,
  });





  // Home Gateway
  0
  const getDataForHomePaymentSection = async () => {
    setDataForHomeGateway({ loading: true, error: null, data: null });

    try {
      const body = { id: "10" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForHomeGateway({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForHomeGateway({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForHomeGateway({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };







  // Home Hero
  const getDataForHomeHeroSection = async () => {
    setDataForHome_Hero({ loading: true, error: null, data: null });

    try {
      const body = { id: "1" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForHome_Hero({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForHome_Hero({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForHome_Hero({
        loading: false,
        error: "Something went wrong while fetching hero data.",
        data: null,
      });
    }
  };

  // Home About
  const getDataForHomeAboutById = async () => {
    setDataForHomeAbout({ loading: true, error: null, data: null });

    try {
      const body = { id: "7" };
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForHomeAbout({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForHomeAbout({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForHomeAbout({
        loading: false,
        error: "Something went wrong while fetching about data.",
        data: null,
      });
    }
  };

  // Home Finance
  const getDataForHomeFinanceById = async () => {
    setDataForFinance({ loading: true, error: null, data: null });

    try {
      const body = { id: "9" }; // Make sure this is the correct ID for Finance
      const apiResponse = await findOneSection(body);
      console.log("apiResponse", apiResponse)

      if (apiResponse.status === "failed") {
        setDataForFinance({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForFinance({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForFinance({
        loading: false,
        error: "Something went wrong while fetching finance data.",
        data: null,
      });
    }
  };






  // Home Services
  const getDataForHomeServiceById = async () => {
    setDataForHomeServices({ loading: true, error: null, data: null });

    try {
      const body = { id: "37" }; // Make sure this is the correct ID for Finance
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForHomeServices({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForHomeServices({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForHomeServices({
        loading: false,
        error: "Something went wrong while fetching Service data.",
        data: null,
      });
    }
  };



  // Home Visa
  const getDataForHomeVisaById = async () => {
    setDataForHomeVisa({ loading: true, error: null, data: null });

    try {
      const body = { id: "14" }; // Make sure this is the correct ID for Finance
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForHomeVisa({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForHomeVisa({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForHomeVisa({
        loading: false,
        error: "Something went wrong while fetching Service data.",
        data: null,
      });
    }
  };




  // Home Faq
  const getDataForHomeFaqById = async () => {
    setDataForHomeFaq({ loading: true, error: null, data: null });

    try {
      const body = { id: "24" }; // Make sure this is the correct ID for Finance
      const apiResponse = await findOneSection(body);

      if (apiResponse.status === "failed") {
        setDataForHomeFaq({
          loading: false,
          error: apiResponse.message,
          data: null,
        });
        return;
      }

      setDataForHomeFaq({
        loading: false,
        error: null,
        data: apiResponse.data,
      });
    } catch (err) {
      setDataForHomeFaq({
        loading: false,
        error: "Something went wrong while fetching Service data.",
        data: null,
      });
    }
  };









  useEffect(() => {
    getDataForHomeHeroSection();
    getDataForHomeAboutById();
    getDataForHomeFinanceById();
    getDataForHomePaymentSection();
    getDataForHomeServiceById();
    getDataForHomeVisaById();
    getDataForHomeFaqById();
  }, []);

  return (
    <div className="bg" style={{ backgroundColor: "black" }}>
      <Header />

      <Home_Hero
        loading={dataForHome_Hero.loading}
        error={dataForHome_Hero.error}
        data={dataForHome_Hero.data}
      />

      <Home_About
        loading={dataForHomeAbout.loading}
        error={dataForHomeAbout.error}
        data={dataForHomeAbout.data}
      />

      <Home_Finance
        loading={dataForFinance.loading}
        error={dataForFinance.error}
        data={dataForFinance.data}
      />


      <Home_gateway loading={dataForHomeGateway.loading}
        error={dataForHomeGateway.error}
        data={dataForHomeGateway.data}
      />

      <Home_Services loading={dataForHomeServices.loading}
        error={dataForHomeServices.error}
        data={dataForHomeServices.data}
      />
      <Home_Visa loading={dataForHomeVisa.loading}
        error={dataForHomeVisa.error}
        data={dataForHomeVisa.data} />




      <Home_Faq loading={dataForHomeFaq.loading}
        error={dataForHomeFaq.error}
        data={dataForHomeFaq.data} />

      <Footer />



    </div>
  );
};

export default HomePage;
