import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

export default () => {
  return (
    <>
      <SEO title="Home" />
      <Carousel />
      <Container>
        <h1>
          I don't criticize you! And if you're worried about criticism,
          sometimes a diet is the best defense.
        </h1>
        <p>
          Steve Holt! I hear the jury's still out on science. No! I was ashamed
          to be SEEN with you. I like being with you. He'll want to use your
          yacht, and I don't want this thing smelling like fish. Steve Holt!
        </p>
        <p>
          As you may or may not know, Lindsay and I have hit a bit of a rough
          patch. Really? Did nothing cancel? Did you enjoy your meal, Mom?{" "}
          <strong> You drank it fast enough.</strong>{" "}
          <em> I hear the jury's still out on science.</em> Not tricks, Michael,
          illusions.
        </p>
        <h2>Steve Holt!</h2>
        <p>
          Army had half a day. Guy's a pro. There's only one man I've ever
          called a coward, and that's Brian Doyle Murray. No, what I'm calling
          you is a television actor.
        </p>
        <p>
          I'm half machine. I'm a monster. I don't understand the question, and
          I won't respond to it. Did you enjoy your meal, Mom? You drank it fast
          enough. I'm afraid I just blue myself. I'm half machine. I'm a
          monster.
        </p>
        <p>
          Not tricks, Michael, illusions. Whoa, this guy's straight? What's
          Spanish for "I know you speak English?" I care deeply for nature. Not
          tricks, Michael, illusions.
        </p>
        <img
          src="/images/pages/index/coffee.jpg"
          alt="https://source.unsplash.com/random"
          align="left"
          style={{ maxWidth: "35vw", margin: "0 2rem 2rem 0" }}
        />
        <p>
          I don't understand the question, and I won't respond to it. Guy's a
          pro. We just call it a sausage. I don't criticize you! And if you're
          worried about criticism, sometimes a diet is the best defense.
        </p>
        <p>
          It's a hug, Michael. I'm hugging you. I don't criticize you! And if
          you're worried about criticism, sometimes a diet is the best defense.
          He'll want to use your yacht, and I don't want this thing smelling
          like fish.
        </p>
      </Container>
      <Container>
        <h3>I hear the jury's still out on science.</h3>
        <p>
          There's only one man I've ever called a coward, and that's Brian Doyle
          Murray. No, what I'm calling you is a television actor. Really? Did
          nothing cancel? That's why you always leave a note! There's so many
          poorly chosen words in that sentence.
        </p>
        <Row>
          <Col lg={6}>
            <ol>
              <li>Guy's a pro.</li>
              <li>No… but I'd like to be asked!</li>
            </ol>
          </Col>
          <Col lg={6}>
            <ul>
              <li>Across from where?</li>
              <li>
                It's called 'taking advantage.' It's what gets you ahead in
                life.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
