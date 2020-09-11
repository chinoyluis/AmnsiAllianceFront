import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

a {
 color: #2199df;
 text-decoration: unset;
}

ul {
 margin-left: 1.5rem;
 list-style: none;
}



h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
 margin-top: 1em;
 margin-bottom: 1em;
 font-family: 'Poppins', sans-serif;
}

/* general */

body {
    font-family: 'Poppins', sans-serif;
}


 `

export default GlobalStyles