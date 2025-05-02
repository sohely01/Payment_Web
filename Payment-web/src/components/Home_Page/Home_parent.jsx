import React, { useState } from "react";
import EditHomePage from "../Dashboard/EditHomePage"
import Home_Hero from "../Home_Page/Home_Hero";

const Home_Parent = () => {
    const [sections, setSections] = useState([
        {
          id: 1,
          title: "EMPOWER YOUR FINANCES",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 2,
          title: "GROW YOUR SAVINGS",
          description:
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
        },
      ]);
    
      return (
        <div>
          <EditHomePage sections={sections} setSections={setSections} />
          <Home_Hero sections={sections} />  {/* Make sure sections is passed here */}
        </div>
      );
    };

export default Home_Parent;
