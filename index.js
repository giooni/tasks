/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .
!!!!დაწერეთ ამ ამოცანის მინიმუმ სამი სხვადასხვა ამოხსნის გზა 
function palindrom(txt) {

}

*/

function palindrom(txt) {
    let newtxt = txt.split("").reverse().join('');
    return newtxt == txt

}
function checkpalindrom(string){
    let newstr = "";
    for(let i= string.length-1; i>=0; i-=1){
        newstr += string[i]
    }
    return newstr == string
}
function ifpalindrom(text){
    
    for(let i = 0; i<text.length; i++){
        if(text[i] != text[text.length-i-1]){
            return  false

        }
    }return true
    
}


//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'


*/
function getfirst(str){
    for(var i = 0; i<str.length; i++){
        var k = str[i];
        if (str.indexOf(k) == i && str.indexOf(k, i + 1) == -1){
          return k
        }
    }return "not found"
}
console.log(getfirst("aabcbb"))


/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

*/
function tocamel(string){
    return string[0].toUpperCase()+string.substring(1)
}
function camalized(txt){
    let splited = txt.split(" ");
    return splited.reduce((acc, cur) =>{
        acc += tocamel(cur)
        return acc
    })
}


/*


//Task 4

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/
function findmaxrepeated(array){
    const result = array.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] =1;
        if(acc[cur] > acc.maxval.value){
            acc.maxval.value = acc[cur];
            acc.maxval.el = cur;
        }
        return acc
        

    }, {maxval : { value: 0 , el : ""}})
    return result.maxval
}


/*
Task 5 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

// */

function readyToPutInTheDOM(arr) {
    return arr.map((el) => {
        
        if(el.hasOwnProperty("name") && el.hasOwnProperty("age")){
            const  i = document.createElement("h1");
            i.innerText = el.name;
            const k = document.createElement("h2");
            k.innerText = el.age;
            return i.outerHTML + k.outerHTML
        
        
        }
        

    })
}

// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]





//Task 6

/*

დაწერეთ ფუნქცია რომელიც დაითვლის ნულების მიმდევრობის რაოდენობას .  მიმდევრობა ვალიდურია თუ კი არის არანაკლებ 4 სიგრძისა 

[0, 0, 0, 0, 0, 1]  -->  1
# ერთი ჯგუფი 0ლების მიმდევრობის რომელიც 4ზე მეტია

[0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0]  -->  2
# ორი სხვადასხვა 4 სიგრძის მიმდევრობა

[0, 0, 0, 1, 0]  -->  0 
# ერთი მიმდევრობა არის 3 სიგრძის მეორე 1 სიგრძის ანუ არც ერთი არ არის ვალიდური და ფუნქციამ უნდა დაგვიბრუნოს 0 

[0, 0, 0, 1, 0, 0]  -->  0
# იგივე

[1, 2, 3, 4, 5]  -->  0
# საერთოდ არ გვაქვს მიმდევრობა

[]  -->  0
# ცარიელია






*/
function getzeroes(array){
    let result = 0;
    let i = 0;
    
    while(i < array.length){
        let j = 0;
   
            while(true){
                if (array[i] !==0){
                    result += Math.floor(j/4)
                    break
                }
                j++
                if(i === array.length-1){
                    result += Math.floor(j/4)
                    break
                }
                i++
            }

            i++
        

    }
    return result


}



//Task 7
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

hint : 15670 
1567 % 10 -> 7
156 % 10 -> 6
15 % 10 -> 5

n < 10 -> n 
*/

function sumOfDigits (n) {
    if(n < 10) {
        return n
    } else { return n%10 + sumOfDigits(Math.floor(n/10))
        
    }
}

function sum(number){
    let i = 0;
    let str = number.toString();
    for(el of str){
        i = i+ (+el)
    }
    return i
}

