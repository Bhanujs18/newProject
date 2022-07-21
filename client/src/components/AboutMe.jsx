import React from "react";
import Projects from "./Projects";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading.js";
import AboutmeUpper from "./AboutmeUpper";
import { Typography } from "@mui/material";
import Skills from "./Skills";

const AboutMe = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const callaboutpage = async () => {
    try {
      const res = await fetch("/aboutme", {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401) {
        navigate("/login");
      } else {
        setLoading(true);
      }
    } catch (error) {
      navigate("/login");
      console.log("error");
    }
  };

  useEffect(() => {
    callaboutpage();
  });

  return (
    <div>
      {loading ? (
        <div>
          <form method="GET">
            <Typography>
              {" "}
              <h1 className="aboutmeheading">About Me</h1>
            </Typography>
            <div className="aboutpage">
              <AboutmeUpper />
              <Skills />
              <Typography>
                {" "}
                <h1 className="aboutmeheading">Projects</h1>
              </Typography>
              <Projects />
            </div>
          </form>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AboutMe;
