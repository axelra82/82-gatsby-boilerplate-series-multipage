import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

export default () => {
  return (
    <>
      <SEO title="Contact" />
      <Container>
        <h1>It's toe-tappingly tragic!</h1>
        <p>
          Well, let's just dump it in the sewer and say we delivered it. In our
          darkest hour, we can stand erect, with proud upthrust bosoms. No! The
          cat shelter's on to me. Michelle, I don't regret this, but I both rue
          and lament it.
        </p>
        <p>
          I videotape every customer that comes in here, so that I may blackmail
          them later. Can I use the gun? When I was first asked to make a film
          about my nephew, Hubert Farnsworth, I thought "Why should I?{" "}
          <strong>" Then later, Leela made the film.</strong>{" "}
          <em>
            {" "}
            But if I did make it, you can bet there would have been more topless
            women on motorcycles.
          </em>{" "}
          Roll film!
        </p>
        <h2>
          Bender, this is Fry's decision… and he made it wrong. So it's time for
          us to interfere in his life.
        </h2>
        <p>
          Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet
          drapes, lined with what would appear to be some sort of cruel muslin
          and the cute little pom-pom curtain pull cords. Cruel though they may
          be… That's a popular name today. Little "e", big "B"?
        </p>
      </Container>
      <Container>
        <Row>
          <Col lg={5}>
            <h3>
              I could if you hadn't turned on the light and shut off my stereo.
            </h3>
            <p>
              With a warning label this big, you know they gotta be fun! Then
              we'll go with that data file! Maybe I love you so much I love you
              no matter who you are pretending to be. Bender! Ship! Stop
              bickering or I'm going to come back there and change your opinions
              manually!
            </p>
            <p>
              Ah, computer dating. It's like pimping, but you rarely have to use
              the phrase "upside your head." Good man. Nixon's pro-war and
              pro-family. I love this planet! I've got wealth, fame, and access
              to the depths of sleaze that those things bring.
            </p>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}
