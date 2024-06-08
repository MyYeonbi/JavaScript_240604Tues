/**## 문제3-1. 배열 + for 문 + if 문 + 문자열

- arr = [1, ‘a’, 8, ‘b’, 11, ‘c’, ‘d’, 39, ‘e’, 11, 13]
- 해당 배열에서 문자인 값만 빈 문자열에 더해 주시는데, 해당 알파벳을 대문자로 변경해서 더해주세요
- 예상 결과 : ‘ABCDE’
- */

const arr = [1, 'a', 8, 'b', 11, 'c', 'd', 39, 'e', 11, 13];

let str = '';
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    str = str + arr[i].toUpperCase();
  }
}
console.log(str);
