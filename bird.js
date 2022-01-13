class Bird extends BaseClass{
    constructor(x,y){
       
        super(x,y,50,50)
        this.image = loadImage("bird.png")
        this.smokeImage = loadImage("smoke.png")
        this.trajetoria = []
        
    }

    display(){

        super.display();
        
        if(this.body.velocity.x > 10 && this.body.position.x > 250){
          var pos = [this.body.position.x,this.body.position.y];
          this.trajetoria.push(pos)
        }

        for(var i = 0; i < this.trajetoria.length; i++){
            image(this.smokeImage,this.trajetoria[i][0],this.trajetoria[i][1])
        }

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        
    }
}
