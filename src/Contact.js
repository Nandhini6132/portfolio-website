import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

const Contact = () => {
  // const handleSubmit=async(e)=>{
  //   e.preventDefault()
  //  await e.target.reset()
  // }


  return (
    <>
      <div className="container pt-5" id="contact">
        <div>
          <Typography
            variant="h2"
            textAlign={"center"}
            className="gradient-bg mt-5 mb-5 project"
            letterSpacing={"12px"}
            fontSize={"6.75rem"}
            color={"#0aa3e2"}
          >
            Contact Me
          </Typography>

          <Box display={"flex"} justifyContent={"center"}>
            <form
              action="https://formspree.io/f/xqkrlqdw"
              method="POST"
              style={{ width: "45%" }}
              
            >
              <div class="mb-5">
                <label for="name" class="form-label" style={{ color: "white" }}>
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  style={{
                    backgroundColor: "transparent",
                    height: "4rem",
                    color: "white",
                    border: "1px solid #509ead",
                  }}
                />
              </div>
              <div class="mb-5">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  style={{ color: "white" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="name@example.com"
                  style={{
                    backgroundColor: "transparent",
                    height: "4rem",
                    color: "white",
                    border: "1px solid #509ead",
                  }}
                />
              </div>
              <div class="mb-5">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  style={{ color: "white" }}
                >
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  style={{
                    backgroundColor: "transparent",
                    height: "10rem",
                    color: "white",
                    border: "1px solid #509ead",
                  }}
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button className="btn btn-lg mb-5 btn-outline-info">
                Submit
              </button>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Contact;
