import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html{
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
}

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.textColor};
  background-color: ${p => p.theme.colors.body};
  scrollbar-gutter: stable;

&.js-isMobileMenuOpen {
  position: fixed;
  width: 100%;
}

&.js-modal-open {
  overflow-y: hidden;
}
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
