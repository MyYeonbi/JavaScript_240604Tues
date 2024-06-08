/**## 문제2. 배열 + for 문 + if 문

- arr4 = [1, ‘가’, 8, ‘다’, 11, ‘a’, ‘c’, 39, ‘사과’, 11, 13]
- 배열 중에서 문자인 배열의 값은 앞에 ‘#’ 을 붙여서 출력, 문자가 아닌 값은 ‘$’
- conosole.log(’#’, 출력하고싶은값)
- conosole.log(’$’, 출력하고싶은값) */

const arr = [1, '가', 8, '다', 11, 'a', 'c', 39, '사과', 11, 13];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    console.log('#', arr[i]);
  } else {
    console.log('$', arr[i]);
  }
}
