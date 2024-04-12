const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Разрешить все домены во время разработки
app.use(cors());

// Обрабатываем GET запросы на определенный путь
app.get('/fetch-image', async (req, res) => {
    try {
        // Получаем URL изображения из параметров запроса
        const { imageUrl } = req.query;

        // Перенаправляем запрос к исходному серверу
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer'
        });

        // Устанавливаем тип содержимого в ответе
        res.set('Content-Type', 'image/png');

        // Отправляем полученные данные
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('An error occurred');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
