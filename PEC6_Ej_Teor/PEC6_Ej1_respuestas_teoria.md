a. ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
• Componentes: es un tipo de clase que puede usar DI (Injección de dependencias). Idealmente, el trabajo de un componente es permitir la experiencia del usuario y nada más, sin embargo, puede delegar ciertas tareas a servicios, como recuperar datos del servidor, validar la entrada del usuario o iniciar sesión directamente en la consola.
• Servicio: es una categoría amplia que abarca cualquier valor, función o característica que necesita una aplicación; suele ser una clase con un propósito limitado y bien definido.


b. ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?
• Inyección de dependencias (DI): es un patrón de diseño y mecanismo para crear y entregar algunas partes de una aplicación a otras que las requieren; se utiliza para aumentar la flexibilidad y la modularidad. DI está conectado al marco Angular y permite que las clases con decoradores Angular como: Componentes, Directivas, Tuberías e Inyectables; configuren las dependencias que necesitan.
• @Injectable: decorador que marca una clase como disponible para ser proporcionada e inyectada como dependencia.


c. Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:
• Observable: representa la idea de una colección invocable de valores o eventos futuros.
• Subscription: representa la ejecución de un Observable, es principalmente útil para cancelar la ejecución.
• Operators: son funciones puras que permiten un estilo de programación funcional para tratar colecciones con operaciones como map, filter concat, reduce, etc.
• Subject: es equivalente a un EventEmitter y la única forma de transmitir un valor o evento a múltiples observadores.
• Schedulers: son despachadores centralizados para controlar la concurrencia, lo que nos permite coordinar cuándo ocurre el cálculo, por ejemplo: setTimeout o requestAnimationFrame u otros.


d. ¿Cuál es la diferencia entre promesas y observables?
• Se difiere la ejecución observable; el cálculo no comienza hasta la suscripción. Las promesas se ejecutan inmediatamente después de su creación. 
• Los observables proporcionan muchos valores. Las promesas proporcionan una, esto hace que los observables sean útiles para obtener múltiples valores a lo largo del tiempo.
• Los valores observables se pueden transformar tanto con los operadores como en la suscripción. Las promesas tienen cláusulas .then() que pueden transformar valores, pero sólo una vez finalizado el trabajo.
• Los Observables y las Promesas manejan los errores de manera diferente con una eficacia aproximadamente comparable.


e. ¿Cuál es la función de la tubería (pipe) async?
La canalización asíncrona se suscribe a un Observable o una Promesa y devuelve el último valor que ha emitido. Cuando se emite un nuevo valor, la tubería asíncrona marca el componente que se verificará en busca de cambios. Cuando el componente se destruye, la canalización asíncrona se cancela automáticamente para evitar posibles pérdidas de memoria. Cuando la referencia de la expresión cambia, la canalización asíncrona automáticamente se da de baja del antiguo Observable o Promise y se suscribe al nuevo.
