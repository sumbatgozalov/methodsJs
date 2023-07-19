// task 1 
// const elements = [1,4,1,12,12]

// let checkarray = Array.isArray(elements)
// document.write(checkarray)




//task 2


// const elements = [1,4,1,12,12];

// const elements2 = elements.slice('')

// console.log(elements2)

// task 3 
// const inputnum = [0,2,1,4,1,12,12,2,4,6,7,8,0];
 
//   let final = '';

//   for (let i = 0; i < inputnum.length; i++) {
//     const first =inputnum[i];
//     const next = inputnum[i + 1];

//     final += first;

//     if (first % 2 === 0 && next % 2 === 0) {
//       final += '-';
//     }
//   }


// console.log(final);

// task 5

// let arr1 = [1,7,4,12,15]
// let arr2 = [8,3,4,5,12]


// let removedcommons = [...arr1,...arr2]

// let finalarray = removedcommons.filter((a, b) => removedcommons.indexOf(a) === b);

// console.log(finalarray.sort((a,b)=>a-b))

// task 6 
// const arr = [2,5,9,6,5];

// const remove =5;

// const final = []

// for(let i = 0;i<arr.length;i++){
//   const current = arr[i];
//   if(current !== remove){
//     final.push(current)
//   }
// }
// console.log(final);

// task 7 
// function removecommons(added) {
//     const fresharr = [];
  
//     for (const el of added) {
//       if (!fresharr.includes(el)) {
//         fresharr.push(el);
//       }
//     }
//     return fresharr.sort((a, b) => a - b);
//   }
//   const added = [1, 2, 18, 2, 4, 5, 6, 7, 7, 8, 12, 12, 18, 13, 14, 12];
  
//   const noncommon = removecommons(added);
//   console.log(noncommon);


// task 8

// const numberArr = [2, 5, 6, 7, 5, 3, 9];

// const targetnum = Number(prompt());
// let target = false;

// for (let i = 0; i < numberArr.length; i++) {
//   if (numberArr[i] === targetnum) {
//     target = true;
//   }
// }

// if (target) {
//   alert("target num is here");
// } else {
//   alert("not here");
// }


// task 9

// let arr1 = [1,7,4,12,15]
// let arr2 = [8,3,4,5,12]


// let onlycommons = [...arr1,...arr2]

// let finalarray = arr1.filter((a)=>arr2.includes(a));

// console.log(finalarray.sort((a,b)=>a-b).join('-'))