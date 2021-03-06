// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios'

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // console.log(response)
//  for (let [key, value] of Object.entries(p)) {
//   console.log(`${key}: ${value}`);
// }
    for( const [key, value] of Object.entries(response.data.articles)){
        value.forEach(object => {
           const cardMaker = makeCard(object)
           const cardsContainer = document.querySelector('.cards-container')
           cardsContainer.appendChild(cardMaker)
            // console.log(object)
        })
        
        
        // console.log(`${key}: ${value}`)
    }
    // response.data.articles[i].forEach(item => {
    //     const cardMaker = makeCard(response)
    //     const cardsContainer = document.querySelector('.cards-container')
    //     cardsContainer.appendChild(cardMaker)
    // }) 
})

.catch(error => {
    console.log(error)
})

const makeCard = function(object){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = object.headline
    image.src = object.authorPhoto
    name.textContent = object.authorName

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(name)
    imgContainer.appendChild(image)

    card.addEventListener('click', () => {
        console.log(object.headline)
    })
    
  return card  
}