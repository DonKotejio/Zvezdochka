const serverUrl = 'http://192.168.0.192:8000';

//ссылка
const link = document.createElement('a')
link.href = serverUrl;
link.textContent = 'переход на сервак';
document.body.appendChild(link);
