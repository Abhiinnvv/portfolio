import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recipe from "../../Assets/Projects/recipe.png";
import taxifare from "../../Assets/Projects/taxifare.png";
import webscrapper from "../../Assets/Projects/webscrapper.png";
import vidya from "../../Assets/Projects/vidya.png";
import portfolio from "../../Assets/Projects/portfolio.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "1px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscrapper}
              isBlog={false}
              title="webscrapper"
              description="A web-based project developed using HTML, CSS, and JavaScript to scrape product details from Flipkart. The scraper extracts product names, prices, and ratings and presents them in a structured format for easy comparison. This project demonstrates skills in web scraping, DOM manipulation, and dynamic content handling"
              ghLink="https://github.com/Abhiinnvv/web-scrapper"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidya}
              isBlog={false}
              title="vidya"
              description="Vidya – A full-stack online quiz platform where teachers can create quizzes and students can attempt them with real-time evaluation. Built with React, Tailwind CSS, Node.js, Express, and MongoDB."
              ghLink="https://github.com/Abhiinnvv/Vidya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Website"
              description="A dynamic and user-friendly website built using HTML, CSS, and Python, designed to help users easily explore and discover recipes. It features categorized recipe listings, detailed ingredient information, and step-by-step preparation guides. The platform offers a clean and responsive interface, making it convenient for users to search and browse recipes across multiple categories."
              ghLink="https://github.com/Abhiinnvv/Recipe-Website"
                      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxifare}
              isBlog={false}
              title="Taxi Fare Prediction"
              description="A machine learning project developed using Python, Pandas, NumPy, and Scikit-learn to predict taxi fares based on parameters like distance, time, and location. The system processes real-world datasets, applies feature engineering, and trains models to deliver accurate fare predictions. It aims to simplify transportation cost estimation, improve transparency."
              ghLink="https://github.com/Abhiinnvv/Taxi-Fare-Prediction-System"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="A responsive and visually appealing portfolio built using Next.js, Tailwind CSS, and JavaScript with smooth animations. It serves as a platform to showcase my projects, technical skills, achievements, and career interests. The website is designed with a clean UI, interactive sections, and responsive layout, making it easy for recruiters and collaborators to explore my work."
              ghLink="https://github.com/Abhiinnvv/portfolio"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
