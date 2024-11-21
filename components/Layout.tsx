import type { FC, ReactNode  } from 'hono/jsx'
import { html } from 'hono/html';
import type { HtmlEscapedString } from "hono/utils/html";

interface LayoutProps {
    children: Promise<HtmlEscapedString> | ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Garden</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet">
        <link rel="icon" href="./assets/favicon.svg" />
        <style>
            :root {
                font-family: "Hanken Grotesk", sans-serif;
                background-color: #004c21;
            }
            body {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }
            .test {
                border: 2px dashed white;
            }
            .main-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
        </style>
        <script src="https://cdn.twind.style"></script>
      </head>
      <body class="">
         ${props.children}
      </body>
    </html>
    `
  )
}

export default Layout;
