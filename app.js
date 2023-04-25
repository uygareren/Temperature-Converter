const celcius = document.getElementsByClassName("celcius")[0];
const fahrenheit = document.getElementsByClassName("fahrenheit")[0];



celcius.addEventListener("input",()=>{
    const c = parseFloat(celcius.value);
    const f = (c * 9 / 5) + 32;
    fahrenheit.value = parseFloat(f.toFixed(2))
});


fahrenheit.addEventListener("input", ()=>{
    const f = parseFloat(fahrenheit.value);
    const c = (f - 32) * 5 / 9;
    celcius.value = parseFloat(c.toFixed(2))

})