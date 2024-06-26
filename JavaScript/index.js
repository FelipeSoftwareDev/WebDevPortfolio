const toggleWrapper=document.getElementById("toggleWrapper");toggleWrapper.addEventListener("change",()=>{document.body.classList.toggle("light")});const textMasks=document.getElementsByClassName("textMask");for(let a=0;a<textMasks.length;a++)textMasks[a].addEventListener("click",function(){this.classList.toggle("active")});document.querySelectorAll(".mouseAnimation").forEach(a=>{const b=a.querySelector("img"),c=a.querySelector(".carousel-caption .projectText");a.addEventListener("mouseenter",()=>{b.style.filter="blur(7px) brightness(0.7)",c.classList.add("textHover")}),a.addEventListener("mouseleave",()=>{b.style.filter="none",c.classList.remove("textHover")})});

const observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting === true){
            entry.target.classList.add('reveal')
        }
        else{
            entry.target.classList.remove('reveal')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => observer.observe(element))