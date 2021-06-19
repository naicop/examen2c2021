let randomlinks=new Array()

randomlinks[0]="https://forms.gle/BfiWAUyzH9EaHfdH7"
randomlinks[1]="https://forms.gle/7AUVZDLR9dQ26qXa6"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

