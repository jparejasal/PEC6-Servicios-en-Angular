a. ¿Qué son los interceptores?
Interceptor: es una clase que se utiliza para interceptar solicitudes HTTP y respuestas HTTP. Se pueden utilizar para realizar tareas como añadir un encabezado de autorización a todas las solicitudes, manejar errores de servidor de manera uniforme o agregar una barra de carga a la aplicación mientras se realizan solicitudes.

b. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
Este código crea una cadena observable que realiza una búsqueda de vinos en función de un término de búsqueda
this.wines$ = this.searchSubject    // Está asignando el valor de `this.search Asunto` a la variable `this.wines$`.
.startWith(this.searchTerm)         // El operador `.startWith(this.searchTerm)` se utiliza para emitir un valor específico como el primer elemento de la secuencia.
.debounceTime(300)                  // La función `.debounceTime(300)` se utiliza para retrasar la emisión de valores del observable por una cantidad de tiempo específica (en milisegundos).
.distinctUntilChanged()             // Es un operador RxJS que filtra valores duplicados consecutivos emitidos por el observable.
.merge(this.reloadProductsList)     // Combina las emisiones de `this.searchSubject.startWith(this.searchTerm).debounceTime(300).distinctUntilChanged()` y `this.reloadProductsList` en una única secuencia observable.
.switchMap((query) => this.wineService.getWine(this.searchTerm));   // Se utiliza para asignar los valores emitidos desde el observable `this.searchSubject` a un nuevo observable devuelto por `this.wineService.getWine(this.searchTerm)`.
