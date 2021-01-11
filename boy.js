class Boy{
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(250 , 660, 160, 200, options)
        this.image = loadImage("boy.png");
    }
    display(){
        imageMode(CENTER)
        image(this.image , 250, 660, 160, 200);
    }
}