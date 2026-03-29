# Práctica 4 - Web de boda con carrito de compra

## Descripción general

Esta práctica consiste en el desarrollo de una página web estática con HTML, CSS y JavaScript, inspirada en la organización de una boda. La web se ha planteado como una lista de regalos para la boda de una pareja, incluyendo una página principal visual, una lista de regalos, un carrito de compra y una página de checkout.

La temática elegida ha sido una boda, ya que permitía construir una web visualmente atractiva y al mismo tiempo incorporar de forma natural muchos de los elementos de HTML y CSS vistos en clase.

La web está compuesta por **4 páginas interconectadas**:

- `index.html` → página principal
- `gifts.html` → lista de regalos
- `cart.html` → carrito de compra
- `checkout.html` → formulario de pago

Además, el sitio ha sido preparado para que sea fácilmente modificable en el futuro, tanto para cambiar imágenes como para añadir nuevos regalos, cambiar estilos o actualizar información del evento.

---

## Elementos HTML incorporados

En esta práctica se han utilizado distintos elementos de HTML vistos en clase:

### 1. Títulos y texto
Se han empleado diferentes niveles de títulos como `h1`, `h2` y `h3` para estructurar la información de forma jerárquica, junto con párrafos `p` para describir las distintas secciones de la web.

### 2. Navegación entre páginas
Se ha creado una barra de navegación con enlaces `a` que conecta las 4 páginas entre sí, permitiendo una navegación clara e intuitiva.

### 3. Imágenes y contenido multimedia
Se han incorporado múltiples imágenes:
- imágenes de la línea temporal de la pareja
- imágenes de los productos en la lista de regalos
- imagen asociada a la aportación para la luna de miel

Esto permite cumplir con el requisito de incluir contenido multimedia dentro de la web.

### 4. Formularios web
Se han utilizado formularios `form` e inputs para dos funciones:
- introducir una cantidad personalizada para la aportación a la luna de miel
- simular el proceso de pago en la página de checkout

También se han utilizado etiquetas `label`, botones `button` y campos `input` de distintos tipos.

### 5. Tablas
En la página del carrito se ha utilizado una tabla HTML para mostrar de forma ordenada:
- nombre del producto
- precio
- cantidad
- subtotal
- opción de eliminar

### 6. Estructura semántica
La página se ha organizado utilizando etiquetas semánticas como:
- `header`
- `nav`
- `main`
- `section`
- `footer`

Esto mejora la claridad del código y hace que la estructura sea más correcta desde el punto de vista semántico.

---

## Elementos CSS incorporados

Para dar un estilo uniforme y personal a la web, se ha utilizado un archivo CSS externo común a todas las páginas.

### 1. Diseño visual unificado
Se ha mantenido una misma línea estética en toda la web:
- colores suaves y elegantes
- tipografías más decorativas para los títulos
- tarjetas visuales para regalos y contenido destacado
- aspecto limpio y organizado

### 2. Tipografías externas
Se han importado fuentes de Google Fonts para conseguir una estética más cuidada y con más personalidad que la tipografía por defecto del navegador.

### 3. Hover y transiciones
Se han añadido efectos `hover` en distintos elementos interactivos, por ejemplo:
- botones
- enlaces del menú
- tarjetas de regalos

De esta forma, cuando el usuario pasa el cursor por encima, los elementos cambian de color o elevación, mejorando la experiencia visual.

### 4. Bordes redondeados, sombras y cajas
Se han usado propiedades como:
- `border-radius`
- `box-shadow`
- `background`
- `padding`
- `margin`

para crear un diseño más agradable y moderno.

### 5. Distribución de contenido
Se han utilizado herramientas de maquetación como:
- `display: grid`
- `display: flex`

para organizar mejor los regalos, formularios, navegación y bloques de contenido.

### 6. Scroll en la lista de regalos
La lista de regalos incorpora una zona con scroll para poder mostrar varios productos sin que la página se haga excesivamente larga.

### 7. Diseño responsive básico
Se han utilizado medidas flexibles y algunas reglas adaptadas con `@media` para mejorar la visualización en pantallas más pequeñas.

---

## Funcionalidad con JavaScript

Aunque el foco principal de la práctica es HTML y CSS, también se ha incorporado JavaScript para añadir interactividad:

- contador regresivo hasta la fecha de la boda
- línea temporal de imágenes con flechas de navegación
- añadir productos al carrito
- guardar el carrito usando `localStorage`
- eliminar productos del carrito
- añadir una aportación personalizada para la luna de miel
- actualizar el total del carrito y del checkout

Esto permite simular el comportamiento de una pequeña tienda online de forma sencilla.

---

## Organización del proyecto

El proyecto está organizado en varios archivos para que sea más claro y fácil de mantener:

- `index.html`
- `gifts.html`
- `cart.html`
- `checkout.html`
- `styles.css`
- `script.js`
- carpeta `assets/` con las imágenes

Esta estructura facilita futuras modificaciones y hace que el código esté mejor separado por funciones.

---

## Despliegue

La web ha sido publicada usando **GitHub Pages**, cumpliendo el requisito de la práctica de estar disponible online mediante una URL pública asociada al repositorio.

---

## Conclusión

Con esta práctica se ha desarrollado una web de 4 páginas conectadas entre sí, utilizando correctamente elementos básicos de HTML y CSS vistos en clase, así como algunos elementos adicionales para mejorar el resultado final. Además de cumplir con los requisitos obligatorios, se ha intentado dar a la web un estilo visual cuidado, coherente y fácilmente ampliable en el futuro.