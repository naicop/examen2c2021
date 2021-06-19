let randomlinks=new Array()

randomlinks[0]="https://forms.gle/yN6ADk5pNAbSovmz5"
randomlinks[1]="https://forms.gle/9HgZ2uJojo7uwsp48"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

