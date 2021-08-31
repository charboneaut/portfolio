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
            <Col className={styles.projects}>
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>This the first project</Col>
                <Col>This where a picture would be</Col>
              </Col>
              <Col>And then a blurb about it</Col>
            </Col>
            <Col className={styles.projects}>
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>This the second project</Col>
                <Col>This where a picture would be</Col>
              </Col>
              <Col>And then a blurb about it</Col>
            </Col>
          </Row>
          <Row>
            <Col className={styles.projects}>
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>This the third project</Col>
                <Col>This where a picture would be</Col>
              </Col>
              <Col>And then a blurb about it</Col>
            </Col>
            <Col className={styles.projects}>
              <Col className={styles.preview}>
                <Col className={styles.proTitle}>This the fourth project</Col>
                <Col>This where a picture would be</Col>
              </Col>
              <Col>And then a blurb about it</Col>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}
