const slides = document.querySelectorAll(".slide");

var counter = 0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`
    }
)
// console.log(slides)

const slideImage=()=>{

    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
        )
    }
    const goNext=()=>{
        counter++;
        if(counter>4)
        {
            counter=1;
        }
        
    slideImage()
}
const goPrev=()=>{
   
    counter--;
    slideImage()
    if(counter<1)
    {
        counter=1;
    }
}
