
const loadEvent = () => {
    const formHTML = `
        <form>
            <input type='text'>
            <input type='text'>
            <input type='text'>
            <button>Button</button>
        </form>
        `;

    const form = (htmlStructure) => {
        return htmlStructure;
}

    
    
    
    const rootElement = document.getElementById('root')
    rootElement.insertAdjacentHTML('beforeend', form(formHTML))

}
window.addEventListener('load', loadEvent)