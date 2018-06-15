import { getRange, randomButton } from './rangeSelectionScripts.js';

// DI NO AL CODIGO DE MIERDA

// looking for the best fit for the styledGroup
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
    console.log('Soy single y completo!!');
    return;
  }

  console.log('Soy single y parcial!!');

// Hemos llegado a distinguir entre los best fit
}

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
// 1. Distingue el caso single y que devuelva lo que tiene que devolver.
// 2. Investigar Beaker Browser.

// function bestCandidate () {
//   const posibleCandidate = getRange();
//   const posibleCandidateStarOffset = posibleCandidate.startOffset;
//   const posibleCandidateEndOffset = posibleCandidate.endOffset;
//   const weirdCandidate = posibleCandidateEndOffset === posibleCandidateStarOffset;

//   if (weirdCandidate) {
//     console.log('principio y fin iguales: uy tenemos un raro');
//     // About this issue, after several testing, results are inconclusives
//     // And not sure about what to do with this candidate
//   } else {
//     const isAParent = posibleCandidate.startContainer.childNodes;
//     if (isAParent) {
//       isAParent.forEach(parentHasSpan);
//     }
//   }
//   return posibleCandidate;
// }

// function parentHasSpan (parent) {
//   if (parent.nodeType === 1) {
//     parent.classList.add('target');
//     parentHasChildren(parent);
//   }
// }

// function parentHasChildren (parent) {
//   if (parent.childElementCount > 0) {
//     removeSpanFromChildrens(parent);
//   }
// }

// function removeSpanFromChildrens (parent) {
//   const parentChildrens = parent.children;
//   console.log(parentChildrens);
//   [].forEach.call(parentChildrens, child => {
//     child.classList.add('remove');
//   });
// }



randomButton.addEventListener('click', function () {
  getBestFittingStyledGroup();
});
