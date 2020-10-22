/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;

const resultObj = [];

const resultHTML = document.querySelector('p')

let resultConsol = ''

/* Этап 3. Запись данных в результирующий объект */

list.forEach((obj) => {
  const result = {
  name: obj.name,
  age: Number(obj.age),
  prof: obj.prof
  }   
 resultHTML.innerHTML += `&emsp;&emsp;{&nbsp;name: "${obj.name}", age: ${obj.age}, prof: "${obj.prof}"&nbsp;},<br>`

  resultObj.push(result);
  
  resultConsol += `\n        { name: "${obj.name}", age: ${obj.age}, prof: "${obj.prof}" },`

});

// console.log(resultObj);
console.log('\n{\n    list: [' + resultConsol + '\n    ]\n}\n');

