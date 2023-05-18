let btn = document.getElementById("btn");
btn.addEventListener("click", fetchData);

async function fetchData() {
    try {
        let response = await fetch("https://swapi.dev/api/people/1");
        let data = await response.json();
        
        let container = document.getElementById("container");
        let propertyNames = Object.keys(data);
        let propertyValue = Object.values(data);
        
        for(let i = 0; i < propertyNames.length; i++) {
            let propertyElement = document.createElement("div");
            propertyElement.innerText = `${propertyNames[i]}: ${propertyValue[i]}`;
            container.appendChild(propertyElement);
        }
        return data;
    } catch (error) {
        alert("An error has occurred. Please try again later !");
    }
}