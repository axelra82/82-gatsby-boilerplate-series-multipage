import React, { useRef, useContext, useLayoutEffect } from 'react';
import Store from '../../context/store';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.scss';

export default () => {
  const { setFooterHeight } = useContext(Store);
  const footerRef = useRef(0);

  useLayoutEffect(() => {
    setFooterHeight(footerRef.current.clientHeight)
  }, [setFooterHeight]);

  return (
    <footer id="main-footer" ref={footerRef}>
      <Container className="text-white text-small pt-2 pb-1">
        <p>
          NO COPYRIGHT &copy; {new Date().getFullYear()} ACME CO, NO RIGHTS
          RESERVED.
        </p>
        <p>
          <a
            href="https://github.com/axelra82/82-gatsby-boilerplate-series-multipage"
            aria-label="Github Icon"
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
          Boilerplate created by{" "}
          <a href="https://82con.com">82 Consulting AB</a>
        </p>
      </Container>
    </footer>
  )
}
