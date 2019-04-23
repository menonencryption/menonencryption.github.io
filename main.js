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
