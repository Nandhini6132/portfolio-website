import { Box, Typography } from "@mui/material";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img1 from "../src/images/img1.png";
import img2 from "../src/images/img2.png";
import img3 from "../src/images/img3.png";
import img4 from "../src/images/img4.png";
import img5 from "../src/images/img5.png";
import chatapp from '../src/images/chat-app (3).png'
import Link from "@mui/material/Link";
import Config from "./Config";

const Projects2 = () => {
  const project = [
    {
      id: "1st project",
      image: img1,
      title: "Web Design Template",
      description:
        "I have developed a sophisticated template incorporating HTML, CSS, and Bootstrap. The result is a responsive design that seamlessly adapts to various screen sizes. This project showcases my skills in front-end development and commitment to creating  web solutions.",
      link: "https://nandhini6132.github.io/Template/",
      code: "https://github.com/Nandhini6132/Template",
    },
    {
      id: "co-working",
      image: img2,
      title: "CoWorking Office Template",
      description:
        "I've created a dynamic template using HTML, CSS, and Bootstrap, featuring a responsive design for optimal user interaction. This project highlights my proficiency in front-end development and dedication to crafting visually appealing web solutions.",
      link: "https://nandhini6132.github.io/coworking-template/",
      code: "https://github.com/Nandhini6132/coworking-template",
    },
    {
      id: "next-gen",
      image: img3,
      title: "Next Generation Payment ",
      description:
        "I've fashioned a sleek template by harnessing HTML, CSS, and Bootstrap, ensuring a seamless and responsive user experience. This endeavor underscores my adeptness in front-end development and my commitment to delivering visually impressive web solutions.",
      link: "https://nandhini6132.github.io/NxtGen/",
      code: "https://github.com/Nandhini6132/NxtGen",
    },
    {
      id: "corano",
      image: img4,
      title: "Corano Jewellery Shop",
      description:
        "I've developed an elegant jewelry shop website using a combination of HTML, CSS, and Bootstrap. The result is a visually stunning and user-friendly online platform that showcases my skills in front-end development and design aesthetics. With a keen eye for detail, I've ensured a seamless  shopping experience for users.",
      link: "https://nandhini6132.github.io/Jewelry--Shop/",
      code: "https://github.com/Nandhini6132/Jewelry--Shop",
    },
    {
      id: "task manager",
      image: img5,
      title: "Task Organizer Application",
      description:
        "I've successfully built a task organizer application, incorporating local storage to securely store user data. The implementation includes a robust CRUD (Create, Read, Update, Delete) functionality using JavaScript, showcasing my proficiency in web development and data management.",
      link: "https://nandhini6132.github.io/Task-Organizing-Application/",
      code: "https://github.com/Nandhini6132/Task-Organizing-Application",
    },
    {
      id:'Chat-app',
      image:chatapp,
      title:'Chat Application',
      description:"I developed a responsive chat app using React and Firebase, featuring real-time chat, scalability, user-friendliness, and seamless cross-device functionality. It showcases my expertise in frontend development and Firebase integration for modern, interactive web applications.",
      link:'https://nandhini6132.github.io/chat-app/',
      code:'https://github.com/Nandhini6132/chat-app'
    }
  ];

  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsProjectSectionVisible(true);
  };

  return (
    <div data-aos="fade-up" className="container">
      <Typography
        variant="h2"
        textAlign={"center"}
        className="gradient-bg mt-5 mb-5 project"
        letterSpacing={"12px"}
        fontSize={"6.75rem"}
        color={"#0aa3e2"}
      >
        Projects
      </Typography>

      <Box
        className="d-flex flex-wrap justify-content-center justify-content-lg-around "
        sx={{ gap: "35px" }}
      >
        {project?.map((pro, index) => (
          <Card
            sx={{
              width: "400px ",
              padding: "20px",
              marginBottom: "20px",
              background: "transparent",
              border: "none",
              borderRadius: "12px",
              "&:hover": {
                boxShadow: "1px 5px 13px 3px #a75e9e",
                border: "none",
                backgroundColor: "#060505",
                borderRadius: "20px",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={pro.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color={"white"}
                mt={3}
                component="div"
              >
                {pro.title}
              </Typography>
              <Typography variant="body2" color="grey">
                {pro.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                sx={{
                  padding: "10px",
                  borderRadius: "20px",
                  color: "white",
                  background: "#a75e9e;",
                  "&:hover": {
                    background: "#3b1e38",
                  },
                }}
              >
                {" "}
                <Link href={pro.link} color="inherit" underline="none">
                  Live Preview
                </Link>{" "}
              </Button>
              <Button
                size="small"
                variant="outlined"
                sx={{ padding: "10px", borderRadius: "20px", color: "white" }}
              >
                {" "}
                <Link href={pro.code} color="inherit" underline="none">
                  Check on GitHub
                </Link>{" "}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Projects2;
