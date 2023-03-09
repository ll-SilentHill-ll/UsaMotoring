const checkboxesMake = document.querySelectorAll('input[name="make"]');
const checkboxesColor = document.querySelectorAll('input[name="color"]');
const checkboxesFuel = document.querySelectorAll('input[name="fuel"]');
const checkboxesTransmission = document.querySelectorAll('input[name="transmission"]');
const checkboxesDrive = document.querySelectorAll('input[name="whille"]');
const cars = document.querySelectorAll('.item');
const yearStartInput = document.getElementById('year-start');
const yearEndInput = document.getElementById('year-end');

function filterCars() {
  const selectedMakes = Array.from(checkboxesMake)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const selectedColors = Array.from(checkboxesColor)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const selectedFuels = Array.from(checkboxesFuel)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const selectedTransmissions = Array.from(checkboxesTransmission)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const selectedDrives = Array.from(checkboxesDrive)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const yearStart = parseInt(yearStartInput.value);
  const yearEnd = parseInt(yearEndInput.value);

  cars.forEach((car) => {
    const carMake = car.dataset.make;
    const carColor = car.dataset.color;
    const carFuel = car.dataset.fuel;
    const carTransmission = car.dataset.transmission;
    const carDrive = car.dataset.whille;
    const carYear = parseInt(car.dataset.year);

    const makeVisible = selectedMakes.length === 0 || selectedMakes.includes(carMake);
    const colorVisible = selectedColors.length === 0 || selectedColors.includes(carColor);
    const fuelVisible = selectedFuels.length === 0 || selectedFuels.includes(carFuel);
    const transmissionVisible =
      selectedTransmissions.length === 0 || selectedTransmissions.includes(carTransmission);
    const driveVisible = selectedDrives.length === 0 || selectedDrives.includes(carDrive);
    const yearVisible =
      (isNaN(yearStart) || carYear >= yearStart) && (isNaN(yearEnd) || carYear <= yearEnd);

    if (makeVisible && colorVisible && fuelVisible && transmissionVisible && driveVisible && yearVisible) {
      car.style.display = "";
    } else {
      car.style.display = "none";
    }
  });
}

checkboxesMake.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCars);
});

checkboxesColor.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCars);
});

checkboxesFuel.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCars);
});

checkboxesTransmission.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCars);
});

checkboxesDrive.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCars);
});

yearStartInput.addEventListener('input', filterCars);
yearEndInput.addEventListener('input', filterCars);
