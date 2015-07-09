
function isAnagram (a, b) {
  return a.replace(' ','').split('').sort().join('') === b.replace(' ','').split('').sort().join('')
}
