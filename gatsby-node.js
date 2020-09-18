exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // PEOPLE PAGES
  const personTemplate = require.resolve(`./src/templates/person.js`)
  const person = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about-us/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (person.errors) {
    reporter.panicOnBuild(`Error while running GraphQL for people.`)
    return
  }
  person.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: personTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
