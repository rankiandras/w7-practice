const formHTML = `
<form>
    <input type='text' name='input1' id='input1'><br>
    <input type='text' name='input2' id='input2'><br>
    <input type='text' name='input3' id='input3'><br>
    <select name="animals" id="animals">
        <option value="both">both</option>
        <option value="cats">cats</option>
        <option value="dogs">dogs</option>
        </select>
    <button>Send</button>
</form>
`;

const form = (htmlStructure) => {
return htmlStructure;
}


const loadEvent = () => {
   
    const rootElement = document.getElementById('root')
    rootElement.insertAdjacentHTML('beforeend', form(formHTML))
    
    const formElement = rootElement.querySelector('form')

    const inputElements = document.querySelectorAll('input')
    console.log(typeof inputElements);
    console.log(Array.isArray(inputElements));
    Array.from(inputElements).map(function(inputElement) {
        inputElement.addEventListener('input', (e) => {
            if (e.target.value.length > 3) {
                console.log(e.target.value);
            }
        })
    })


/* 
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target);
})
 */
    formElement.querySelector('select').addEventListener('input', (e) => {
        console.log(e.target.value);
    })

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target);         
    })


}
window.addEventListener('load', loadEvent)