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


const textMask = document.getElementsByClassName('textMask');
  textMask.addEventListener('click', function(){
    textMask.classList.toggle('active');
  });


