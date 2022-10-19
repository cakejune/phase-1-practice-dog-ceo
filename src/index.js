const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
addEventListener('DOMContentLoaded', (event) => 
{
    const dogContainer = document.querySelector('div#dog-image-container');
    const dogBreedContainer = document.querySelector('ul#dog-breeds');

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => data.message.forEach(createDog))

    function createDog(dogImage)
{
    const dog = document.createElement('img');
    dog.src = dogImage;
    dogContainer.appendChild(dog);
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(resp => resp.json())
// .then(data => data.message.forEach(createBreed))
.then(breeds => console.log(breeds.message))

function createBreed(data)
{
    console.log("Creating Dog Breed.");
    const dogBreed = document.createElement('li');
    dogBreed.textContent = data;
    dogBreedContainer.appendChild(dogBreed);
}



}
);