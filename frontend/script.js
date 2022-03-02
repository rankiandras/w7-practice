function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}


const menuButton = () => {
    return `
    <button>
        <svg width="40" heigth="40">
            <rect width="20" height="2" />
            <rect width="20" height="2" />
            <rect width="20" height="2" />
        </svg>
        // <span>button</span>
    </button>
    `
}


// Components
const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `
}

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div ="card">
        <h1>${name}</h1>
        <h2>${short}</h2>
        <p>${population}</p>
        <img src="${flag}">
        <p>${continent}</p>
    </div>
    `;
}

// menubutton

const loadEvent = async _ => {
    //Get Data    
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    
    
    //Process Data
    let countries = countryArr.map(function(country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    })
    console.log(countries);

    let cards = "";
    for (const country of countries) {
        cards += countryCard(country.name, country.short, country.population, country.flag, country.continent)       
    }
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton))
    rootElement.insertAdjacentHTML("beforeend", cards)
}
// ez itt kurva gáz, valami van vele márc. 2. session felvételéről visszanézni!!
    // const getMenuButton = document.getElementById
    // getMenuButton.addEventListener("click", (event) => {
    //     event.target.classList.toggle("clicked");
    // });

window.addEventListener("load", loadEvent);