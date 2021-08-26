import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container className={styles.container}>
      <Head>
        <title>Timothy Charboneau</title>
        <meta name="description" content="Timothy Charboneau's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.card}>
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
            <a href="/projects" className={styles.projects}>
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
    </Container>
  );
}
