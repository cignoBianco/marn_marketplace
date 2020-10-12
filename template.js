export default ({markup, css}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Marketa</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              } @font-face {
                font-family: 'Gilroy';
                font-style: normal;
                src: local('Gilroy-Light'), url('./../fonts/Gilroy-Light.otf') format('opentype');
               /* src: local('Gilroy-Bold'), url(./../fonts/Gilroy-Bold.otf) format('otf');*/
            }
            
            @font-face {
                font-family: 'Gilroy';
                font-weight: bold;
                src: local('Gilroy-ExtraBold'), url('./../fonts/Gilroy-ExtraBold.otf') format('opentype');
               /* src: local('Gilroy-Bold'), url(./../fonts/Gilroy-Bold.otf) format('otf');*/
            }
            
            * {
                font-family: 'Gilroy-light', 'Gilroy', 'Arial', monospace;
                color: #2C2738;
                margin: 0;
                padding: 0;
                transition: all 0.3s ease-out;
                list-style: none;
                text-decoration: none;
            }
            
            p {
                font-size: 12px;
            }
            
            body {
                margin: 0;
                padding: 0;
                
            }
            
            
          </style>
        </head>
        <body style="margin:0">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}
