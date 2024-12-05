console.log("requeire로 부르면 실행 됩니다.");

module.exports = {
  add: (a: number, b: number) => a + b,
  sub: (a: number, b: number) => a - b,
  multi: (a: number, b: number) => a * b,
  div: (a: number, b: number) => a / b,
};
