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
const countryCard = (name, short, population, flag, continent) => `
    <div class='countryCard'>
        <h2>${name}</h2>
        <h3>${short}</h3>
        <h5>${population}</h5>
        <h4>${continent}</h4>
        <img src='${flag}'>
    </div>
    `

/* 
// ez a feljebb lévő country card generátor kicsit hosszabb változata: ebben van kapcsos zárójel és return a függvény belsejében
const countryCard = (name, short, population, flag, continent) => {
    return `
    <div class='countryCard'>
        <h2>${name}</h2>
        <h3>${short}</h3>
        <h5>${population}</h5>
        <h4>${continent}</h4>
        <img src='${flag}'>
    </div>
    `
}

 */


// country cards 

const countryCards = (countries, callCountryCard) => countries.map(country => `${callCountryCard(country.name, country.short, country.population, country.flag, country.continent)}`).join('') // ezt kiegészítettem egy join() metódussal, hogy a vesszők eltűnjenek

/* 
//a feljebb lévő kicsit hosszabb változata. Itt a függvény belsejében van kapcsos zárójel és return, és létre lett hozva egy toReturn nevű változó, amibe a visszatérési értéket mentjük. 
const countryCards = (countries, callCountryCard) => {
    let toReturn = '';
    countries.map(function (country) {
        toReturn += callCountryCard(country.name, country.short, country.population, country.flag, country.continent)
    })
    return toReturn
}

 */

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
    rootElement.insertAdjacentHTML('beforeend', countryCards(countries, countryCard)) 
}

window.addEventListener("load", loadEvent)