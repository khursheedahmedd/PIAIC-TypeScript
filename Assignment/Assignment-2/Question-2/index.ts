const currentDate: Date = new Date();
const formattedDate: string = `${currentDate.getDate()}-${currentDate.toLocaleString('default', { month: 'long' })}-${currentDate.getFullYear()}`;
console.log(`Today Date : ${formattedDate}`);