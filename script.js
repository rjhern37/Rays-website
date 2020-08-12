// alert('connected')

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
} else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dots');

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('button clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = './assets/css/default.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = './assets/css/blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = './assets/css/green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = './assets/css/purple.css'
    }

    localStorage.setItem('theme', mode)
}