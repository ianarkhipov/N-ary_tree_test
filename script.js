
//не удалось воткнуть списком, поэтому объявил постоянную и обернул в нее
const servicesData = {
  "services": [
    {
      "id": 1,
      "head": null,
      "name": "Проф.осмотр",
      "node": 0,
      "price": 100.0,
      "sorthead": 20
    },
    {
      "id": 2,
      "head": null,
      "name": "Хирургия",
      "node": 1,
      "price": 0.0,
      "sorthead": 10
    },
    {
      "id": 3,
      "head": 2,
      "name": "Удаление зубов",
      "node": 1,
      "price": 0.0,
      "sorthead": 10
    },
    {
      "id": 4,
      "head": 3,
      "name": "Удаление зуба",
      "node": 0,
      "price": 800.0,
      "sorthead": 10
    },
    {
      "id": 5,
      "head": 3,
      "name": "Удаление 8ого зуба",
      "node": 0,
      "price": 1000.0,
      "sorthead": 30
    },
    {
      "id": 6,
      "head": 3,
      "name": "Удаление осколка зуба",
      "node": 0,
      "price": 2000.0,
      "sorthead": 20
    },
    {
      "id": 7,
      "head": 2,
      "name": "Хирургические вмешательство",
      "node": 0,
      "price": 200.0,
      "sorthead": 10
    },
    {
      "id": 8,
      "head": 2,
      "name": "Имплантация зубов",
      "node": 1,
      "price": 0.0,
      "sorthead": 20
    },
    {
      "id": 9,
      "head": 8,
      "name": "Коронка",
      "node": 0,
      "price": 3000.0,
      "sorthead": 10
    },
    {
      "id": 10,
      "head": 8,
      "name": "Слепок челюсти",
      "node": 0,
      "price": 500.0,
      "sorthead": 20
    }
  ]
};



//функция ищет в списке свойство id с нужным номером и принимает его в качестве аргумента
//выбирает из постоянной массив, далее ищет в нем элемент service с указанным свойством id
//строго сравнивает, тот ли id записывает в функцию в качестве аргумента
function getServiceById(id) {
  return servicesData.services.find(service => service.id === id);
}

//обращаемся к html, находим кнопку по id, вешаем listener на клик по кнопке, который вызывает функцию...
document.getElementById('showServiceButton').addEventListener('click', showServiceInfo);


//...которая записывает в постоянную service результат вызова и работы функции getServiceById с указанием конкретного id
//на данном этапе id вносится вручную
//затем обращается к документу, ищет целевой div по его id, с помощью параметра textContent добавляет в виде строк
//значения name и service

let lastIdAdded = 1

function showServiceInfo() {
  const service = getServiceById(lastIdAdded)
  lastIdAdded++
  const targetDiv = document.getElementById('serviceInfo')
  targetDiv.appendChild(renderProduct(service))
}

function renderProduct(service) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute('id', `product_${service.id}`)
  // adding paragraph inside
  const p = document.createElement("p");
  p.innerText = `${service.name} - ${service.price}`
  newDiv.appendChild(p)
  // adding expand button
  const button = document.createElement('button')
  button.setAttribute('id', `expand_button_${service.id}`)
  button.innerText = "expand"
  button.addEventListener('click', ()=>expandProduct(service.id))
  newDiv.appendChild(button)
  return newDiv
}

function expandProduct(productId) {
  const productDiv = document.getElementById(`product_${productId}`)
  if (productDiv.getAttribute("expanded") === "true") {
    const expandElement = document.getElementById(`expand_element_${productId}`)
    expandElement.remove()
    productDiv.setAttribute("expanded", "false")
    return
  }
  const p = document.createElement("p");
  p.innerText = `-- I am expanded --`
  p.setAttribute("id", `expand_element_${productId}`)
  productDiv.appendChild(p)
  productDiv.setAttribute("expanded", "true")
}

