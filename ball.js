class Ball{
    constructor(x,y,r){
        var ball_options ={
            restitution: 1.0,
            friction:2,
            density:2
        }
    
        this.body = Bodies.circle(x,y,r,ball_options);
        World.add(world,this.body);
    this.width=r
this.height=r   
}
display(){
    fill('brown')
    ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    

}

}