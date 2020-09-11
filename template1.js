
export default ({markup, css}) => {

    return `<!doctype tml>
      <html lang="en,ru">
        <head>
          <meta charset="utf-8">
          <title>Marketa</title>
          <base href="/">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              }
          </style>
          <link rel="stylesheet" href={styles}>
          
          <link rel="apple-touch-icon" sizes="57x57" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="60x60" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="72x72" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="76x76" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="114x114" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="120x120" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="144x144" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="152x152" href="images/favicon.png">
          <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.png">
          <link rel="icon" type="image/png" sizes="192x192" href="images/favicon.png">
          <link rel="icon" href="images/favicon.png">
          <link rel="mask-icon" href="images/favicon.png">
          <link rel="shortcut icon" href="images/favicon.png">

          <link rel="stylesheet" href={cssPath}>
        
        </head>
        <body style="margin:0">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>

          </body>
      </html>`
}
