


//---------------------------------- 7 -----------------------------

// let name = "Sara"

// console.log(name.toUpperCase())

//---------------------------------- 8 -----------------------------


// const arr = ["Sara" , "Xedice", "Samir" ]
// let max = arr[0]
// for(let i = 0; i< arr.length ; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)

//---------------------------------- 9 -----------------------------

// let str = "Samir"
// const new_arr = []
// for (let i = 0; i<str.length; i++){
//     if (str[i] == "a" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "e"){
//         new_arr.push(str[i])
//     }
// }
// console.log(new_arr)

//---------------------------------- 10 -----------------------------

// let str = "Samir"
// for(let i = 0 ; i<str.length; i++){

//     if (str[i] !== "a" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== "e"){
//         str.slice(str[i])
//         console.log((str[i])) 
//     }


// }

//---------------------------------- 11 -----------------------------

// let str = "Samir"

// for (let i = 0 ; i<str.length; i++){

//     if(i % 2 == 1 ){

//         str.slice(str[i])
//         console.log(str[i])

//     }

// }

//---------------------------------- 12 -----------------------------

function string_parameter(param){

    let lower =  param.toLowerCase().split(" ")
    return lower.join("-")

}

console.log(string_parameter("Robin Singh from USA"));