//Iterating Through Objects

    //resturent menu

    const menu = { burger: 5, pizza: 8, juice: 3 };

for (let item in menu) {
    console.log(item + ": " + menu[item]);
}

//city info

const city = { population: 500000, mayor: "Hassan", area: "200 sq km" };

for (let key in city) {
    console.log(key + ": " + city[key]);
}
 
//Classroom Schedule

const schedule = { math: "8:00 AM", english: "10:00 AM", science: "1:00 PM" };

for (let subject in schedule) {
    console.log(subject + ": " + schedule[subject]);
}






//Objects JSON 

    //Convert Movie to JSON

    const movie = { title: "Inception", duration: "2h 30m", rating: 9 };

const movieJSON = JSON.stringify(movie);
console.log(movieJSON);

//JSON JavaScript Object

const jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';

const obj = JSON.parse(jsonString);

console.log(obj.name);
console.log(obj.age);
console.log(obj.country);

//JSON  Object  JSON
const weather = { temperature: 32, humidity: "70%", condition: "Sunny" };

const jsonWeather = JSON.stringify(weather);
const finalObj = JSON.parse(jsonWeather);

console.log(finalObj);