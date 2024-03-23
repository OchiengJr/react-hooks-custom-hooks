:root {
  --bg-color: #282c34;
  --header-color: #fff;
  --link-color: #61dafb;
  --text-color: hsla(0, 0%, 100%, 0.88);
}

body {
  margin: 0;
  font-family: "Merriweather", "Georgia", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-color);
  color: var(--text-color);
}

h1, h3 {
  font-size: 2em;
  font-family: Montserrat, sans-serif;
  font-weight: 900;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

/* Main App Container */
.App {
  margin: 0 auto;
  padding: 2.5rem 1rem;
  max-width: 700px;
}

/* Header Styles */
header h1 {
  font-size: 3em;
}

/* Sidebar Styles */
aside {
  display: flex;
  margin-bottom: 3rem;
}

aside img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: black;
}

/* Article Styles */
article {
  margin-bottom: 3rem;
}

article p {
  margin-top: 0.25rem;
}

article a, article h3 {
  color: var(--link-color);
  margin-bottom: 0;
}
