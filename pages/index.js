import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [projectView, setView] = useState(false);
  const [fadeClass, setClass] = useState(styles.card);
  return (
    <Container className={styles.container}>
      <Head>
        <title>Timothy Charboneau</title>
        <meta name="description" content="Timothy Charboneau's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!projectView ? (
        <Container className={fadeClass}>
          <Row>
            <Col className={styles.info}>
              <Col className={styles.name}>Timothy Charboneau</Col>
              <Col className={styles.title}>Full Stack Software Engineer</Col>
              <a
                href="https://github.com/charboneaut"
                className={styles.projects}
              >
                <Col className={styles.linkCont}>Visit my GitHub </Col>
                <Col className={styles.linkCont}>
                  <Image
                    src="/../public/arrow-left-circle.svg"
                    width="32px"
                    height="32px"
                    className={styles.arrow}
                  />
                </Col>
              </a>
              <a
                className={styles.projects}
                onClick={() => {
                  setClass(styles.fade);
                  setTimeout(() => {
                    setView(true);
                  }, 500);
                  setTimeout(() => {
                    setClass(styles.appear);
                  }, 450);
                }}
              >
                <Col className={styles.linkCont}>View my Projects</Col>
                <Col className={styles.linkCont}>
                  <Image
                    src="/../public/arrow-left-circle.svg"
                    width="32px"
                    height="32px"
                    className={styles.arrow}
                  />
                </Col>
              </a>
            </Col>
            <Col className={styles.border}></Col>
            <Col className={styles.info}>
              <Image
                src="/../public/me.jpg"
                alt="me"
                width="256px"
                height="256px"
                className={styles.pfp}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className={fadeClass}>
          <Row>
            <Col
              className={styles.projectsFlipped}
              as={"a"}
              href={"https://bonsai-one.vercel.app/"}
            >
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>
                  Bonsai
                  <Col className={styles.title}>Academic Group Project</Col>
                  <Col className={styles.title}>To-Do List App</Col>
                  <Col className={styles.title}>MERN Stack</Col>
                </Col>

                <Col>
                  <Image
                    src="/../public/bonsai.png"
                    alt="bonsai"
                    width="500vw"
                    height="250px"
                  />
                </Col>
              </Col>
              <Col>
                My group capstone project at Kenzie. This app keeps track of
                your tasks; it rewards progress and punishes neglect.
              </Col>
            </Col>
            <Col
              className={styles.projectsFlipped}
              as={"a"}
              href={"https://dice-inc.vercel.app/"}
            >
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>
                  Dice Inc.
                  <Col className={styles.title}>Personal Project</Col>
                  <Col className={styles.title}>HTML5 Game</Col>
                  <Col className={styles.title}>React</Col>
                </Col>
                <Col>
                  <Image
                    src="/../public/dice.png"
                    alt="dice"
                    width="500vw"
                    height="250px"
                  />
                </Col>
              </Col>
              <Col>
                My take on the "Cookie Clicker" style video game. Simple,
                straightforward & addictive.
              </Col>
            </Col>
          </Row>
          <Row>
            <Col
              as={"a"}
              href={"https://multable-mk2.vercel.app/"}
              className={styles.projectsFlipped}
            >
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>
                  MulTable 2<Col className={styles.title}>Personal Project</Col>
                  <Col className={styles.title}>Math Tool</Col>
                  <Col className={styles.title}>React</Col>
                </Col>

                <Col>
                  <Image
                    src="/../public/multable.png"
                    alt="multable"
                    width="500vw"
                    height="250px"
                  />
                </Col>
              </Col>
              <Col>
                A custom number mapping/graphing tool; it does more than
                multiplication.
              </Col>
            </Col>
            <Col
              className={styles.projectsFlipped}
              as={"a"}
              href={"https://github.com/charboneaut/big-canuck-bot"}
            >
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>
                  Canuck Bot
                  <Col className={styles.title}>Solo Project by Request</Col>
                  <Col className={styles.title}>Discord Bot</Col>
                  <Col className={styles.title}>Node</Col>
                </Col>

                <Col>
                  <Image
                    src="/../public/canuck.png"
                    alt="canuck"
                    width="500vw"
                    height="250px"
                  />
                </Col>
              </Col>
              <Col>
                A discord bot I made for the Code Lateral group discord server,
                among others. Mostly displays clerical information, but has a
                few tricks up its sleve.
              </Col>
            </Col>
          </Row>
          <Image
            onClick={() => {
              setClass(styles.fade);
              setTimeout(() => {
                setView(false);
              }, 500);
              setTimeout(() => {
                setClass(styles.appear);
              }, 450);
            }}
            src="/../public/arrow-left-circle.svg"
            width="64px"
            height="64px"
            className={styles.arrowFlip}
          />
        </Container>
      )}
    </Container>
  );
}
