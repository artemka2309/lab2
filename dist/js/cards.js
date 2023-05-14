    const cardList = document.getElementById('card-list');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupButton = document.querySelector('.popup-button');
    const popupClose = document.querySelector('.popup-close');
    const popupSubmit = document.querySelector('.popup-submit');
    const deleteSelectedButton = document.querySelector('.delete-selected');
    const cards = cardList.querySelectorAll('.card');

    function addCard(type, number, activity) {
        const card = document.createElement('div');
        card.classList.add('card', 'border', 'border-gray-300', 'rounded-md', 'p-4');
        card.innerHTML = `
          <div class="type text-lg font-bold mb-2 text-gray-700">${type}</div>
          <div class="number text-2xl font-bold mb-4 text-gray-900">${number}</div>
          <div class="activity text-sm font-medium ${activity ? 'text-green-500' : 'text-red-500'}">${activity ? 'Активна' : 'Закончился срок обслуживания карты'}</div>
          <button class="delete absolute top-0 right-0 mt-2 mr-2 text-3xl text-gray-500 hover:text-red-500 focus:text-red-500 transition duration-300 ease-in-out">&times;</button>
        `;
        cardList.appendChild(card);
      
        const deleteButton = card.querySelector('.delete');
        if (deleteButton) {
          deleteButton.addEventListener('click', () => {
            deleteCard(card);
          });
        }
      
        card.addEventListener('click', () => {
          toggleSelected(card);
        });
      }

    function deleteCard(card) {
        cardList.removeChild(card);
    }

    function deleteSelectedCards() {
        const selectedCards = cardList.querySelectorAll('.card.selected');
        selectedCards.forEach(card => {
        deleteCard(card);
        });
    }

    function toggleSelected(card) {
        card.classList.toggle('selected');
        card.classList.toggle('bg-gray-200');
    }

    popupButton.addEventListener('click', () => {
        popupOverlay.classList.remove('hidden');
    });

    popupClose.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
    });

    popupSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const cardType = document.getElementById('card-type').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        addCard(cardType, `**** **** **** ${cardNumber.slice(-4)}`, true);
        document.getElementById('card-number').value = '';
        document.getElementById('card-type').value = 'Visa';
        document.getElementById('card-expiry').value = '';
        popupOverlay.classList.add('hidden');
    });

    deleteSelectedButton.addEventListener('click', () => {
        deleteSelectedCards();
    });

    cards.forEach(card => {
        const deleteButton = card.querySelector('.delete');
        if(deleteButton) {
          deleteButton.addEventListener('click', () => {
            deleteCard(card);
          });
        }
        card.addEventListener('click', () => {
          toggleSelected(card);
        });
      });