class Tree{
constructor(x, y, width , height, options){
    var options ={
    isStatic : true
    }

this.image = loadImage("tree.png");    
this.body = Bodies.rectangle(600, 500, 200, 250, options)
this.x = 600;
this.y = 450;
World.add(world, this.body);
}
display(){
    imageMode(CENTER);
    image(this.image , 600, 500, 400, 450);
}}