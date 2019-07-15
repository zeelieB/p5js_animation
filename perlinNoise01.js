function setup() {
    // put setup code here
    createCanvas(400, 400);
    pixelDensity(1);
    oSlider = createSlider(0, 255, 255);
    oSlider.position(20, 20);
    dSlider = createSlider(0, 255, 0);
    dSlider.position(20, 40);
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, 60);
    bSlider = createSlider(0, 255, 0);
    bSlider.position(20, 80);
    frameRate(7);
    
    
  }

  var currentPixels = [];


function newLoop() {

    beginShape();
    loadPixels();

    for (var y = 0; y < width; y++) {
        currentPixels.push(newArray);
        var xoff = start;
        for (var x = 0; x < height; x++){
            currentPixels[y][x] = newArray;
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff)*255;
            pixels[index+0] = d+r;
            currentPixels[y][x][index]= d+r;
            pixels[index+1] = g+r;
            currentPixels[y+1][x+1[index+1]] = g+r;
            pixels[index+2] = b+r;
            currentPixels[y+2][x+2] = b+r;
            pixels[index+3] = o;
            currentPixels[index+3] = o;

            xoff += inc;

        }     
        yoff += inc;
    }




    updatePixels();
    endShape();

}

  

  var inc = 0.01;
  var start = 0;


  function draw() {
      
      var yoff = 0;
      const o = oSlider.value();
      const d = dSlider.value();
      const g = gSlider.value();
      const b = bSlider.value();


    // put drawing code here
    //var x = random(width);
    // var x = map(noise(xoff), 0, 1, 0, width);
    // var y = map(noise(yoff), 0, 1, 0, height);

    // xoff += 0.01;
    // yoff += 0.02;    
    //const r = rSlider.value();
    //loadPixels();
    //background(51);
    //stroke(255);
    //noFill();
    //beginShape();

// *** BEGIN ANIMATING 1D PERLIN NOISE ***
    // var xoff = start;
    // for (var x = 0; x < width; x++) {
    //     stroke(255);
    //     var y = noise(xoff) * height;

    //     vertex(x, y);

    //     xoff += inc;
    // }
    // endShape();

    // start += inc;
// *** END ANIMATING 1D PERLIN NOISE ***
beginShape();
loadPixels();

for (var y = 0; y < width; y++) {
    var xoff = start;
    for (var x = 0; x < height; x++){
        var index = (x + y * width) * 4;
        var r = noise(xoff, yoff)*255;
        pixels[index+0] = d+r;
        pixels[index+1] = g+r;
        pixels[index+2] = b+r;
        pixels[index+3] = o;

        xoff += inc;

    }     
    yoff += inc;
}




updatePixels();
endShape();
    

    start += 2*inc;



    //ellipse(x, y, 24, 24);
  }