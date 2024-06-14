import React from "react";
import { Box, Typography } from "@mui/material";
import Projects from "./Projects";
import Projects2 from "./Projects2";
import { BiLogoHtml5 } from "react-icons/bi";
import { ImCss3 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaSass } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";


const About = ({ref}) => {
  let skillSet = [
    {
      index: 1,
      icon: <BiLogoHtml5/>,
      color: "#DD4B25",
      label: "HTML",
    },
    {
      index: 2,
      icon: <FaReact />,
      color: "#149ECA",
      label: "React",
    },
    {
      index: 3,
      icon: <FaBootstrap />,
      color: "#8011F5",
      label: "Bootstrap",
    },
    {
      index: 4,
      icon: <ImCss3 />,
      color: "#254BDF",
      label: "CSS",
    },
    {
      index: 5,
      icon: <SiRedux />,
      color: "#149ECA",
      label: "Tookit",
    },
    {
      index: 6,
      icon: <SiMui />,
      color: "#007BF7",
      label: "MUI",
    },
    {
      index: 7,
      icon: <RiJavascriptFill />,
      color: "#E8D44D",
      label: "JS",
    },
    {
      index: 8,
      icon: <IoLogoFirebase />,
      color: "#E8D44D",
      label: "Firebase",
    },
    {
      index: 9,
      icon: <FaSass />,
      color: "#C76395",
      label: "SASS",
    },
    {
      index: 10,
      icon: <SiNextdotjs style={{color: "#595959"}}/>,
      color: "#C76395",
      label: "Next JS",
    },
  ];

  return (
    <div className="container about" id="about">
       <div  data-aos="fade-up">
        {/* <div className="stroke">ABOUT</div> */}
       <Typography
        variant="h2"
        textAlign={"center"}
        className="gradient-bg"
        letterSpacing={"40px"}
        fontSize={"6.75rem"}
        color={"#0aa3e2"}
      >
        ABOUT
      </Typography>

      <Box color={"white"} className="row  mt-5" style={{ margin: " 0 " }}>
        <Box  className="col-lg-6 col-12"  >
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
             <div style={{ fontSize: "50px", color: box.color }}>{box.icon}</div>
              {/* <i
                className={`fa-brands ${box.icon}`}
                style={{ fontSize: "60px", color: box.color }}
              ></i> */}
              <span style={{ color: "#c7c015", fontWeight: "500" }}>
                {box.label}
              </span>
            </Box>
          ))}
        </Box>
      </Box>
       </div>
      {/* <Projects2 /> */}
    </div>
  );
};

export default About;
