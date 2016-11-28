for (var i = 5; i < 120; i += 10) {
	console.log(i)
}

for (var i = 4096; i > 1; i /= 2) {
	console.log(i)
}

var presidents = ["George Washington", "John Adams", "Thomas Jefferson"]

for (var i = 0; i < presidents.length; i++) {
console.log(presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var i in antSpecies) {
	console.log(i)
}