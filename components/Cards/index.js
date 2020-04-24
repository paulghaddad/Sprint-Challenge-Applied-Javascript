// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(cardData) {
    const cardContainer = document.createElement('div')
    const headline = document.createElement('div')
    const authorContainer = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const byline = document.createElement('span')

    cardContainer.classList.add('card')
    headline.classList.add('headline')
    authorContainer.classList.add('author')
    imageContainer.classList.add('img-container')

    headline.innerText = cardData.headline
    imageContainer.setAttribute('src', cardData.authorPhoto)

    cardContainer.appendChild(headline)
    imageContainer.appendChild(image)
    authorContainer.appendChild(imageContainer)
    cardContainer.appendChild(authorContainer)

    return cardContainer
}

function createCards() {
  axios.get(' https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const topicsContainer = document.querySelector('.cards-container')
    const topics = response.data.articles

    for (const topic in topics) {
      const articles = topics[topic]
      articles.map(articleData => {
        const cardContainer = createCard(articleData)
        topicsContainer.appendChild(cardContainer)
      })
    }
  })
  .catch(error => console.log(error))
}

createCards()
