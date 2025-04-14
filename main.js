var canvas = document.getElementById("canvas1")
var ctx = canvas.getContext('2d')
var image_width=500
var image_height=300
var image_x=100
var image_y=100
var image_details=""
var image_name;
function addimage(){
image_details=new Image()
    image_details.onload=uploadImg
    image_details.src=image_name

}
function uploadImg(){
    ctx.drawImage(image_details,image_x,image_y,image_width,image_height)

}
window.addEventListener('keydown',uploadimage)
function uploadimage(e){
var ImageStore=e.keyCode
console.log(ImageStore)
if ((ImageStore>=65 &&ImageStore<=90) || (ImageStore>=97&&ImageStore<=122)){
    alphabetkey()
    document.getElementById('keypressed').innerHTML='you pressed alphabet key'
}
else if (ImageStore>=48&&ImageStore<=57){
    numberkey()
    document.getElementById('keypressed').innerHTML='you pressed number key'
}
else if (ImageStore>=37&&ImageStore<=40){
    arrowkey()
    document.getElementById('keypressed').innerHTML='you pressed arrow key'
}
else if (ImageStore==17||ImageStore==18||ImageStore==27){
    specialkey()
    document.getElementById('keypressed').innerHTML='you pressed special key'
}
else{
    otherkey()
    document.getElementById('keypressed').innerHTML='you pressed other key' 
}
}
function alphabetkey(){
    image_name='Alpkey.png'
    addimage()
}
function numberkey(){
    image_name='numkey.png'
    addimage()
}
function arrowkey(){
    image_name='Arrkey.png'
    addimage()
}
function specialkey(){
    image_name='spkey.png'
    addimage()
}
function otherkey(){
    image_name='otherkey.png'
    addimage()
}