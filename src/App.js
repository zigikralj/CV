import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid2, Link, Skeleton } from "@mui/material";
import { LinkedIn, LocationOn, MailOutline, Phone } from "@mui/icons-material";
import Bullets from "./Bullets";

function StyledLink(props) {
  return (
    <Link {...props} sx={{ color: "unset", textDecorationColor: "unset" }} />
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Nemanja Stanojevic
        </Typography>
        <Typography sx={{ mb: 2, fontSize: "2rem" }}>
          Software Engineer
        </Typography>
      </Box>
      <hr />
      <Grid2 container spacing={2} sx={{ p: 1 }}>
        <Grid2 container size={6} sx={{ alignItems: "end" }}>
          <Skeleton variant="rectangular" width={240} height={320} />
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ mb: 1, fontSize: "1.2rem" }}>Profile</Typography>
            <Typography>
              I am a results-driven Software Engineer with over 10 years of
              experience in designing and implementing various software
              solutions. I am proactive and always looking for ways to improve
              day to day job by making various tools, speeding up development
              and delivery, with no negative impact on quality.
            </Typography>
          </Box>
        </Grid2>
        <Grid2 sx={{ background: "#F1F1F1", borderRadius: 1, p: 1 }} size={6}>
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ mb: 1, fontSize: "1.2rem" }}>Contact</Typography>
            <Grid2 container spacing={1} sx={{ mb: 1, ml: 1 }}>
              <Phone />
              <StyledLink href="tel:+381641327858">
                <Typography>+381641327858</Typography>
              </StyledLink>
            </Grid2>
            <Grid2 container spacing={1} sx={{ mb: 1, ml: 1 }}>
              <MailOutline />
              <StyledLink href="mailto:nemanja.stanojevic.kv@gmail.com">
                <Typography>nemanja.stanojevic.kv@gmail.com</Typography>
              </StyledLink>
            </Grid2>
            <Grid2 container spacing={1} sx={{ mb: 1, ml: 1 }}>
              <LinkedIn />
              <StyledLink
                href="http://www.linkedin.com/in/nemanjastanojevic"
                target="_blank"
              >
                <Typography>nemanjastanojevic</Typography>
              </StyledLink>
            </Grid2>
            <Grid2 container spacing={1} sx={{ mb: 1, ml: 1 }}>
              <LocationOn />
              <StyledLink
                href="https://maps.app.goo.gl/5JZn2xggbXShB5LHA"
                target="_blank"
              >
                <Typography>Mokranjčeva 10, Žiča 36221</Typography>
              </StyledLink>
            </Grid2>
          </Box>
          <hr />
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ mb: 1, fontSize: "1.2rem" }}>Skills</Typography>
            <Typography sx={{ ml: 1 }}>
              C/C++, Firebase, Java, Javascript, Linux, React, SQL
            </Typography>
          </Box>
          <hr />
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ mb: 1, fontSize: "1.2rem" }}>
              Education
            </Typography>
            <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
              2009-Present
            </Typography>
            <Typography sx={{ ml: 1, mb: 1 }}>
              BSc in Computer Science and Software Engineering, University of
              Kragujevac
            </Typography>
            <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
              2005-2009
            </Typography>
            <Typography sx={{ ml: 1 }}>
              Mathematical Gymnasium, Kraljevo
            </Typography>
          </Box>
          <hr />
          <Box sx={{ mb: 1 }}>
            <Typography sx={{ mb: 1, fontSize: "1.2rem" }}>
              Languages
            </Typography>
            <Typography sx={{ ml: 1 }}>Serbian - Native</Typography>
            <Typography sx={{ ml: 1 }}>English - Professional</Typography>
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Grid2 sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1, mt: 5, fontSize: "1.4rem" }}>
              Experience
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Senior Lead Engineer, Technical Lead
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  2024 - Present (9+ mos)
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  Comtrade 360 (HPE), Kragujevac
                </Typography>
              </Box>
              <Typography sx={{ mb: 1 }}>
                I was part of HPE CASPER (Customer Solutions Pricing And
                Configuration) project, which is the overall name of the project
                which support 3 web applications (Complete Care, Custom Solution
                Pricing and Evolve) used for quotation of Services sold by HPE.
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography>Responsibilities:</Typography>
                <Bullets>
                  <Typography>
                    Lead the Complete Care project development.
                  </Typography>
                  <Typography> Speed up delivery of stories</Typography>
                  <Typography>
                    Develop tool for adding new data in DB
                  </Typography>
                  <Typography> Improve UX of the Evolve project </Typography>
                </Bullets>
              </Box>
              <Typography>
                Technologies: Java, MicrosoftSQL, JSF, ReactJS
              </Typography>
            </Box>
            <hr />
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Senior Lead Engineer, Team Lead, Technical Lead
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  2021 - 2024 (2 yrs 2 mos)
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  Comtrade 360 (HPE), Kragujevac
                </Typography>
              </Box>
              <Typography sx={{ mb: 1 }}>
                I was part of HPE Insight Remote Support project, is a software
                solution that enables reactive and proactive remote support to
                improve the availability of supported servers, storage and
                networking, and it also enables enhanced delivery of warranty or
                support services contract. After just few months on the project
                I made a proposal and demo to rewrite the JSP UI of app into
                React, which got a green light from HPE, and from that moment on
                I was basically owner of that project.
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography>Responsibilities:</Typography>
                <Bullets>
                  <Typography>
                    Collaborate with product managers, and other stakeholders to
                    define project requirements and scope.
                  </Typography>
                  <Typography>
                    Design the architectural structure of the Administrator UI,
                    considering scalability, maintainability, and extensibility.
                  </Typography>
                  <Typography>
                    Develop the front-end of the administration UI application
                    using ReactJS and Material UI.
                  </Typography>
                  <Typography>
                    Refactoring the back-end to support the RESTful API, and
                    whole different approach for session.
                  </Typography>
                  <Typography>
                    Integrate with APIs and back-end services from other
                    projects to execute jobs and display relevant data to
                    administrators.
                  </Typography>
                  <Typography>
                    Optimization and perfomance improvement of the app (for
                    example number of requests reduced from ~100 to ~10 per
                    page, introduced client side caching, installer size reduced
                    from ~1.5GB to ~512MB).
                  </Typography>
                  <Typography>
                    Lead a team of developers(4-5), create and associate
                    stories, sizing the sprints, provide technical guidance and
                    support, create their personal goals and guide their
                    personal development.
                  </Typography>
                </Bullets>
              </Box>
              <Typography>
                Technologies: ReactJS, Java, PostgreSQL, Jetty
              </Typography>
            </Box>
            <hr />
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Senior Software Engineer
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  2019 - 2021 (1 yrs 2 mos)
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  Credeo GmbH, Remote
                </Typography>
              </Box>
              <Typography sx={{ mb: 1 }}>
                I was Fullstack Engineer in a smaller scale company. Worked on
                several projects which all used Firebase cloud computing
                services (and Google Cloud Platform as needed) on the backend
                side (NodeJs), and ReactJS with Material UI on the frontend
                side.
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography>Responsibilities:</Typography>
                <Bullets>
                  <Typography>
                    Collaborate with cross-functional teams to understand
                    project requirements and design application architectures.
                  </Typography>
                  <Typography>
                    Determine the best approach for integrating Firebase and
                    Google Cloud services within the application.
                  </Typography>
                  <Typography>
                    Develop tool for adding new data in DB
                  </Typography>
                  <Typography>
                    Design data models, database structures, and API endpoints
                    to ensure efficient data management.
                  </Typography>
                  <Typography>Back-end development</Typography>
                  <Typography level={2}>
                    Build server-side logic using Node.js, implementing RESTful
                    or GraphQL APIs for data interaction.
                  </Typography>
                  <Typography level={2}>
                    Handle authentication, authorization, and user management
                    features securely.
                  </Typography>
                  <Typography level={2}>
                    Integrate third-party services and libraries as needed to
                    extend application functionality.
                  </Typography>
                  <Typography>Database management</Typography>
                  <Typography level={2}>
                    Design and manage databases, choosing between Firestore,
                    Firebase Realtime Database, or Google Cloud databases
                    depending on project requirements.
                  </Typography>
                  <Typography level={2}>
                    Implement data security, validation, and indexing strategies
                    for efficient data retrieval.
                  </Typography>
                  <Typography>DevOps and Deployment:</Typography>
                  <Typography level={2}>
                    Set up continuous integration/continuous deployment (CI/CD)
                    pipelines for automated testing and deployment.
                  </Typography>
                  <Typography level={2}>
                    Manage version control, deployment environments, and
                    infrastructure as code (IaC) for consistent deployments.
                  </Typography>
                  <Typography>Front-End Development:</Typography>
                  <Typography level={2}>
                    Develop and maintain user interfaces using React, ensuring a
                    responsive and intuitive user experience.
                  </Typography>
                  <Typography level={2}>
                    Create reusable components, manage application state, and
                    implement client-side routing.
                  </Typography>
                  <Typography level={2}>
                    Optimize the front-end for performance and usability while
                    adhering to best practices in web development.
                  </Typography>
                </Bullets>
              </Box>
              <Typography>
                Technologies: Firebase, ReactJS, NodeJS, GraphQL
              </Typography>
            </Box>
            <hr />
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Software Engineer
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  2016 - 2019 (3 yrs 9 mos)
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  Logispin, Kragujevac
                </Typography>
              </Box>
              <Typography sx={{ mb: 1 }}>
                I was part of the team working on game engine for Online Casino
                Games such as slot machines, card games, roulette and similar.
                The game engine forms the core framework that powers these
                games, handling game logic, user interactions, and ensuring
                great user experience and was highly optimized so it could run
                on very low end devices. Also, later on, I was part of the UI
                team working on React apps such as live score, registrations and
                administration applications.
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography>Responsibilities:</Typography>
                <Bullets>
                  <Typography>
                    Collaborated with the game design and backend team to turn
                    game concepts and designs into functional software.
                  </Typography>
                  <Typography>
                    Wrote the code for the development of various casino games,
                    ensuring smooth gameplay and adherence to industry
                    regulations.
                  </Typography>
                  <Typography>
                    Implement engaging features, animations, and sound effects
                    to enhance player experience.
                  </Typography>
                  <Typography>
                    Focus on optimizing game performance to provide a seamless
                    and responsive gaming environment.
                  </Typography>
                  <Typography>
                    Invented various ways to improve the delivery speed and to
                    ease development of the games.
                  </Typography>
                </Bullets>
              </Box>
              <Typography>
                Technologies: JavaScript, ReactJS, Google closure
              </Typography>
            </Box>
            <hr />
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Software Developer, Team Lead
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  2013 - 2015 (2 yrs 3 mos)
                </Typography>
                <Typography sx={{ ml: 1, color: "grey", fontSize: "0.8rem" }}>
                  Comtrade SE, Kragujevac
                </Typography>
              </Box>
              <Typography sx={{ mb: 1 }}>
                I was part of "HP Operations Manager for Unix" project which is
                aimed to develop and maintain a comprehensive monitoring and
                management solution for IT infrastructure and applications. This
                software was crucial for ensuring the reliability, availability,
                and performance of critical systems within an organizations like
                US Military, Apple, T-mobile, and others.
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography>Responsibilities:</Typography>
                <Bullets>
                  <Typography>
                    As an intern, I have actively participated in the software
                    development process.
                  </Typography>
                  <Typography>As a Software Developer:</Typography>
                  <Typography level={2}>
                    Contributed to the design and architecture of the project,
                    ensuring that it met the performance and functionality
                    requirements.
                  </Typography>
                  <Typography level={2}>
                    Developed and maintained code components and modules, often
                    working on critical and complex features.
                  </Typography>
                  <Typography>As a Team Lead:</Typography>
                  <Typography level={2}>
                    Worked mostly on Level 3 Support cases.
                  </Typography>
                  <Typography level={2}>
                    Conducted code reviews and provided feedback to team members
                    to maintain code quality and best practices.
                  </Typography>
                  <Typography level={2}>
                    Collaborated with quality assurance (QA) teams to identify
                    and resolve software defects and ensure the product's
                    reliability.
                  </Typography>
                </Bullets>
              </Box>
              <Typography>
                Technologies: Java, Apache Cocoon, JavaScript, PostgreSQL, C,
                JNI, Jetty, Tomcat
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}
