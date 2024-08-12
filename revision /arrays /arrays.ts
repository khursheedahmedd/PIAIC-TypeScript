//Union type
let array:(string | number | boolean) []= ['a', 'b', 'y'];

array.push(7);
array.push(false);

console.log(array);

//any type
let array2:any[] = [8,0];

array2.push({name:"Alicent"})

array2.push(true)

console.log(array2);

//tuple
let array3:[string, number, boolean] = ['Khursheed', 8, true];

console.log(array3);