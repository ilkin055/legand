let sliderArea = document.getElementById("slider")
let sliderItem = document.getElementsByClassName("sliderItem")
let sliderItems = document.getElementsByClassName("sliderItems")

console.log(sliderArea);
console.log(sliderItem);

let size = 1280;
let startSize = 0;
let currentSlider = 1;

function left(){
if(currentSlider == 1) {
    startSize = (sliderItem.length-1) * size
    sliderItem[0].style.marginLeft = `-${startSize}px`
    currentSlider =sliderItem.length;
}else{
    startSize = startSize - size
    sliderItem[0].style.marginLeft = `-${startSize}px`
    currentSlider--;
}

}
function right(){

    if(currentSlider == sliderItem.length+1) {
        startSize = 0
        currentSlider = 1;
        sliderItem[0].style.marginLeft = `-${startSize}px`
        sliderItem[0].style.transition = "none"
    }else{
        sliderItem[0].style.marginLeft = "0.5s ease-in-out"
        console.log(sliderItems);
        startSize = startSize + size
        sliderItem[0].style.marginLeft = `-${startSize}px`
        currentSlider++;
    }
    
}
let time =setInterval(()=>{
    right()
},5000);
sliderArea.addEventListener("mouseover", function () {

  clearInterval(time)
})

sliderArea.addEventListener("mouseleave", function () {
   time = setInterval(() => {
        right()
    },5000);
})

sliderItems[0].innerHTML +=sliderItem[0].innerHTML