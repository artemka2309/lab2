function calculatePrice() {
    const basePrice = 3000; // базовая стоимость бронирования за день
    const bookingDays = document.getElementById("booking-days").value;
    let totalPrice = basePrice * bookingDays;
    
    // применяем скидку, если количество дней бронирования больше 3
    if (bookingDays > 3) {
      const additionalDiscounts = Math.floor((bookingDays - 3) / 3) * 5; // вычисляем количество скидок по 5%
      const maxDiscount = 25; // максимальная скидка в 25%
      const discount = Math.min(additionalDiscounts, maxDiscount); // применяем максимальную скидку в 25%
      const discountAmount = totalPrice * (discount / 100);
      totalPrice -= discountAmount;
    }
  
    document.getElementById("total-price").textContent = totalPrice;
  }