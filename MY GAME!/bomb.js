class Bomb{
    constructor(x,y){
        var options={
            isStatic:true
        };
        this.speed = 0.05;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("bomb.png");
    this.x=x;
    this.y=y;
    
    World.add(world,this.body);
    }
 show() {
    image(this.image, this.position.x,this.position.y,w,h);

}


}

