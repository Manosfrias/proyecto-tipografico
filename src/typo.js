const text = document.getElementById('js--textEditor');

const fontStyles = document.getElementById('js--fontStyleSelector');

const textAlignmentStyles = document.querySelectorAll('button[data-alignment-style]');

const fontSize = document.getElementById('js--fontSizeSlider');
const outputOfFontSize = document.getElementById('js--output_fontSize');

const lineHeight = document.getElementById('js--lineHeightSizeSlider');
const outputOfLineHeightSize = document.getElementById('js--output_lineHeightSize');

export const randomButton = document.getElementById('js--randomButton');

function setFontStyle (fontStyles, textToModify) {
  const option = fontStyles.options[fontStyles.selectedIndex];
  setFontWeight(option, text);
  setItalic(option, textToModify);
}

function setFontWeight (option, textToModify) {
  const fontWeight = option.value;
  textToModify.style.fontWeight = fontWeight;
}

function setItalic (option, textToModify) {
  const italic = option.dataset.fontStyle;
  if (italic === 'italic') {
    textToModify.style.fontStyle = 'italic';
  } else {
    textToModify.style.fontStyle = '';
  }
}

function setTextAlignment (textAlignmentStyle, textToModify) {
  textToModify.style.textAlign = textAlignmentStyle;
}

function adjustTextStyles (sizeValueSlider, textToModify, property) {
  const sizeValue = sizeValueSlider.value;
  textToModify.style[property] = sizeValue + 'px';
}

function showSize (sizeValueSlider, outputOfSizeValue) {
  const sizeValue = sizeValueSlider.value;
  outputOfSizeValue.innerHTML = sizeValue + ' px';
}
// Clear styles
function addRandomClass () {
  const className = 'class-' + ('' + Math.random()).substr(2, 1); // '' + > convierte en string.
  const selectionRange = getRange(); // es la posición del cursor
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

// EL PROBLEMA: sumas distintos estilos

// const array = [];

// function containsNodes (selection, nodes) {
//   console.log('array : ' + array);
//   const isInArray = array.indexOf('' + selectionRange);
//   if (isInArray > -1) {
//     console.log('hurray! is in array');
//   } else {
//     console.log('oh no! is not in array');
//     array.push('' + selectionRange);
//     selectionRange.surroundContents(newSpan);
//   }
// }

// nextSibiling
// previousSibiling
// get Candidato
// inicio === fin ? candidato : no candidato;
// documentacion sobre NODE y ELEMENT para ver como se navega el DOM
// Mover elementos por el DOM
// No te frustes
// O nos ponemos a experimentar en una hoja en sucio o no ensiamos código.
// Crearme un módulo para mis mierdas
// Y si no, déjalo bonito... o comentalo

// DI NO AL CODIGO DE MIERDA

fontStyles.addEventListener('change', function () {
  setFontStyle(fontStyles, text);
});

Array.from(textAlignmentStyles).forEach(textAlignmentStyle => {
  textAlignmentStyle.addEventListener('click', function () {
    const textAlignmentStyle = this.dataset.alignmentStyle;
    setTextAlignment(textAlignmentStyle, text);
  });
});

fontSize.addEventListener('change', function () {
  showSize(fontSize, outputOfFontSize);
  adjustTextStyles(fontSize, text, 'fontSize');
});

lineHeight.addEventListener('change', function () {
  showSize(lineHeight, outputOfLineHeightSize);
  adjustTextStyles(lineHeight, text, 'lineHeight');
});

randomButton.addEventListener('click', function () {
  addRandomClass();
});

// window.addEventListener('load', function () {
//   if (document.contentEditable !== undefined && document.execCommand !== undefined) {
//     window.alert('HTML5 Document Editing API Is Not Supported');
//   } else {
//     document.execCommand('styleWithCSS', false, true);
//   }
// }, false);

// var textArea = document.querySelectorAll('.typetext_container');

// for (var i = 0; i < textArea.length; i++) {
//   textArea[i].addEventListener('click', function () {
//     document.getElementById('control-bar').style.display = 'block';
//   }, false);
// }

// $('.link-falso-jq').click(function () { $('#lista__jq').toggleClass('inactive'); });

/* Basic typesetting */
// $('input[name="standar_ligatures"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('stan_liga') : $('#contenedor_jq').removeClass('stan_liga');
// });

// $('input[name="contextual_ligatures"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('contextual_ligatures') : $('#contenedor_jq').removeClass('contextual_ligatures');
// });

// /* constter case */
// $('input[name="small_caps"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('smcp') : $('#contenedor_jq').removeClass('smcp');
// });

// $('input[name="case_sensitive"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('case_sensitive') : $('#contenedor_jq').removeClass('case_sensitive');
// });

// /* Numerals */
// $('input[name="old_style_figures"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('old_style') : $('#contenedor_jq').removeClass('old_style');
// });

// $('input[name="fractions"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('fractions') : $('#contenedor_jq').removeClass('fractions');
// });

// $('input[name="pnum"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('pnum') : $('#contenedor_jq').removeClass('pnum');
// });

// $('input[name="super_script"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('super_script') : $('#contenedor_jq').removeClass('super_script');
// });

// $('input[name="sub_script"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('sub_script') : $('#contenedor_jq').removeClass('sub_script');
// });

// /* Typographic variants */
// $('input[name="swsh"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('swsh') : $('#contenedor_jq').removeClass('swsh');
// });

// $('input[name="dlig"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('dis_liga') : $('#contenedor_jq').removeClass('dis_liga');
// });

// $('input[name="hist"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('hist_forms') : $('#contenedor_jq').removeClass('hist_forms');
// });

// $('input[name="hlig"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('hist_lig') : $('#contenedor_jq').removeClass('hist_lig');
// });

// $('input[name="ss01"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('sty_set01') : $('#contenedor_jq').removeClass('sty_set01');
// });

// $('input[name="ss02"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('sty_set02') : $('#contenedor_jq').removeClass('sty_set02');
// });

// $('input[name="ss03"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('sty_set03') : $('#contenedor_jq').removeClass('sty_set03');
// });

// $('input[name="salt"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('salt') : $('#contenedor_jq').removeClass('salt');
// });

// $('input[name="ornaments"]').change(function () {
//   this.checked ? $('#contenedor_jq').addClass('ornaments') : $('#contenedor_jq').removeClass('ornaments');
// });
export {getRange};