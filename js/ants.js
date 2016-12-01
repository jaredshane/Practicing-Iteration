/* Use can use another kind of for loop to
iterate over objects. Iterate over the object
below and use console.log() to output the names
of the keys in the object. */

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
