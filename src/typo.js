import { getBestFittingStyledGroup } from './test.js';

const text = document.getElementById('js--textEditor');

const fontStyles = document.getElementById('js--fontStyleSelector');

const textAlignmentStyles = document.querySelectorAll('button[data-alignment-style]');

const fontSize = document.getElementById('js--fontSizeSlider');
const outputOfFontSize = document.getElementById('js--output_fontSize');

const lineHeight = document.getElementById('js--lineHeightSizeSlider');
const outputOfLineHeightSize = document.getElementById('js--output_lineHeightSize');

function setFontStyle (fontStyles, textToModify) {
  const option = fontStyles.options[fontStyles.selectedIndex];
  setFontWeight(option, textToModify);
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

fontStyles.addEventListener('change', function () {
  const styleGroup = getBestFittingStyledGroup();
  console.log('styleGroup: '+ styleGroup);
  setFontStyle(fontStyles, styleGroup);
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
