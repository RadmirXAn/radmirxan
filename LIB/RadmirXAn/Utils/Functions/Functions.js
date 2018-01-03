// Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
const getRandom = function() {
  return Math.random();
}

// Возвращает случайное число между min (включительно) и max (не включая max)
const getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
}

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}