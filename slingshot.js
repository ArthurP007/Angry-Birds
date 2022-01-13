class SlingShot{
     constructor(bodyA,pointB){
           var options = {
               bodyA: bodyA,
               pointB: pointB,
               stifness: 0.05,
               length: 10
           }
           this.pointB = pointB
           this.sling = Constraint.create(options)
           this.sling1 = loadImage("sling1.png")
           this.sling2 = loadImage("sling2.png")
           this.sling3 = loadImage("sling3.png")
           World.add(world,this.sling)
        
           
     }

     soltar(){
        this.sling.bodyA = null
     }
     voltar(body){
        this.sling.bodyA = body
     }



     display(){

         image(this.sling1,200,27)
         image(this.sling2,170,27)

         if(this.sling.bodyA){
             var pontoA = this.sling.bodyA.position;
             var pontoB = this.pointB;
   
             push();
             if(pontoA.x<220){
                image(this.sling3,pontoA.x-30,pontoA.y-10,20,30)
                strokeWeight(10);
                stroke("#301608");
                line(pontoA.x-20,pontoA.y,pontoB.x-10,pontoB.y+15);
                line(pontoA.x+20,pontoA.y,pontoB.x+20,pontoB.y+10);
             }
             else{
                image(this.sling3,pontoA.x+20,pontoA.y-10,20,30)
                strokeWeight(10);
                stroke("#301608");
                line(pontoA.x+20,pontoA.y,pontoB.x-10,pontoB.y+15);
                line(pontoA.x+20,pontoA.y,pontoB.x+20,pontoB.y+10);
             }
             pop();
         }
     }


}