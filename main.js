var bruteIndex = 1;
var bruteInvert = false;
var brutedReg = [];
var brutedInv = [];

function rot(str, i) {
  return str.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
  });
}

function reverse(s){
    return s.split("").reverse().join("");
}

function update() {
  document.getElementById('outputEncrypt').value = reverse(rot(document.getElementById('inputEncrypt').value, 10));
  document.getElementById('outputDecrypt').value = rot(reverse(document.getElementById('inputDecrypt').value), 16);
}

function bruteForce() {
  var input = document.getElementById('inputBruteForce').value;
  brutedReg = [];
  brutedInv = [];
  for (var i = 1; i < 27; i++) {
    brutedReg.push(rot(input, i));
    brutedInv.push(reverse(rot(input, i)));
  }

  var label = "ROT" + Math.floor(bruteIndex).toString();

  if (!bruteInvert) {
    label = label + " Not Inverted";
    document.getElementById('outputBruteForce').value = brutedReg[bruteIndex];
  }
  else {
    label = label + " Inverted";
    document.getElementById('outputBruteForce').value = brutedInv[bruteIndex];
  }

  document.getElementById('outputBruteForceLabel').value = label;
}

function next() {
  if (bruteIndex >= 25) {
    bruteIndex = 1;
  }
  else {
    if (bruteInvert) {
      bruteIndex++;
    }
  }
  bruteInvert = !bruteInvert;

  bruteForce();
}

function prev() {
  if (bruteIndex <= 1) {
    bruteIndex = 25;
  }
  else {
    if (!bruteInvert) {
      bruteIndex--;
    }
  }
  bruteInvert = !bruteInvert;
  bruteForce();
}

function print() {
  for(var i = 0; i < brutedReg.length; i++) {
    console.log(brutedReg[i]);
    console.log(brutedInv[i]);
  }
}
