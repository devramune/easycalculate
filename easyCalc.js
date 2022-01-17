const { Command } = require('commander');
const program = new Command();

//This is the function to calculate the area of a square or a triangle.
function calcarSqTr(base, height, type){
    if(type == "triangle"){
        return ((base * height) / 2);
    }
    else if(type == "rectangle"){
        return (base * height);
    }
    else {return ("undefined")}
}

//This is the function to calculate the area of a circle.
function calcarCir(radius){
    return ((radius * radius) * Math.PI)
}

//This is the function to calculate the area of a hexagon.
function calcarHex(side){
    return (Math.pow(side, 2) * ((3 * Math.sqrt(3)) / 2 ))
}

//This is the function to calculate the area of a pentagon.
function calcarPen(side){
    return ((Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))) * side * side) / 4)
}

//This is the function to calculate the volume of a sphere.
function calcvolSph(radius){
    return ((4 / 3) * (Math.PI * Math.pow(radius, 3)))
}

//This is the function to calculate the volume of a cube.
function calcvolCb(edge){
    return (Math.pow(edge, 3))
}

//This is the function to calculate the volume of a cone.
function calcvolCn(radius, height){
    return ((Math.PI * Math.pow(radius, 2)) * (height / 3))
}

//This is the function to calculate the volume of a rectangular prism.
function calcvolRp(length, width, height){
    return (width * height * length)
}

//This is the function to calculate the volume of a pyramid.
function calcvolPy(base, height, depth){
    return ((base, height, depth) / 3)
}

//This is the function to calculate the volume of a triangular prism.
function calcvolTr(base, height, length){
    return (((base * height) / 2) *  length)
}
//These are the commands.

//version
program
    .version('version: 0.1.5')
//2d
//rectangle
program
    .command('area_rectangle')
    .description('Calculate the area of a rectangle')
    .option('-b, --base <number>', 'Base of the rectangle')
    .option('-h, --height <number>', 'Height of the rectangle')
    .action((options) => {
        area = calcarSqTr(options.base, options.height, "rectangle");
        console.log('The area of the rectangle is: %s ', area);
    });

//triangle
program
    .command('area_triangle')
    .description('Calculate the area of a triangle')
    .option('-b, --base <number>', 'Base of the triangle')
    .option('-h, --height <number>', 'Height of the triangle')
    .action((options) => {
        area = calcarSqTr(options.base, options.height, "triangle");
        console.log('The area of the triangle is: %s ', area);
    });

//circle
program
    .command('area_circle')
    .description('Calculate the area of a circle')
    .option('-r, --radius <number>', 'Radius of the circle')
    .action((options) => {
        area = calcarCir(options.radius);
        console.log('The area of the circle is: %s ', area);
    });

//hexagon
program
    .command('area_hexagon')
    .description('Calculate the area of a hexagon')
    .option('-s, --side <number>', 'One side of the hexagon')
    .action((options) => {
        area = calcarHex(options.side);
        console.log('The area of the hexagon is: %s ', area);
    });

//pentagon
program
    .command('area_pentagon')
    .description('Calculate the area of a pentagon')
    .option('-s, --side <number>', 'One side of the pentagon')
    .action((options) => {
        area = calcarPen(options.side);
        console.log('The area of the pentagon is: %s ', area);
    });

//3d
//sphere
program
    .command('volume_sphere')
    .description('Calculate the volume of a sphere')
    .option('-r, --radius <number>', 'Radius of the sphere')
    .action((options) => {
        volume = calcvolSph(options.radius);
        console.log('The volume of the sphere is: %s ', volume);
    });

//cube
program
    .command('volume_cube')
    .description('Calculate the volume of a cube')
    .option('-e, --edge <number>', 'Edge of the cube')
    .action((options) => {
        volume = calcvolCb(options.edge);
        console.log('The volume of the cube is: %s ', volume);
    });

//rec_prism
program
    .command('volume_recprism')
    .description('Calculate the volume of a rectangular prism')
    .option('-l, --length <number>', 'Base length of the rectangular prism')
    .option('-w, --width <number>', 'Base width of the rectangular prism')
    .option('-h, --height <number>', 'Height of the rectangular prism')
    .action((options) => {
        volume = calcvolRp(options.length, options.width, options.height);
        console.log('The volume of the rectangular prism is: %s ', volume);
    });

//pyramid
program
    .command('volume_pyramid')
    .description('Calculate the volume of a pyramid')
    .option('-l, --length <number>', 'Base length of the pyramid')
    .option('-w, --width <number>', 'Base width of the pyramid')
    .option('-h, --height <number>', 'Height of the pyramid')
    .action((options) => {
        volume = calcvolPy(options.length, options.width, options.height);
        console.log('The volume of the pyramid is: %s ', volume);
    });

//triangular_prism
program
    .command('volume_triprism')
    .description('Calculate the volume of a triangular prism')
    .option('-b, --base <number>', 'Base of the triangular prism')
    .option('-h, --height <number>', 'Height of the triangular prism')
    .option('-l, --length <number>', 'Length of the triangular prism')
    .action((options) => {
        volume = calcvolTr(options.base, options.height, options.length);
        console.log('The volume of the triangular prism is: %s ', volume);
    });

//cone
program
    .command('volume_cone')
    .description('Calculate the volume of a cone')
    .option('-r, --radius <number>', 'Radius of the cone')
    .option('-h, --height <number>', 'Height of the cone')
    .action((options) => {
        volume = calcvolCn(options.radius, options.height);
        console.log('The volume of the cone is: %s ', volume);
    });
program.parse(process.argv);
