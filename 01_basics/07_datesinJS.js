// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date (2023, 0 , 24)
// let myCreateDate = new Date (2021, 5, 11, 6, 20)

// let myCreateDate = new Date ("2023-01-14")

let myCreateDate = new Date ("01-14-2022")
// console.log(myCreateDate.toLocaleString());

let myTimeStmp = Date.now();
// console.log(myTimeStmp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


//  ` ${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})

