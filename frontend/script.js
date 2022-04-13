function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// --------------Components----------------- //
const header = (logo) => {
    return `
    <header>
        <a id='logo'>${logo}</a>
        <button></button>
    </header>
    `
};

// country card generator
const countryCard = (country) => {
    return `
    <div class='card'>
        <h1>${country.name}</h1>
        <h2>${country.short}<h2>
        <p>${country.continent}</p>
        <img src='${country.flag}'>
        <p>${country.population}</p>
    </div>
    `
}
// country cards container 
const countryCards = (contentHTML) => {
    return `
    <section class='country-cards'>${contentHTML}</section>
    `
}


const loadEvent = async _ => {
 //get data   
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    
 //process data   
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    });
    
    console.log(countries);

    
 //add header HTML   
    const rootElement = document.getElementById('root')
    rootElement.insertAdjacentHTML('beforeend', header('Countries'))
    
 // create country HTML
    let countryHTML = '';
    countries.forEach(country => {
        countryHTML += countryCard(country);        
    });

 // add cards HTML
    rootElement.insertAdjacentHTML('beforeend', countryCards(countryHTML))
    

}

window.addEventListener("load", loadEvent)