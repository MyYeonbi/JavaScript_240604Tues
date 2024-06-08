/**## 문제1-1. 배열 + for 문

- arr3 = [1, 3, 8, 2, 11, 6, 10, 8, 39, 10, 11, 13]
- 배열 중 짝수 번째의 값을 arrEvenSum 이라는 변수에 더해서 결과를 출력하는 코드 작성하기 */

arr = [1, 3, 8, 2, 11, 6, 10, 8, 39, 10, 11, 13];
const sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    sum = sum + arr[i];
    console.log(arr[i]);
  }
}
console.log(sum);

/**arr = [1, 3, 8, 2, 11, 6, 10, 8, 39, 10, 11, 13]
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    sum = sum + arr[i];
    console.log(arr[i]);
  }
}

console.log(sum); */
