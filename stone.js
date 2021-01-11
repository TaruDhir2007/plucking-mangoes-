class Stone{
    constructor(x, y, width , height, options){
        var options ={
        restitution : 0.4,
        friction : 1, 
        density : 0.2
        }
    
    this.image = loadImage("stone.png");    
    this.body = Bodies.rectangle(120, 680, 40, 40, options)
    this.x = 40;
    this.y = 40;
    World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image , 120, 680, 40, 40);
    }}