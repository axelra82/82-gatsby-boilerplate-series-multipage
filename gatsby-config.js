module.exports = {
  siteMetadata: {
    siteUrl: `https://yourdomain.com`,
    url: `https://yourdomain.com`,
    title: `ACME CO`,
    titleTemplate: "%s · Tagline",
    description: `Nullam id dolor id nibh ultricies vehicula ut id elit.`,
    keywords: `fermentum, pharetra, dapibus, fusce, cras`,
    author: `Axel Roussille Åberg`,
    image: `/images/default-og-site-image.jpg`,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ACME CO`,
        short_name: `acme-co`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/favico.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `people`,
        path: `${__dirname}/src/pages/about-us/people`,
      },
    },
    /*
		// Optional plugin (not in dependencies)
		// https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies
		// Run npm i --save gatsby-plugin-gdpr-cookies
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: `UA-YOUR-TRACKING-ID`,
					// Setting this parameter is optional
					// default is gatsby-gdpr-google-analytics
					// cookieName: '[SITE-NAME]-gdpr-analytics',
				},
				// Defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production', 'development']
			},
		},
		*/
    /*
		this (optional) plugin enables Progressive Web App + Offline functionality
		To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		*/
  ],
}
