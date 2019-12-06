/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


//Plan Of Attack:

//Step 1: Create Component Function

//Step 2: create additional classes for img to toggle display:none

//----2.1: Will need to do some weird if/else statment to toggle classes. Most likely a counter resets once it is > 4 (once it is 4 the associated img would toggle to img-on) and have the img starting values vary. This way there is a starting img and there SHOULD be no conflicts. When left/right btn is clicked it adds/subtracts to it to rotate the images. 

//----2.2: Or put the img's in an array and do a similiar thing with the counter but with the buttons and have them access the index of the array of images. This might be more DRY than 2.1

//----2.3: Bonus objective! use setInterval to automatically rotate the images on a timer. Would need to tie the clearInterval() to a btn click event to prevent that annoying and obnoxious auto rotation when you want to look at something in particular.

//----2.3.1: Bonus bonus objective! Add a 'mouseleave' event on the carousel to reinitiate the setInterval() so the carousel will start auto rotating again once the user is done looking at the particular image(or in the future article/headline/whatever)

//step 3: add/finalize button functionality

//step 4: Deal with animation later once I actually have the time to spend to learn it.

function CarouselMaker(){
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  carousel.append(leftBtn);

  const img1 = document.createElement('img')
  img1.src = 'assets\carousel\computer.jpeg'
  carousel.append(img1);

 

  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  carousel.append(rightBtn);

  return carousel;
}

const carouselCont = document.querySelector('.carousel-container');
carouselCont.append(carouselMaker());