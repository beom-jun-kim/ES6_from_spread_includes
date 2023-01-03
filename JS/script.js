// 펼침연산자 spread operator
// 배열을 바꾸지 않고 새로값을 복사할 수 있는 방법

let pre = ["사과", "바나나", 23];
let newDate = [...pre]; /* [...pre] = ["사과","바나나",23]; */
console.log(pre === newDate); /* false */


let pre2 = ["사과", "바나나", 23];
let newDate2 = [0, 1, 2, 3, ...pre2, "hi", null]; /* [0, 1, 2, 3, '사과', '바나나', 23, 'hi', null] */
console.log(pre2, newDate2); 


function sum(a, b, c) {
  return a + b + c;
}
let pre3 = [1, 2, 3];

console.log(sum.apply(null, pre3)); /* 6 */
console.log(sum(...pre3)); /* 6 */ 

// ============================

// from method
function addMark() {

// 인자로부터 배열을 만든다 (배열로 만들어주는 메서드)
let newArr = Array.from(arguments);

let newDate3 = newArr.map(function(value){
    return "0" + value;
});

  console.log(newDate3); /* 01 , 02 , 03 , 04 , 05 */
}

addMark(1,2,3,4,5);

// ============================

function print(){
    /* 
        filter , includes, from을 사용해서  문자열 e가 포함된 
        노드로 구성된 배열을 만들어서 반환하기
    */

    // item 순회 : filter
    // 문자열 e가 포함된 : includes
    // 배열을 만들기 : from

    const li = document.querySelectorAll("ul li");
    const liArray = Array.from(li); /* li노드로 구성된 배열 */
    const eArray = liArray.filter(function(v){
        return v.innerText.includes("e");
    });
    return eArray;

}
console.log(print()); /* [li, li, li] */