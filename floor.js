class Floor{
    constructor(x,y,width,height){
        var box_options ={
            restitution: 1.0,
            friction:2,
            density:2
        }
    
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.box);
    this.width=width
this.height=height   
}
display(){
    fill('white')
    rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
    

}

}


