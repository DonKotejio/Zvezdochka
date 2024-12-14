// URL сервера
const url = 'http://127.0.0.1:8000/'

// Функция для получения данных с сервера и обновления таблицы
function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Найти таблицу в документе
            const tableBody = document.querySelector('#data-table tbody');

            // Очистить существующие данные
            tableBody.innerHTML = '';

            // Добавить новые строки данных
            data.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', Error);
        });
}

// Функция для отправки данных на сервер и обновления таблицы
function postData(item) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(data => {
        // Добавить новую строку в таблицу
        const tableBody = document.querySelector('#data-table tbody');
        const row = document.createElement('tr');
        Object.values(data).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    })
    .catch(error => {
        console.error('Ошибка отправки данных:', error);
    });
}

// Обработчик формы
document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const groupa = document.getElementById('groupa').value;
    const gender = document.getElementById('gender').value;
    const item = { id: parseInt(id), name: name, value: value };
    postData(item);
});

// Загрузка данных при загрузке страницы
window.onload = loadData;