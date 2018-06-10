export const randomButton = document.getElementById('js--randomButton');

function addRandomClass () {
  const className = 'class-' + ('' + Math.random()).substr(2, 1);
  const selectionRange = getRange();
  const styleGroup = getStyleGroup(selectionRange);
  styleGroup.classList.add(className);
}

function getRange () {
  const selection = window.getSelection();
  return selection.getRangeAt(0);
}

function getStyleGroup (selectionRange) {
  const newSpan = document.createElement('span');
  selectionRange.surroundContents(newSpan);
  return newSpan;
}

randomButton.addEventListener('click', function () {
  addRandomClass();
});

export {getRange};
