let randomlinks=new Array()

randomlinks[0]="http://freewarejava.com"
randomlinks[1]="http://javascriptkit.com"
randomlinks[2]="http://dynamicdrive.com"
randomlinks[3]="http://cnn.com"
randomlinks[4]="http://www.geocities.com"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

