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
import foodApp from "../src/images/food-app.png";
import chatapp from "../src/images/chat-app (3).png";
import movie from "../src/images/movie.png";
import movie2 from "../src/images/movie2.png";
import movie3 from "../src/images/movie3.png";
import movie4 from "../src/images/movie4.png";
import food2 from '../src/images/food2.png'
import food3 from '../src/images/food3.png'
import food4 from '../src/images/food5.png'
import nextgen2 from '../src/images/nextgen2.png'
import nextgen3 from '../src/images/nextgen3.png'
import cowork2 from '../src/images/cowork2.png'
import task2 from '../src/images/task2.png'
import chat2 from '../src/images/chat2.png'
import Link from "@mui/material/Link";
import Config from "./Config";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Projects2 = () => {
  const project = [
    {
      id: "movie-ticket-booking",
      image1: movie,
      image2:movie2,
      image3:movie3,
      image4:movie4,
      title: "Movie Ticket Booking App",
      description:
        "I developed a movie ticket booking application using HTML, CSS, JavaScript, Bootstrap, Material-UI, React, Redux Toolkit, and Firestore. The app allows users to browse and book movie tickets, leveraging Redux for state management and Firestore for real-time data storage, providing an efficient booking experience.",
      link: "https://movie-ticket-sable.vercel.app/",
      code: "https://github.com/Nandhini6132/movie-ticket",
    },
    {
      id: "receipe-finder",
      image1: foodApp,
      image2: food2,
      image3: food3,
      image4: food4,
      title: "Food Recepie finder app",
      description:
        " The Food Recipe Finder app, built with HTML, CSS, JavaScript, React, MUI, and Redux Toolkit, offers a user-friendly interface for searching, viewing, and saving recipes, ensuring a seamless and responsive cooking experience across various devices for culinary enthusiasts.",
      link: "https://nandhini6132.github.io/recipe-finder-app/",
      code: "https://github.com/Nandhini6132/recipe-finder-app",
    },
    {
      id: "next-gen",
      image1: img3,
      image2: nextgen2,
      image3: nextgen3,
      image4: nextgen2,
      title: "Next Generation Payment ",
      description:
        "I've fashioned a sleek template by harnessing HTML, CSS, and Bootstrap, ensuring a seamless and responsive user experience. This endeavor underscores my adeptness in front-end development and my commitment to delivering visually impressive web solutions.",
      link: "https://nandhini6132.github.io/NxtGen/",
      code: "https://github.com/Nandhini6132/NxtGen",
    },

    {
      id: "co-working",
      image1: img2,
      image2: cowork2,
      image3: img2,
      image4: cowork2,
      title: "CoWorking Office Template",
      description:
        "I've created a dynamic template using HTML, CSS, and Bootstrap, featuring a responsive design for optimal user interaction. This project highlights my proficiency in front-end development and dedication to crafting visually appealing and user-friendly web solutions for diverse clients.",
      link: "https://nandhini6132.github.io/coworking-template/",
      code: "https://github.com/Nandhini6132/coworking-template",
    },

    {
      id: "task manager",
      image1: img5,
      image2: task2,
      image3: img5,
      image4: task2,
      title: "Task Organizer Application",
      description:
        "I've successfully built a task organizer application, incorporating local storage to securely store user data. The implementation includes a robust CRUD (Create, Read, Update, Delete) functionality using JavaScript, showcasing my proficiency in web development and data management.",
      link: "https://nandhini6132.github.io/Task-Organizing-Application/",
      code: "https://github.com/Nandhini6132/Task-Organizing-Application",
    },
    {
      id: "Chat-app",
      image1: chatapp,
      image2: chat2,
      image3: chatapp,
      image4: chat2,
      title: "Chat Application",
      description:
        "I developed a responsive chat app using React and Firebase, featuring real-time chat, scalability, user-friendliness, and seamless cross-device functionality. It showcases my expertise in frontend development and Firebase integration for modern, interactive web applications.",
      link: "https://nandhini6132.github.io/chat-app/",
      code: "https://github.com/Nandhini6132/chat-app",
    },
  ];

  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsProjectSectionVisible(true);
  };

  return (
    <div data-aos="fade-up" className="container" id="projects">
      {/* <div className="stroke">PROJECTS</div> */}
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
              padding: "30px",
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
            {/* <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={pro.image}
            /> */}
            <Carousel fade controls={false} indicators={false}  interval={2000}>
              <Carousel.Item>
                <img src={pro.image1} alt={pro.title} width={'400px'} height={'240px'}/>
            
              </Carousel.Item>
              <Carousel.Item>
              <img src={pro.image2} alt={pro.title} width={'400px'} height={'240px'}/>
           
              </Carousel.Item>
              <Carousel.Item>
              <img src={pro.image3} alt={pro.title} width={'400px'} height={'240px'}/>
               
              </Carousel.Item>

              <Carousel.Item>
              <img src={pro?.image4} alt={pro.title} width={'400px'} height={'240px'}/>
               
              </Carousel.Item>
            </Carousel>
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
