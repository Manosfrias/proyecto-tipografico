# For typesetting

## Basic typesetting
$('input[name="standar_ligatures"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('stan_liga') : $('#contenedor_jq').removeClass('stan_liga');
});

$('input[name="contextual_ligatures"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('contextual_ligatures') : $('#contenedor_jq').removeClass('contextual_ligatures');
});

## Constter case
$('input[name="small_caps"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('smcp') : $('#contenedor_jq').removeClass('smcp');
});

$('input[name="case_sensitive"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('case_sensitive') : $('#contenedor_jq').removeClass('case_sensitive');
});

## Numerals
$('input[name="old_style_figures"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('old_style') : $('#contenedor_jq').removeClass('old_style');
});

$('input[name="fractions"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('fractions') : $('#contenedor_jq').removeClass('fractions');
});

$('input[name="pnum"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('pnum') : $('#contenedor_jq').removeClass('pnum');
});

$('input[name="super_script"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('super_script') : $('#contenedor_jq').removeClass('super_script');
});

$('input[name="sub_script"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('sub_script') : $('#contenedor_jq').removeClass('sub_script');
});

## Typographic variants
$('input[name="swsh"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('swsh') : $('#contenedor_jq').removeClass('swsh');
});

$('input[name="dlig"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('dis_liga') : $('#contenedor_jq').removeClass('dis_liga');
});

$('input[name="hist"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('hist_forms') : $('#contenedor_jq').removeClass('hist_forms');
});

$('input[name="hlig"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('hist_lig') : $('#contenedor_jq').removeClass('hist_lig');
});

$('input[name="ss01"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('sty_set01') : $('#contenedor_jq').removeClass('sty_set01');
});

$('input[name="ss02"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('sty_set02') : $('#contenedor_jq').removeClass('sty_set02');
});

$('input[name="ss03"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('sty_set03') : $('#contenedor_jq').removeClass('sty_set03');
});

$('input[name="salt"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('salt') : $('#contenedor_jq').removeClass('salt');
});

$('input[name="ornaments"]').change(function () {
  this.checked ? $('#contenedor_jq').addClass('ornaments') : $('#contenedor_jq').removeClass('ornaments');
});

# Working with ranges

function bestCandidate () {
  const posibleCandidate = getRange();
  const posibleCandidateStarOffset = posibleCandidate.startOffset;
  const posibleCandidateEndOffset = posibleCandidate.endOffset;
  const weirdCandidate = posibleCandidateEndOffset === posibleCandidateStarOffset;

  if (weirdCandidate) {
    console.log('principio y fin iguales: uy tenemos un raro');
    About this issue, after several testing, results are inconclusives
    And not sure about what to do with this candidate
  } else {
    const isAParent = posibleCandidate.startContainer.childNodes;
    if (isAParent) {
      isAParent.forEach(parentHasSpan);
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
  console.log(parentChildrens);
  [].forEach.call(parentChildrens, child => {
    child.classList.add('remove');
  });
}
