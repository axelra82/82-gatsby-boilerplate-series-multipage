# 82 Boilerplate - Components

### Layout | layout.js

This is where the global layout is initiated. This is your "_react app.js entry point_".

### Transition | transition.js

A nice and smooth page transition (found in **layout.js**) leveraging [react-transition-group](https://github.com/reactjs/react-transition-group).

### Conditional Wrapper | conditionalWrapper.js

An ultra light and reusable wrapper component that takes a **boolean** `condition` for wrapping content.

### Logotype | logotype.js

SVG logotype allowing easy access to vectors using classes.

### SEO (React Helmet) | seo.js

**Per page usage**

```
import SEO from '../components/seo';
```

In return

```
<SEO title="Page Title" />
```

For more visit [gatsby-plugin-react-helmet](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet)
