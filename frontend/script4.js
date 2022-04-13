function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// ------------------------Components----------------------------- //
const menuButton = _ => {
    return `
    <button id='menuButton'>
        <svg width="40" height='40'>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
    </button>
    `;
}

const header = (logo, button) => {
    return `
    <header>
        <a id='logo'>${logo}</a>
        ${button()}
    </header>
    `
};

const countryCard = (name, short, continent, population, flag) => {
    return `
    <div>
        <h3>${name}</h3>
        <h3>${short}</h3>
        <h3>${continent}</h3>
        <h3>${population}</h3>
        <img src='${flag}'>
    </div>
    `;
}

const countryCardsDiv = () => {
return '<div id="countries"></div>'
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
       const rootElement = document.getElementById('root');
       rootElement.insertAdjacentHTML('beforeend',
        header('Countries', menuButton));

       
       rootElement.insertAdjacentHTML('beforeend', countryCardsDiv());
       const countryCardsDivElement = document.getElementById('countries')
       

       const countryCards = () => countries.map(country => countryCard(country.name, country.short, country.continent, country.population, country.flag)).join('') // ezt a sort váltja ki az utolsó sor a loadEventen belül, ami a countryCardsDiv-be beilleszti a countryCardokat, de úgy, hogy nem meghívja a függvényt, hanem ott van megírva
    //    rootElement.insertAdjacentHTML('beforeend', countryCards()) // ezzel a megoldással nincsen countries id-jú div, simán a root id-jú divbe mennek a countryCard-ok
       countryCardsDivElement.insertAdjacentHTML('beforeend', countryCards()) // ezzel a korábban létrehozott countries divbe rakom az egyes countryCard-okat
    //    countryCardsDivElement.insertAdjacentHTML('beforeend', countries.map(country => countryCard(country.name, country.short, country.continent, country.population, country.flag)).join('')) // ezzel a megoldással a beillesztés argumentmaként nem meghívom a countryCards függvényt, hanem ide írom be

       const getMenuButton = document.getElementById('menuButton')
       getMenuButton.addEventListener('click', (event) => {
            event.target.classList.toggle('clicked');
       })


}
window.addEventListener("load", loadEvent)   