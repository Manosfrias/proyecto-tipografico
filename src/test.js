import { getRange, randomButton } from './rangeSelectionScripts.js';

// DI NO AL CODIGO DE MIERDA

function bestCandidate () {
  const posibleCandidate = getRange();
  const posibleCandidateStarOffset = posibleCandidate.startOffset;
  const posibleCandidateEndOffset = posibleCandidate.endOffset;
  const weirdCandidate = posibleCandidateEndOffset === posibleCandidateStarOffset;

  if (weirdCandidate) {
    console.log('principio y fin iguales: uy tenemos un raro');
    // About this issue, after several testing, results are inconclusives
    // And not sure about what to do with this candidate
  } else {
    const isAParent = posibleCandidate.startContainer.childNodes;
    if (isAParent) {
      isAParent.forEach(function (parent) {
        parentHasSpan(parent);
      });
    }
  }
  return posibleCandidate;
}

function parentHasSpan (parent) {
  if (parent.nodeType === 1) {
    parent.classList.add('target');
    parentHasChildren(parent);
  }
}

function parentHasChildren (parent) {
  if (parent.childElementCount > 0) {
    removeSpanFromChildrens(parent);
  }
}

function removeSpanFromChildrens (parent) {
  const parentChildrens = parent.children;
  for (let child = 0; child < parentChildrens.length; child++) {
    parentChildrens[child].classList.add('remove');
  }
}

// Right now, the bestCandidate() do too many functions.
// 1.Look for the bestCandidate (bC)
// 2.Check if that bC is in a span
// 3.Check if bC has children itself
// This 3 functionalities has to be separete one from another.
// Why
// 1.bC has to become a styledGroup. Now, this function doesnt return anything
// 2.At the same time, has to check if has a span class (if has been selected previously) for adding the both classes
// 3.Check if has children and do something with them.
// So lets start again

randomButton.addEventListener('click', function () {
  bestCandidate();
});
