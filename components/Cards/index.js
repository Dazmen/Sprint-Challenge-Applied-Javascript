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

//

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        
        // const keys = Object.keys(response.data.articles);
        const values = Object.values(response.data.articles);
        console.log(values);
        const cardCont = document.querySelector('.cards-container');
        for(let i in values){
            let value = values[i];
            for(i = 0; i < value.length; i++){
                cardCont.append(ArticleMaker(value[i]));
            }
        }
    })
    .catch(error => {
        console.log('The data was not returned ', error);
    })

function ArticleMaker(d){
    const card = document.createElement('div');
    card.classList.add('card');

    const headLine = document.createElement('div');
    headLine.textContent = d.headline;
    headLine.classList.add('headline');
    card.append(headLine);

    const author = document.createElement('div');
    author.classList.add('author');
    card.append(author);

    const imgCont = document.createElement('div');
    imgCont.classList.add('img-container');
    author.append(imgCont);

    const img = document.createElement('img');
    img.src = d.authorPhoto;
    imgCont.append(img);

    const authorSig = document.createElement('span');
    authorSig.textContent = d.authorName;
    author.append(authorSig);

    return card;
}