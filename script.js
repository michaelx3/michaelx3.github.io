window.addEventListener("resize", function(){
    slider.scrollLeft = 0;
    //We have to calculate posicioninicial all over again when resize
    posicionInicial = slider.scrollLeft;
    box_middle.size = posicionInicial + size;
    box_left.size = posicionInicial;
    box_right.size = box_middle.size + size; 
    slider.scrollLeft = box_middle;
});

var slider = document.getElementById("slider");
var box = document.getElementsByClassName("box");

// Size is gonna be width + box margin
var size = 250 + 30;


    /*
This is the scroll position where the first element in our silde is centered
We get this position because we used scroll-snap-aling: center back in our CSS
This will help us figure out where is the center located in the other items in our slide
And it will keep our elements centered and pretty <3
*/
var posicionInicial = slider.scrollLeft;

class BoxElement {
    constructor(size, element){
        this.size = size;
        this.element = element;
    }
    isCenter() {
        this.element.style.opacity = "1"
    }
    isNotCenter(){
        this.element.style.opacity = "1";
    }
}
var box_middle = new BoxElement(posicionInicial + size, box[1]);
var box_left = new BoxElement(posicionInicial, box[0]);
var box_right = new BoxElement(box_middle.size+ size, box[2]);


function hide(arrow){
    arrow.style.opacity = "0";
}
function show(arrow){
    arrow.style.opacity = "1";
}
var arrow_left = document.getElementById("left-arrow");
var arrow_right = document.getElementById("right-arrow");


//I want the middel box to be shown in the middle by default
slider.scrollLeft = size;

//movement with arrows
arrow_left.addEventListener("click", function(){
    slider.scrollLeft -= size

});

arrow_right.addEventListener("click", function(){
    slider.scrollLeft += size;
});


/* I listen to scroll event in the slide and detect when each box is center
*/
slider.addEventListener("scroll", function(){
    let position = slider.scrollLeft;
    console.log(slider.scrollLeft);
    if(position < box_middle.size - 30) //I use 30 as a movement umbral
    {

        box_left.isCenter();
        box_middle.isNotCenter();
    }
    else if(position > box_middle.size + 30 ){
        box_right.isCenter();
        box_middle.isNotCenter();
    }
    else{
        show(arrow_right);
        show(arrow_left);
        box_middle.isCenter();
        box_right.isNotCenter();
        box_left.isNotCenter();
    }
});

