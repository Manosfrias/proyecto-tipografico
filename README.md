# Proyecto tipografico
Proyecto tipográfico atascado


## Historias de usuario
### H1
Como usuario, me gustaría poder probar el tamaño de las tipografías para ver como funcionan en tamaños pequeños y grandes de x
*Prioridad* Baja
*Estimación* 0.5

### H2
Como usuario, también me gustaría poder jugar con los tamaños de línea del texto para ver como funcionan con tamaños grandes y pequeños
*Prioridad* Baja
*Estimación* 0.5

### H3
Como usuario, me gustaría poder probar toda la familia de la tipografa, desde las versiones más finas a diferentes versiones especiales como ligaduras, para poder comprobar que la tipografía tiene toda la amplitud que necesito
*Prioridad* Media
*Estimación* 3

### H4
Como usuario, me gustaría elegir tantas letras como quiera cuando le ponga un estilo, para poder ver como estas se integran con las demás.
*Prioridad* Media
*Estimación* 3

### H5
Como usuario, me gustaría que cuándo aplicara un estilo, y volviera a seleccionar las letras que lo lleva, este se reflejara en la zona de elección, para que así no me liara.
*Prioridad* Media
*Estimación* 3

### Behavior

**Altura de línea, tamaño de fuente y alineamiento solo se pueden aplicar al párrafo completo**. Si tenemos seleccionado una letra estas opciones quedan desabilitadas.

**Line-height y font-size tienen que estar en concordancia**

**Los estilos se aplican a las letras o conjunto de letras con una etiqueta span** 
Quedando así:

```html
Hola, ¿<span style="font-weight: bold">cómo</span>estas?
```

Si a este conjunto (**como**) le aplicamos un estilo a una de sus letras (**m**), quedara así:
```html
Hola, ¿<span style="font-weight: bold">có</span><span style="font-weight: regular">m</span><span style="font-weight: bold">o</span> estas?
```

Si a este conjunto (**co**m**o**) le añadimos algo de OT, debera quedar así:
```html
Hola, ¿<span style="font-weight: bold" font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum";>có</span><span font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum"; style="font-weight: regular">m</span><span font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum"; style="font-weight: bold">o</span> estas?
```

Si selecciono toda la frase y cambio de estilo, se reseta la frase entera:
```html
<span style="font-weight: light">Hola, ¿cómo estas?</span>
```


Si selecciono toda la frase y añado OT, no se resetearía y quedaría así::
```html
<span font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum";>Hola, ¿</span><span style="font-weight: bold" font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum";>có</span><span font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum"; style="font-weight: regular">m</span><span font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum"; style="font-weight: bold">o</span> <span style="font-weight: bold" font-feature-settings: "kern", "liga", "swsh", "pnum", "lnum";>estas?</span>
```

Si selecciono una letra a la cuál hay un OT aplicado, cuando vaya a seleccionarlo debería avisar.

## Funcionabilidades necesarias
La zona del texto editable tiene que poder aplicar las siguientes opciones:

* Opciones de OT:
  * font-feature-settings:
* Estilos
  * font-weight
  * font-style
* Alineaminto
  * align-content
* Tamaño de fuente
  * font-size
* Altura de línea
  * line-height

## Ante la duda consultar:
https://klim.co.nz/retail-fonts/domaine-sans-fine/

## Bonus

Hacerlo independiente del CSS Ahora mismo, tengo definidos estilos en el css para añadirle estas cosas... lo ideal sera que no hubiera hoja de estilo, si no que se crearan los estilos directamente en el html via js.

Estaría muymuymuy guay que identificara si la font tiene estilos de OT y que generara el dropdown de selección de los mismos Sí, sería lo más.
