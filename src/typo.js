let text = document.getElementById('js--textEditor');

let fontStyles = document.getElementById('js--fontStyleSelector');

let textAlignmentStyles = document.querySelectorAll('button[data-alignment-style]');

let fontSize = document.getElementById('js--fontSizeSlider');
let outputOfFontSize = document.getElementById('js--output_fontSize');

let lineHeight = document.getElementById('js--lineHeightSizeSlider');
let outputOfLineHeightSize = document.getElementById('js--output_lineHeightSize');

function setfontStyle (fontStyles, textToModify) {
  let option = fontStyles.options[fontStyles.selectedIndex];
  setFontWeight(option, text);
  setItalic(option, textToModify);
}

function setFontWeight (option, textToModify) {
  let fontWeight = option.value;
  textToModify.style.fontWeight = fontWeight;
}

function setItalic (option, textToModify) {
  let italic = option.dataset.fontStyle;
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
  let sizeValue = sizeValueSlider.value;
  textToModify.style[property] = sizeValue + 'px';
}

function showSize (sizeValueSlider, outputOfSizeValue) {
  let sizeValue = sizeValueSlider.value;
  outputOfSizeValue.innerHTML = sizeValue + ' px';
}

fontStyles.addEventListener('change', function () {
  setfontStyle(fontStyles, text);
});

Array.from(textAlignmentStyles).forEach(textAlignmentStyle => {
  textAlignmentStyle.addEventListener('click', function () {
    let textAlignmentStyle = this.dataset.alignmentStyle;
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

// /* Letter case */
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