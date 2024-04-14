//let toggleTheme = document.getElementsByClassName('.themeChanger')
//const themeSystem = localStorage.getItem("themeSystem") || "dark"

//toggleTheme.addEventListener('click', () => {
  //let oldTheme = localStorage.getItem("themeSystem") || "dark";
 // let newTheme = oldTheme=="light" ? "dark" : "light"

 // localStorage.setItem("themeSystem", newTheme)
 // defineCurrentTheme(newTheme)
//})

//function defineCurrentTheme(){
 
  //document.documentElement.setAttribute("data-theme", theme)
  //if(theme == "light")
 // {

 // }
 // else
 // {

 // }

//}

const  toggleWrapper = document.getElementById('toggleWrapper');

toggleWrapper.addEventListener('change', () => {
  document.body.classList.toggle('light');
})



//const textMask = document.getElementsByClassName('textMask');
 // textMask.addEventListener('click', function revealParagraph(){
  //  textMask.classList.toggle('active');
 // });

  const textMasks = document.getElementsByClassName('textMask');

  // Iterando sobre cada elemento com a classe 'textMask'
  for (let i = 0; i < textMasks.length; i++) {
    textMasks[i].addEventListener('click', function revealParagraph() {
      this.classList.toggle('active'); // 'this' se refere ao elemento atual em que o evento ocorreu
    });
  }

 
    document.querySelectorAll('.mouseAnimation').forEach(item => {
      const image = item.querySelector('img');
      const text = item.querySelector('.carousel-caption .projectText');
  
      item.addEventListener('mouseenter', () => {
          image.style.filter = 'blur(7px) brightness(0.7)'; 
          text.classList.add('textHover'); 
      });
  
      item.addEventListener('mouseleave', () => {
          image.style.filter = 'none'; 
          text.classList.remove('textHover'); 
      });
    });
