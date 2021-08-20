class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.trajectory=[]
  this.smokeimage=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200)
    this.trajectory.push([this.body.position.x,this.body.position.y])
    for(var i=0;i<this.trajectory.length;i++)
    image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])
  }
}
