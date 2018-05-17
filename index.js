const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  return(kittens)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return(kittens)
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name)
  return(kittens)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
  return(kittens)
}
function appendKitten(name) {
  var kitten = [...kittens, name]
  return kitten
}
function prependKitten(name) {
  var kitten = [name, ...kittens]
  return kitten
}