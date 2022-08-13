//script to generate the circles and 
//display the other assets on the webpage 

ans_box = [] // holds circles with text in them 
let_circles = []
function setup() {
        //setup the canvas 
        canvas = createCanvas(1980,720 );
        canvas.parent("sketch");
//        ans_circles = []
        canvas.fill(255,204,100);
        x_off = 40;
        y_off = 0;

        basex = 10 ;
        basey = 50 ;



}
function draw() {

        
        //answer box 
        rect(30, 20,200 , 55, 20, 15, 10, 5);
        

        for( var i = 0 ; i < 6 ; i++){
               let_circles[i] = circle( 100 + ( i * 80), 120  , 50) ;
        }
        for( var i = 0 ; i < 6 ; i++){
                //change the color 
                let_circles[i].fill('red');
        }


}
