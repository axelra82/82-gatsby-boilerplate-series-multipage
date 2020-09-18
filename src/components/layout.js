import React, { useState, useLayoutEffect } from 'react';
import { Container } from 'react-bootstrap';
import Store from '../context/store';
import Transition from '../components/transition';
import Header from '../components/header/';
import Footer from '../components/footer/';

export default ({ children, location }) => {
  const [footerHeight, setFooterHeight] = useState(0)
  // Default store
  const [state, setState] = useState({
    setFooterHeight: setFooterHeight,
  })

  useLayoutEffect(() => {
    setState(state => ({
      ...state,
      path: location.pathname,
    }))
  }, [location])

  return (
    <Store.Provider value={state}>
      <main id="site-container" style={{ paddingBottom: footerHeight }}>
        <Header />
        <Transition location={location.pathname}>
          <section id="main-content-container">{children}</section>
        </Transition>
        <section className="bg-smoke">
          <Container>
            <h4>Is all of this a little confusing?</h4>
            <p>
              Dont' worry, you're not losing your mind. The filler texts on this
              page are from{" "}
              <a
                href="http://fillerama.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                fillerama.io
              </a>
              . So if you recognize some of it, that might be why (it's just
              random dialog from tv-shows), and if you thought that you were
              slowly going insane (while trying to make sense of the content),
              you're in the clear{" "}
              <span role="img" aria-label="wink emoji">
                😉
              </span>
            </p>
          </Container>
        </section>
        <Footer />
      </main>
    </Store.Provider>
  )
}
