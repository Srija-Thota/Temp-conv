const celsiusE1=document.getElementById("celsius")
const fahrenheitE1=document.getElementById("fahrenheit")
const kelvinE1=document.getElementById("kelvin")

function convertTemp(event, element) {
    const curVal = +element.value;
  
    switch (element.name) {
      case "celsius":
        kelvinE1.value = (curVal + 273.32).toFixed(2);
        fahrenheitE1.value = (curVal * 1.8 + 32).toFixed(2);
        break;
      case "fahrenheit":
        celsiusE1.value = ((curVal - 32) / 1.8).toFixed(2);
        kelvinE1.value = ((curVal - 32) / 1.8 + 273.32).toFixed(2);
        break;
      case "kelvin":
        celsiusE1.value = (curVal - 273.32).toFixed(2);
        fahrenheitE1.value = ((curVal - 273.32) * 1.8 + 32).toFixed(2);
        break;
      default:
        break;
    }
  }
  
  function resetFields() {
    celsiusE1.value = "";
    fahrenheitE1.value = "";
    kelvinE1.value = "";
  }