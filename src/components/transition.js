import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const TIMEOUT = 350
const EASING = "cubic-bezier(0.250, 0.100, 0.250, 1.000)"

const getTransitionStyles = {
  entering: {
    position: "absolute",
    transition: `${TIMEOUT}ms ${EASING}`,
    opacity: 0,
    transform: "translate3d(0, -3rem, 0)",
  },
  entered: {
    transition: `${TIMEOUT}ms ${EASING}`,
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
  },
  exiting: {
    transition: `${TIMEOUT}ms ${EASING}`,
    opacity: 0,
    transform: "translate3d(0, 3rem, 0)",
  },
}

export default ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {status => (
          <section
            current={location}
            style={{ ...getTransitionStyles[status] }}
          >
            {children}
          </section>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
