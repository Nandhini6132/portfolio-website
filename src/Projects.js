import { Box, Typography } from "@mui/material";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Task Organizer Application",
      description:
        "Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, rerum! amet.",
    },
    {
      id: 2,
      title: "Task Organizer Application",
      description:
        "Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, rerum! amet.",
    },
    {
      id: 3,
      title: "Task Organizer Application",
      description:
        "Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, rerum! amet.",
    },
  ];

  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsProjectSectionVisible(true);
  };

  return (
    <>
      <Typography
        variant="h2"
        textAlign={"center"}
        className="gradient-bg mt-5 mb-5"
        letterSpacing={"12px"}
        fontSize={"6.75rem"}
        color={"#0aa3e2"}
      >
        Projects
      </Typography>

      <Box>
        {project?.map((pro, index) => (
          <Waypoint key={index} onEnter={handleWaypointEnter}>
            <Box
              sx={{
                border: "1px solid pink",
                position: "relative",
                overflow: "hidden", // Ensure the overlay is hidden when width is 0
              }}
              mb={4}
              p={5}
              className="project-box"
            >
            <Box className={{isProjectSectionVisible} ? "overlay" : ""}></Box>
              <Typography variant="h4" color={"#9a5f99"} fontWeight={500}>
                {pro.title}
              </Typography>
              <Typography
                variant="subtitle1"
                mt={2}
                color={"whitesmoke"}
                fontSize={22}
              >
                {pro.description}
              </Typography>
            </Box>
          </Waypoint>
        ))}
      </Box>
    </>
  );
};

export default Projects;
