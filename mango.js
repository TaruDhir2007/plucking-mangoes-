class Mango{
constructor(x, y, radius, options){
    var options = {
        isStatic : true,
        stiffness : 0.2
    }
this.body = Bodies.circle(x , y, 50, options)
    this.image = loadImage("mango.png")

World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 50, 50);
}
}