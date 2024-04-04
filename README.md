# Aplicación Móvil Inmobiliaria Flores M

La aplicación movil de InmobiliariaFloresM es el frontend para nuestro sistema de gestión inmobiliaria, diseñado para ofrecer a los usuarios una experiencia fluida y completa al buscar y visualizar inmuebles. Además, proporciona una interfaz de administración para empleados y administradores, permitiendo la gestión de inmuebles y usuarios.

## Funcionalidades Principales

- **Búsqueda de Inmuebles**: Los usuarios pueden buscar inmuebles utilizando diversos filtros para encontrar aquellos que se ajusten a sus necesidades.
- **Vista de Detalles de Inmuebles**: Presentación detallada de cada inmueble, incluyendo mapa con direcciones, descripciones, características, y más.
- **Módulo de Empleado**: Permite a los empleados gestionar inmuebles, ver listados, editar detalles, y más.
- **Módulo de Administrador**: Además de las capacidades del empleado, permite la gestión de usuarios, incluyendo la creación, edición e inactivación de cuentas.
  
## Tecnologías Utilizadas

Esta aplicación está construida usando las siguientes tecnologías principales:

- [Ionic Framework](https://ionicframework.com/): Para el desarrollo de la interfaz de usuario y la experiencia de usuario móvil.
- [Angular](https://angular.io/): Para la gestión del frontend y la lógica de la aplicación.
- [Capacitor](https://capacitorjs.com/): Para integrar funcionalidades nativas del dispositivo móvil.

## Dependencias

- Angular y Ionic para el desarrollo de la interfaz y lógica de aplicación.
- Capacitor para funcionalidades nativas como cámara, geolocalización, entre otros.
- Mapbox GL para la visualización de mapas y ubicaciones de los inmuebles.
- SweetAlert2 para alertas y confirmaciones en la interfaz de usuario.
- Chart.js para gráficos y estadísticas relacionadas a las propiedades.

## Instalación

Para correr esta aplicación en tu entorno local, sigue estos pasos:

1. Clona el repositorio a tu máquina local.
2. Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Ionic CLI](https://ionicframework.com/docs/cli).
3. Navega a la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
4. Para iniciar la aplicación, ejecuta `ionic serve`.
5. Abre tu navegador en `http://localhost:8100/` para ver la aplicación.
6. Para la versión desplegada, abre a carpeta apk que esta ubicada (https://github.com/sorvylenny/InmobiliariaMovilApp/tree/master/apk).

## Construcción y Despliegue

Para construir la aplicación para producción, ejecuta `ionic build --prod`. Para desplegar la aplicación en dispositivos o emuladores, sigue la [documentación oficial de Ionic](https://ionicframework.com/docs/deployment/play-store) para Android y [App Store](https://ionicframework.com/docs/deployment/app-store) para iOS.

## Autor

Desarrollado por Katherine Flores. Para más información o sugerencias, puedes contactarme en <floresmKatherine@gmail.com>.
