# Taberna El Algarrobo

Landing local de HTML5, CSS3 y JavaScript vanilla. Sin frameworks, compilación, dependencias de ejecución ni despliegues.

## Abrir

Abre `index.html` con Live Server en VS Code. También funciona directamente como archivo; en ese caso el navegador puede impedir el acceso al portapapeles y se muestra un campo seleccionable para copiar el número. Todas las rutas son relativas. La fuente y la fotografía se sirven desde el proyecto, sin solicitudes a terceros al cargar la página.

## Dirección de arte

«La taberna impresa»: cartel central serif, filetes, índice con numeración romana, sello tipográfico, hoja de consultas, dirección compuesta como señalética y cartel de teléfono en tinta teja. Papel cálido #EFE4CD y tinta #242620 como base, oliva #48533A y teja #9E4D38 como acentos, blanco roto #FAF7F0 para la hoja. Fuente variable Fraunces y sans del sistema.

La composición móvil cambia el orden de la fotografía, la dirección y las acciones. El índice es desplegable con JavaScript; sin él conserva todos sus enlaces visibles. Escape cierra el índice y devuelve el foco. El contenido nunca depende de animaciones para aparecer. Se respeta `prefers-reduced-motion`.

## Investigación y límites de contenido

Consulta: 27 de octubre de 2026.

Datos facilitados por el encargo: Taberna El Algarrobo; Plaza de la Constitución, 3, 11670 El Bosque, Cádiz; 644 926 757.

Fuentes públicas consultadas:

- https://rutaculinaria.com/restaurante-en-el-bosque-taberna-el-algarrobo-47839/
- https://es.restaurantguru.com/amp/La-Taberna-El-Bosque-Andalusia

Ambas identifican la actividad de taberna/bar-restaurante y corroboran dirección y teléfono. Se usa `BarOrPub` en JSON-LD. Son directorios, no canales oficiales: los horarios difieren (incluido el día de cierre). No se publican horarios. No se ha localizado una carta oficial actual ni redes inequívocamente oficiales. Las reseñas y sugerencias automáticas de los directorios no se utilizan para construir una carta. No se publican platos, precios, reservas, terraza, WhatsApp, reparto, premios ni historia. La sección de cocina se sustituye por consultas prácticas por teléfono.

## Fotografía, procedencia y licencia

Única fotografía: `img/mesa-editorial.jpg`.

- Autor: Jep Gambardella.
- Página original: https://www.pexels.com/photo/a-wine-glass-and-ceramic-plates-on-a-wooden-table-5083898/
- Descarga: https://images.pexels.com/photos/5083898/pexels-photo-5083898.jpeg?auto=compress&cs=tinysrgb&w=1600&q=85
- Licencia comprobada: https://www.pexels.com/license/
- Pexels permite uso comercial y modificaciones. No se presupone respaldo del fotógrafo o del local de la fotografía.
- Imagen ilustrativa ajena al establecimiento y su carta, identificada en el pie, texto alternativo y créditos. No es fotografía real de El Algarrobo.
- Archivo JPEG auténtico; decodificado con System.Drawing: 1600 × 1067 píxeles, aproximadamente 188 KiB. Optimizado por el CDN de Pexels; recorte visual con object-fit, sin cambiar la extensión ni repetir el archivo en otras secciones.
- Inspección visual realizada; sin marca de agua. Ruta local verificada en navegador y sin errores HTTP. No se encontró esta referencia en los HTML/README de los otros proyectos del espacio de trabajo.

Tipografía Fraunces: https://github.com/google/fonts/tree/main/ofl/fraunces . Archivo original variable alojado localmente. Licencia SIL Open Font License 1.1 incluida en `css/fonts/OFL-Fraunces.txt`. Favicon SVG creado para el proyecto.

## Validación ejecutada

Chrome headless mediante Playwright ya disponible en el equipo, sobre servidor HTTP local temporal. Capturas y registro en `qa/` (artefactos locales ignorados, no necesarios para servir la web).

- 375, 768, 1440 y 1920 px: imágenes decodificadas, nombre completo y ausencia de desbordamiento horizontal.
- Menú móvil: apertura, cierre con Escape, retorno del foco y cierre al elegir destino.
- Copia real al portapapeles y alternativa con el API deshabilitado.
- Anclas internas existentes, enlaces tel con el número correcto y URL de Google Maps con dirección completa.
- Sin errores JavaScript ni respuestas HTTP fallidas de los recursos locales.
- Sin JavaScript: navegación visible y contenido accesible; se oculta la acción de copia que necesita JavaScript.
- Preferencia de movimiento reducido: animación deshabilitada.
- Revisión visual de la página completa en móvil y escritorio; comparación visual de portadas con Bar Majaceite y Venta Mateo, sin modificar ninguno de esos proyectos. El diseño utiliza jerarquía serif centrada, fotografía secundaria y módulos propios, sin reutilizar sus portadas.

No se ha realizado una llamada telefónica ni se ha verificado un trayecto real de Google Maps. No se afirma una auditoría con lector de pantalla. Open Graph incluye imagen relativa para desarrollo local; al publicar en un dominio habrá que convertir `og:image` a URL absoluta y añadir la URL canónica definitiva. No se inventa un dominio para este proyecto.

## Archivos

- `index.html`: contenido, SEO local, Open Graph y datos estructurados.
- `css/style.css`: diseño, responsive y movimiento reducido.
- `css/fonts/`: fuente local y licencia.
- `js/script.js`: índice móvil, portapapeles, año y animación de filete.
- `img/`: fotografía optimizada.
- `favicon.svg`, `.gitignore`, `README.md`.
