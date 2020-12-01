// Now write a function that puts a line through the text of the first <li> in the Arguments <ul>. (Look up "first child" if you don't know what query to use, although there are other solutions). Since it always makes the same query, and changes it in the same way, this function requires no parameters!
const strikeThroughFirstLI = () => {
    const firstLI = document.querySelector('li');
    firstLI.style.textDecoration = 'line-through';
}

// Now call it! The first list item should get what's known as a "strikethrough" style.
strikeThroughFirstLI();

// Write a function that takes in a string representing an id and a string representing a url. The function should set the image with that ID to have that url as its image source.
const stringRepId = (id, url) => {
    const imgId = document.querySelector(id)
    imgId.src = url;
}

// Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
stringRepId('#image-1', 'https://i.imgur.com/HfBfZeq.jpeg')
stringRepId('#image-2', 'https://i.imgur.com/G0qCIMm.jpg')
stringRepId('#image-3', 'https://i.imgur.com/hmhV5Gy.jpeg')

// This one also doesn't require any parameters: write a function that always removes the last <li> from the Arguments <ul> (try looking up "last child" and the .remove method). This is a bit tricky, but doable!
function removeLastLi() {
    const lastLi = document.querySelector('ul > li:last-child');
    lastLi.remove();
}

// Now use it to remove the last two items from that list. You'll need to call it twice!
removeLastLi();
removeLastLi();

// Write a function that takes in a node element and appends it to the Arguments <ul>.
function addArgument(element) {
    const arguments = document.querySelector('ul#arguments');
    arguments.appendChild(element);
}

// Let's use it! Create an image element and pass it into your function. (Note that a <ul> doesn't HAVE to have an <li> as its only children! Though ideally it should...) You'll know you've succeeded when the image shows up at the end of the Arguments list. Note that the image doesn't HAVE to have a src attribute... though it does if you want to see an actual IMAGE; otherwise the way to check would be to use your dev tools to check the DOM and see if the img tag got appended.
const newImage = document.createElement('img');
newImage.src = 'https://i.imgur.com/QfQFJ4m.jpeg';
addArgument(newImage);

// Write a function that takes in an image element and makes its height 30 pixels.
function thirtyPixel(image) {
    image.style.height = '30px';
}

// Let's use it. Query and then pass in to the function one of the images in the Image Area. It should become a small 30-pixel image.
const image1 = document.querySelector('#image-1');
thirtyPixel(image1);

// Write a function that takes in an element and gives it the class invisible.
function makeInvisible(element) {
    element.className = 'invisible';
}

// Now query an element on the page and pass it into that function. You should see it disappear! (Feel free to check the CSS file to see how this class works.)
const disappearingTextFelid = document.querySelector('input');
makeInvisible(disappearingTextFelid);
