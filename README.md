# brasa · Hamburguesas a la brasa

Demo de sitio web para un restaurante de hamburguesas. **brasa** es una marca ficticia
de demostración, con una estética cálida y editorial inspirada en sitios gastronómicos
modernos (fondo crema, acentos verde oliva y lima, tarjetas de producto con foto).

## Características

- **Hero con carrusel** — foto grande redondeada, flechas de navegación y titular editorial.
- **Menú con pestañas** — Hamburguesas / Pollo / Acompañamientos, con tarjetas de producto,
  etiqueta "Popular", precios en bolivianos y descripciones.
- **Pedido por WhatsApp** — el formulario arma el pedido (ítems, entrega, dirección) y abre
  WhatsApp listo para enviar. Sin backend.
- **Secciones completas** — historia/calidad, combo destacado, locales y contacto.
- **Interacciones** — nav adhesivo, menú móvil, carrusel, pestañas, animaciones de scroll.
- **Responsive** y con soporte para `prefers-reduced-motion`. Sin dependencias (solo Google Fonts).

## Estructura

```
burger-demo/
├── index.html          # Marcado semántico de una sola página
├── css/
│   └── styles.css       # Sistema de diseño cálido + layout
├── js/
│   └── main.js          # Nav, carrusel, pestañas, WhatsApp, reveal
├── assets/              # (reservado para imágenes propias)
└── README.md
```

## Configuración

- **Número de WhatsApp:** editá la constante `WHATSAPP_NUMBER` en
  [`js/main.js`](js/main.js) — formato internacional solo dígitos (ej. `59170000000`).
- **Imágenes:** cargan desde Unsplash como marcadores. Para producción, reemplazá por
  fotos reales de los productos en `assets/`.
- **Contenido** (marca, precios, dirección, teléfono) es de demostración.

## Uso

Abrí `index.html` en el navegador, o serví la carpeta:

```bash
npx serve burger-demo
```
