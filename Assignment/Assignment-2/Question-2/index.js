var currentDate = new Date();
var formattedDate = "".concat(currentDate.getDate(), "-").concat(currentDate.toLocaleString('default', { month: 'long' }), "-").concat(currentDate.getFullYear());
console.log("Today Date : ".concat(formattedDate));
