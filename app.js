let randomlinks=new Array()

randomlinks[0]="https://forms.gle/6LL7jD1mzg8aXzWc6"
randomlinks[1]="https://forms.gle/19ygQbc4BAvZUGCn9"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

