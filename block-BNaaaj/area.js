function squareArea(a) {
  return a * a;
}
squareArea(5);

function rectangle(h, w) {
  return h * w;
}
rectangle(10, 12);

function circle(r) {
  return Math.PI * (r * r);
}
circle(12);

module.exports = {
  squareArea: squareArea,
  rectangle: rectangle,
  circle: circle,
};
