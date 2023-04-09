const g$alphabet = "abcdefghijklmnopqrstuvwxyz";
const $ = (s, x = document) => x.querySelector(s);
const $el = (tag, opts) => {
  const el = document.createElement(tag);
  Object.assign(el, opts);
  return el;
};
function LinkInSpan(spanmsg, linkmsg, href) {
  var testspan = $el("span", { textContent: spanmsg });
  testspan.appendChild($el("a", { href, textContent: linkmsg }));
  return testspan;
}

function toabc(number) {
  return "abcdefghijklmnopqrstuvwxyz"[number - 1];
}

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
