import { getRange, newStyleGroup, addRandomClass, randomButton } from './rangeSelectionScripts.js';

// DI NO AL CODIGO DE MIERDA

function getBestFittingStyledGroup () {
  const range = getRange();
  const startContainer = range.startContainer;
  const endContainer = range.endContainer;
  const isMultiElementsRange = startContainer !== endContainer;

  if (isMultiElementsRange) {
    console.log('Soy múltiple!');
    return;
  }
  console.log('Soy single!');
  const singleElement = startContainer;
  const singleElementTextContent = singleElement.textContent;
  const rangeTextContent = range.toString();
  const isCompleteRange = singleElementTextContent === rangeTextContent;

  if (isCompleteRange) {
    const styleGroup = startContainer.parentElement;
    return styleGroup;
  }
  const styleGroup = newStyleGroup(range);
  return styleGroup;
}

randomButton.addEventListener('click', function () {
  const styleGroup = getBestFittingStyledGroup();
  addRandomClass(styleGroup);
});

// Falta devolver el best fit;
// Si es parcial > devolver un span nuevo, rodenado la selección
// Si es completo > 1. devolverme singleElement.
// Si es multi > No hay best fit. Tiene una lista de cachos que componen la selección.
// Creando un problema nuevo que requiere una solución concreta a este problema concreto.
// Hay que estipular condiciones y prediconciones y postcondiciones que hacen que el tratamiento del
// texto sean más sencillo. Pero las transformaciones tienen que complir las pre y post - condiciones.
// Vamos a suponer que el texto editado es o texto o span. Y que un span solo tiene anidado span.
// Y esto van a ser nuestro universo.

// TAREAS
// 2. Investigar Beaker Browser.
