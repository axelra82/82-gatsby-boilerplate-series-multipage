/* –––––––––––––––––––––––––––––––––––
Implement Gatsby's Browser APIs in this file.
See: https://www.gatsbyjs.org/docs/browser-apis/
––––––––––––––––––––––––––––––––––– */
require("./src/style/style.scss");
require("typeface-roboto-mono");

const transitionDelay = 350

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}
