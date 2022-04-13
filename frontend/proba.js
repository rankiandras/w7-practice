const pizzaForm = () => {
    return `
    <form action="/ENDPOINT" method="post">
        <input type="checkbox" name="pizzasauce" value="pizzasauce">
        <label for="vehicle1"> I have a bike</label><br>
        <input type="checkbox" name="vehicle2" value="Car">
        <label for="vehicle2"> I have a car</label><br>
        <input type="checkbox" name="vehicle3" value="Boat" checked>
        <label for="vehicle3"> I have a boat</label><br><br>
        <input type="submit" value="Submit">
    </form>
    `
}