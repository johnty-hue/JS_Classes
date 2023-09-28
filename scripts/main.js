

/**
 * An animal with a name and color
 */
class Animal {
    constructor(species = "Cat", color = "green", sound = "Meaow") {
        this.species = species
        this.color = color
        this.sound = sound
    }

    makeSound() {
        alert(this.sound)
    }
}

function main() {
    const button = document.getElementById('btn')

    const cat = new Animal('Cat', 'red', 'Meaow')
    const dog = new Animal("Dog", 'White with spots', 'bark')

    button.onclick = (ev) => {
        cat.makeSound()
        dog.makeSound()
    }
}

window.onload = function (ev) {
    main();
}