console.log('starting button-code.js');

console.log('can button.js use eval?',
  eval('"yes"'));

document.getElementById('run').addEventListener('click', function () {
  var input = document.getElementById('source');
  var source = input.value;
  console.log('running source "%s"', source);
  eval(source);
});

console.log('finished button-code.js');
