# EXAMEN FINAL: DISEÑO DE PÁGINAS WEB CON REACT
**Estudiante:** Alfredo García Acevedo
**Código:** P2220251127
**Profesora:** Diana Stella Robayo
**Curso:** Desarrollo SPA con Vite y React - Universidad Agustiniana

---

## PARTE 1: EVALUACIÓN TEÓRICA

### Pregunta 1: Tooling Moderno (SPA vs MPA y Vite vs CRA)
* **Diferencia SPA vs MPA:** En una Single Page Application (SPA), el servidor envía una página HTML inicial y las actualizaciones se realizan dinámicamente en el cliente mediante JavaScript sin recargar la página. En una Multi-Page Application (MPA), cada navegación realiza una solicitud al servidor que devuelve un HTML completo nuevo, provocando la recarga completa del navegador.
* **Ventaja de Vite sobre CRA:** Vite utiliza módulos ES nativos (ESM) en el navegador y un empaquetador ultra rápido (`esbuild`), evitando el empaquetado inicial masivo que hacía Create React App (CRA). Esto permite tiempos de arranque del servidor de desarrollo casi instantáneos.

---

### Pregunta 2: Sintaxis JSX y Composición de Componentes
* **Elementos adyacentes:** Las funciones de JavaScript solo pueden retornar un único valor. Dado que JSX se transforma en llamadas a funciones (`React.createElement`), se requiere un único nodo contenedor raíz (como `<Fragment>` o `<div>`).
* **Atributo `key`:** Proporciona una identidad única e inmutable a cada elemento de una lista, permitiendo al algoritmo de reconciliación de React identificar qué items cambiaron, se agregaron o eliminaron de forma eficiente.

---

### Pregunta 3: Flujo de Datos y Propiedades (Props)
* **Flujo unidireccional:** Significa que la información pasa de componentes padres a componentes hijos a través de las `props`.
* **Inmutabilidad de props:** Un hijo NO puede modificar sus props directamente porque son de solo lectura. Para solicitar un cambio, el hijo debe ejecutar una función callback recibida desde el padre.

---

### Pregunta 4: Gestión de Estado (Hook useState) y Reactividad
* **Valor en `console.log()`:** `0`
* **Valor en pantalla:** `1`
* **Explicación:** Las actualizaciones de estado con `useState` son asíncronas y crean capturas de pantalla (*snapshots*) del render actual. El `console.log` lee el valor de la variable en el ciclo de renderizado actual antes de que el nuevo estado sea aplicado en la pantalla.

---

### Pregunta 5: Eventos y Formularios
* **Diferencia:** En componentes controlados, React gestiona el estado del input mediante `useState` y el evento `onChange`. En componentes no controlados, el DOM maneja el valor y se accede a él con `useRef`.
* **Recomendación:** Se recomiendan componentes controlados para validaciones en tiempo real, ya que cada pulsación de tecla actualiza el estado y permite evaluar condiciones al instante (por ejemplo, habilitar/deshabilitar el botón de envío).
