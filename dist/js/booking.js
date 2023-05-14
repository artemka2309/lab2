const today = new Date();
const startDateInput = document.getElementById("start-date-input");
startDateInput.valueAsDate = today;


function calculatePrice() {
  const startDate = new Date(document.getElementById("start-date-input").value);
  const endDateInput = document.getElementById("end-date-input");
  const endDate = new Date(endDateInput.value);
  const bookingDaysInput = document.getElementById("booking-days");
  let bookingDays = parseInt(bookingDaysInput.value);
  if (isNaN(bookingDays)) {
    return;
  }
  const pricePerDay = 3000;
  const totalPrice = pricePerDay * bookingDays;
  if (endDate.getTime() > startDate.getTime()) {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    bookingDays = diffDays;
    bookingDaysInput.value = diffDays;
    endDateInput.valueAsDate = endDate;
    document.getElementById("total-price").textContent = pricePerDay * diffDays;
  } else {
    bookingDaysInput.value = bookingDays;
    endDateInput.valueAsDate = new Date(startDate.getTime() + bookingDays * 24 * 60 * 60 * 1000);
    document.getElementById("total-price").textContent = totalPrice;
  }
}

document.getElementById("start-date-input").addEventListener("input", calculatePrice);
document.getElementById("end-date-input").addEventListener("input", () => {
  const startDate = new Date(document.getElementById("start-date-input").value);
  const endDateInput = document.getElementById("end-date-input");
  const endDate = new Date(endDateInput.value);
  const bookingDaysInput = document.getElementById("booking-days");
  let bookingDays = parseInt(bookingDaysInput.value);
  if (isNaN(bookingDays)) {
    return;
  }
  if (endDate.getTime() > startDate.getTime()) {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    bookingDays = diffDays;
    bookingDaysInput.value = diffDays;
    document.getElementById("total-price").textContent = 3000 * diffDays;
  } else {
    bookingDaysInput.value = bookingDays;
    document.getElementById("total-price").textContent = 3000 * bookingDays;
  }
});

document.getElementById("booking-days").addEventListener("input", () => {
  const startDate = new Date(document.getElementById("start-date-input").value);
  const bookingDaysInput = document.getElementById("booking-days");
  const bookingDays = parseInt(bookingDaysInput.value);
  if (isNaN(bookingDays)) {
    return;
  }
  const endDateInput = document.getElementById("end-date-input");
  endDateInput.valueAsDate = new Date(startDate.getTime() + bookingDays * 24 * 60 * 60 * 1000);
  document.getElementById("total-price").textContent = 3000 * bookingDays;
});