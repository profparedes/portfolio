import { createGlobalStyle } from 'styled-components'

import Config from 'Config'

const GlobalStyles = createGlobalStyle`
    :root {
        --accent-color: ${Config.app.accentColor};
        --black-1: #111;
        --black-2: #222;
        --black-3: #333;
        --black-10: #aaa;
        --font-size-1: 1.8rem;
        --font-size-2: 2.2rem;
        --font-size-3: 2.8rem;
        --font-size-4: 3.6rem;
        --font-size-5: 4.8rem;
        --font-size-6: 6rem;
        --font-size-7: 7rem;
        --font-size-8: 10rem;
        --spacing-1: 0.75rem;
        --spacing-2: 1.5rem;
        --spacing-3: 3rem;
        --spacing-4: 4.5rem;
        --spacing-5: 6rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: var(--black-3);
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: var(--font-size-2);
    }

    a, button {
        color: inherit;
        cursor: pointer;
        transition: 
            background-color 0.2s ease-in-out, 
            color 0.2s ease-in-out; 
    }

    a:hover, a:focus, a:active {
        color: white;
    }

    .img-fluid {
        display: block;
        width: 100%;
        height: auto;
    }

    .text-decoration-none { text-decoration: none }
    
    .font-size-1 { font-size: var(--font-size-1) }
    .font-size-2 { font-size: var(--font-size-2) }
    .font-size-3 { font-size: var(--font-size-3) }
    .font-size-4 { font-size: var(--font-size-4) }
    .font-size-5 { font-size: var(--font-size-5) }

    .regular { font-weight: 400 }
    .bold { font-weight: 700 }
    .bolder { font-weight: 900 }

    .color-black-10 { color: var(--black-10) }
    .color-accent { color: var(--accent-color) }
`

export default GlobalStyles
