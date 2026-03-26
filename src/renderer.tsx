import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="pt">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | MyPilates` : 'MyPilates – Studios em Carnaxide e Oeiras'}</title>
        <meta name="description" content={description || 'MyPilates – Studios de Pilates em Carnaxide e Oeiras. Aulas de Pilates para todos os níveis.'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}, {
  docType: true,
})
