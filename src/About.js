import React from "react";
import { Box, Typography } from "@mui/material";
import Projects from "./Projects";
import Projects2 from "./Projects2";

const About = () => {
  let skillSet = [
    {
      index: 1,
      icon: "fa-brands fa-html5",
      color: "#DD4B25",
      label: "HTML",
    },
    {
      index: 2,
      icon: "fa-brands fa-react",
      color: "#149ECA",
      label: "React",
    },
    {
      index: 3,
      icon: "fa-brands fa-bootstrap",
      color: "#8011F5",
      label: "Bootstrap",
    },
    {
      index: 4,
      icon: "fa-brands fa-css3-alt",
      color: "#254BDF",
      label: "CSS",
    },
    {
      index: 5,
      icon: "fa-brands fa-react",
      color: "#149ECA",
      label: "Tookit",
    },
    {
      index: 6,
      icon: "fa-brands fa-m",
      color: "#007BF7",
      label: "MUI",
    },
    {
      index: 7,
      icon: "fa-brands fa-js",
      color: "#E8D44D",
      label: "JS",
    },
    {
      index: 8,
      icon: "",
      color: "#E8D44D",
      label: "X",
    },
    {
      index: 9,
      icon: "fa-brands fa-sass",
      color: "#C76395",
      label: "SASS",
    },
    {
      index: 10,
      icon: "fa-brands fa-sass",
      color: "#C76395",
      label: "SASS",
    },
  ];

  return (
    <div className="container">
      <Typography
        variant="h2"
        textAlign={"center"}
        className="gradient-bg"
        letterSpacing={"12px"}
        fontSize={"6.75rem"}
        color={"#0aa3e2"}
      >
        ABOUT
      </Typography>

      <Box color={"white"} className="row  mt-5" style={{ margin: " 0 " }}>
        <Box className="col-lg-6 col-12">
          <Typography
            variant="h5"
            color={"pink"}
            lineHeight={"40px"}
            fontFamily={"cursive"}
            className="mb-5 mt-5"
          >
            I'm a front-end web developer with 7 months of hands-on experience.
            I specialize in creating high-performance and rich interactive
            websites, ensuring optimal functionality across all platforms and
            devices.
          </Typography>

          <Typography
            variant="h5"
            lineHeight={"40px"}
            color={"#c7c015;"}
            fontFamily={"cursive"}
            className="mb-5"
          >
            Although I'm very familiar with using frameworks, my websites are
            primarily hand-coded using HTML5, CSS3, JavaScript &
            Bootstrap.Additionally, I have expertise in building applications
            with React and managing state using Redux Toolkit.
          </Typography>

          <Typography
            variant="h5"
            lineHeight={"40px"}
            color={"pink;"}
            fontFamily={"cursive"}
            className="mb-5"
          >
            With a strong emphasis on "Progressive Enhancement", I look for
            creative ways to push the boundaries of website front-end code
            without compromising on browser support and performance.
          </Typography>
        </Box>

        <Box className="col-lg-2 col-0"></Box>

        <Box
          className="col-lg-4 col-md-5 col-12"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          rowGap={"30px"}
          columnGap={"20px"}
        >
          {skillSet.map((box, index) => (
            <Box
              key={index}
              className={`Box-${
                index + 1
              } d-flex align-items-center justify-content-center gradient-border ${
                [2, 5, 8, 10].includes(index + 1)
                  ? "align-self-start"
                  : "align-self-end"
              } flex-column`}
              sx={{
                width: 100,
                height: 100,
                borderRadius: 3,
                // border: "6px solid #84316b",
                bgcolor: "black",
                "&:hover": {
                  // bgcolor: "black",
                },
                gridColumn: index === 9 ? "2/4" : undefined,
              }}
            >
              {" "}
              <i
                className={`fa-brands ${box.icon}`}
                style={{ fontSize: "60px", color: box.color }}
              ></i>
              <span style={{ color: "#c7c015", fontWeight: "500" }}>
                {box.label}
              </span>
            </Box>
          ))}
        </Box>
      </Box>
      <Projects2 />
    </div>
  );
};

export default About;
