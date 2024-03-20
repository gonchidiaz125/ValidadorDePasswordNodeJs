# Validación de Password (Back-end Node js)

## Objetivo del proyecto
El objetivo de este proyecto es demostrar algunos de mis conocimientos como desarrollador Node js.

Como ejemplo aquí propongo una WEB API para validar el cambio de una contraseña de un usuario, donde se validará que la nueva contraseña cumpla con varias reglas para asegurar de que sea una contraseña segura. 

Esta WEB API se consumirá desde otro de [mis ejemplos donde implementé la aplicación de Front-end para cambio de contraseña](https://gonzalodiaz-validadordepassword.netlify.app/index.html).

## Tecnologías utilizadas
- Node js, express
- Unit test con jest

## Descripción de la funcionalidad
La API expone un endpoint para validar la nueva contraseña elegida por el usuario, de manera que cumpla con los requisitos de:
- Longitud mínima
- Longitud máxima
- Contener al menos una mayúscula
- Contener al menos una minúscula
- Contener al menos un caracter numérico
- Contener al menos un caracter especial

Como respuesta, se notificará tanto el resultado general de la validación (todas las reglas cumplidas o no) y el detalle de validación de cada regla por separado (de forma que la aplicación de Front-end y el usuario final pueda saber que validaciones han sido cumplidas y cuales no)


## Instalación y ejecución
- Clonar el repositorio
- npm install
- npm start


## Unit tests
Se incluye una serie de *unit tests* para cubrir cada escenario posible de cada regla de validación.

Para ejecutar los test:
- npm test
