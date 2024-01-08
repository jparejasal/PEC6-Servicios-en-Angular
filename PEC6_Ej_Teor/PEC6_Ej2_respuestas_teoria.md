a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?
• Con el decorador @Injectable, Angular crea una instancia única compartida del servicio y lo inyecta en cualquier clase que lo solicite. El registro del proveedor en los metadatos @Injectable() también permite a Angular optimizar una aplicación eliminando el servicio de la aplicación compilada si no se utiliza.
• Con @NgModule, la misma instancia de un servicio está disponible para todos los componentes en ese NgModule.


b. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn?
• root: el inyector a nivel de aplicación en la mayoría de las aplicaciones.
• plataform': un inyector de plataforma singleton especial compartido por todas las aplicaciones de la página.
• any: proporciona una instancia única en cada módulo cargado de forma diferida, mientras que todos los módulos cargados comparten una instancia.
