function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// ------------------------Components----------------------------- //
const header = (logo) => {
    return `
    <header>
        <a id='logo'>${logo}</a>
        <button></button>
    </header>
    `
};

// country card

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div>
        <h2>${name}</h2>
        <h2>${short}</h2>
        <h2>${population}</h2>
        <img src="${flag}">
        <h2>${continent}</h2>
    </div>
    `
}

// country cards

const countryCards = (cards) => {
    return`
    <div>
        ${cards}
    </div>
    `
}

const loadEvent = async _ => {
 //-------------------Get data-------------------------//   
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    
 //----------------------process data---------------------//   
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    });
    
    console.log(countries);

    
 //add header HTML   
    const rootElement = document.getElementById('root')
    rootElement.insertAdjacentHTML('beforeend', header('Countries'))

 // add countryCard to HTML   
    
    let content = '';
    for (let country of countries) {
        content += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    }

    rootElement.insertAdjacentHTML('beforeend', countryCards(content))

}

window.addEventListener("load", loadEvent)