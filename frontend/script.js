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

const loadEvent = () => {

    const rootElement = document.getElementById('root')
    rootElement.insertAdjacentHTML('beforeend', form(formHTML))

}

window.addEventListener('load', loadEvent)