const makeSelect = document.getElementById('make');
const modelSelect = document.getElementById('model');

makeSelect.addEventListener('change', () => {
    // Очищаем список моделей
    modelSelect.innerHTML = '<option value="">Выберите модель автомобиля</option>';
    // Если марка автомобиля выбрана, разблокируем поле для выбора модели
    if (makeSelect.value !== '') {
        modelSelect.disabled = false;
    } else {
        modelSelect.disabled = true;
    }
});

// Загружаем модели автомобилей при выборе марки из списка
makeSelect.addEventListener('change', () => {
    if (makeSelect.value === 'Audi') {
        modelSelect.innerHTML = `
                    <option value="A1">A1</option>
                    <option value="A3">A3</option>
                    <option value="A4">A4</option>
                    <option value="A5">A5</option>
                    <option value="A6">A6</option>
                `;
    } else if (makeSelect.value === 'BMW') {
        modelSelect.innerHTML = `
                    <option value="1 Series">1 Series</option>
                    <option value="2 Series">2 Series</option>
                    <option value="3 Series">3 Series</option>
                    <option value="4 Series">4 Series</option>
                    <option value="5 Series">5 Series</option>
                `;
    } else if (makeSelect.value === 'Mercedes-Benz') {
        modelSelect.innerHTML = `
                    <option value="A-Class">A-Class</option>
                    <option value="B-Class">B-Class</option>
                    <option value="C-Class">C-Class</option>
                    <option value="E-Class">E-Class</option>
                    <option value="S-Class">S-Class</option>
                `;
    } else if (makeSelect.value === 'Toyota') {
        modelSelect.innerHTML = `
                    <option value="Corolla">Corolla</option>
                    <option value="Camry">Camry</option>
                    <option value="RAV4">RAV4</option>
                    <option value="Highlander">Highlander</option>
                    <option value="Land Cruiser">Land Cruiser</option>
                `;
    } else if (makeSelect.value === 'Volkswagen') {
        modelSelect.innerHTML = `
                    <option value="Polo">Polo</option>
                    <option value="Golf">Golf</option>
                    <option value="Passat">Passat</option>
                    <option value="Tiguan">Tiguan</option>
                    <option value="Touareg">Touareg</option>
                `;
    }
});

// Разблокируем кнопку "Выбрать", если все обязательные поля заполнены
const requiredFields = document.querySelectorAll('[required]');
const submitButton = document.querySelector('button[type="submit"]');
requiredFields.forEach(field => {
    field.addEventListener('input', () => {
        let allFilled = true;
        requiredFields.forEach(field => {
            if (field.value === '') {
                allFilled = false;
            }
        });
        if (allFilled) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});