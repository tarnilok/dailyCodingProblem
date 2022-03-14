/*
This problem was asked by Epic.
The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:
1
11
21
1211
111221
As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.
Given an integer N, print the Nth term of this sequence.
*/

//+ -------------- Solution ------------
const lookAndSay = (n) => {
    let num = "1", count = 2
    while (count <= n) {
        let newstr = ""
        const arr = num.match(/(.)\1*/g)
        for (let i of arr) {
            newstr += i.length + i[0]
        }
        num = newstr
        count++
    }
    return num
}
console.log(lookAndSay(1))
console.log(lookAndSay(2))
console.log(lookAndSay(3))
console.log(lookAndSay(4))
console.log(lookAndSay(5))


