

/**
 * An animal with a name and color
 */
class Animal {
    constructor(species = "Cat", color = "green") {
        this.species = species;
        this.color = color;
    }

    makeSound() {
        const spcs = this.species.toLowerCase();

        if (spcs === "cat") {
            alert("meaow")
        } else if (spcs === "dog") {
            alert("bark")
        }
    }
}

function main() {
    const button = document.getElementById('btn')

    const cat = new Animal()
    const dog = new Animal("dog")


    button.onclick = (ev) => {
        cat.makeSound()
        dog.makeSound()
    }
}

window.onload = function (ev) {
    main();
}