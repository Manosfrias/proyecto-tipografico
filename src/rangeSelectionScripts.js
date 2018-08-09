export const randomButton = document.getElementById('js--randomButton');

function addRandomClass (styleGroup) {
  const className = 'class-' + ('' + Math.random()).substr(2, 1);
  // const selectionRange = getRange();
  // const styleGroup = newStyleGroup(selectionRange);
  styleGroup.classList.add(className);
}

function getRange () {
  const selection = window.getSelection();
  return selection.getRangeAt(0);
}

function newStyleGroup (selectionRange) {
  const newSpan = document.createElement('span');
  selectionRange.surroundContents(newSpan);
  return newSpan;
}

export {getRange, newStyleGroup, addRandomClass};
