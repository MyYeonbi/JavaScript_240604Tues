/**## 문제3. 배열 + for 문 + if 문 + 문자열

- arr4 = [1, ‘가’, 8, ‘다’, 11, ‘a’, ‘c’, 39, ‘사과’, 11, 13]
- 배열 중에서 문자인 값을 다 더해서 하나의 문장으로 만들어 출력해 주세요 */

const arr = [1, '가', 8, '다', 11, 'a', 'c', 39, '사과', 11, 13];

let str = '';

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    str = str + arr[i];
  }
}
console.log(str);
