// Функция, которая возвращаем fetch
const useRequest = (width, height) => {

  return fetch(`https://picsum.photos/${width}/${height}`)
    .then((response) => {
      console.log('response', response);
      message.innerHTML = ''
      return response.url;
    })
    .catch(() => { console.log('error') });
}
  
 
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
// Ищем кнопку для сброса результата вывода
const btnClear = document.querySelector('.j-btn-clear');
// Ищем ноду для вставки сообщения
const message = document.querySelector('.message');


// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', async () => {
  const inp1 = Number(document.querySelector('.j-inp-1').value);
  const inp2 = Number(document.querySelector('.j-inp-2').value);
  if (inp1 >= 100 && inp1 <= 300 && inp2 >= 100 && inp2 <= 300) {
        console.log('start');
  
        const requestResult = await useRequest(inp1, inp2);
        console.log('requestResult', requestResult);
        resultNode.innerHTML += `<img style="display: inline-block; margin: 20px 20px 0 0;" src="${requestResult}"/>`
  
        console.log('end');
    } else {
       message.innerHTML = 'Ошибка! Одно из чисел вне диапазона от 100 до 300'
       console.log('одно из чисел вне диапазона от 100 до 300')
  }
})

btnClear.addEventListener('click', () => {
  resultNode.innerHTML = ''
  message.innerHTML = 'Здесь будет результат запроса'
});