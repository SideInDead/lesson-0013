const obj = {
    userName: 'John',
    age: 20
};

// const objCopy = {
//     ...obj
// };


// console.log(obj);
// console.log(objCopy);

// console.log(obj === objCopy);


// console.log(obj.userName)
// console.log(obj['userName'])


for (const key in obj) {
    console.log(key);
}