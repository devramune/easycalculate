const { Command } = require('commander');
const program = new Command();

//This is the function to calculate the area of a square or a triangle.
function calcSqTr(base, height, type){
    if(type == "triangle"){
        return ((base * height) / 2);
    }
    else if(type == "rectangle"){
        return (base * height);
    }
    else {return ("undefined")}
}

//This is the function to calculate the area of a circle.
function calcCir(radius){
    return ((radius * radius) * Math.PI)
}

//This is the function to calculate the area of a hexagon.
function calcHex(side){
    return (Math.pow(side, 2) * ((3 * Math.sqrt(3)) / 2 ))
}

//This is the function to calculate the area of a pentagon.
function calcPen(side){
    return ((Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))) * side * side) / 4)
}
//These are the commands.

//version
program
    .version('version: 0.1.1')

//rectangle
program
    .command('rectangle')
    .description('Calculate the area of a rectangle')
    .option('-b, --base <number>', 'Base of the rectangle')
    .option('-h, --height <number>', 'Height of the rectangle')
    .action((options) => {
        area = calcSqTr(options.base, options.height, "rectangle");
        console.log('The area of the rectangle is: %s ', area);
    });

//triangle
program
    .command('triangle')
    .description('Calculate the area of a triangle')
    .option('-b, --base <number>', 'Base of the triangle')
    .option('-h, --height <number>', 'Height of the triangle')
    .action((options) => {
        area = calcSqTr(options.base, options.height, "triangle");
        console.log('The area of the triangle is: %s ', area);
    });

//circle
program
    .command('circle')
    .description('Calculate the area of a circle')
    .option('-r, --radius <number>', 'Radius of the circle')
    .action((options) => {
        area = calcCir(options.radius);
        console.log('The area of the circle is: %s ', area);
    });

//hexagon
program
    .command('hexagon')
    .description('Calculate the area of a hexagon')
    .option('-s, --side <number>', 'One side of the hexagon')
    .action((options) => {
        area = calcHex(options.side);
        console.log('The area of the hexagon is: %s ', area);
    });

//pentagon
program
    .command('pentagon')
    .description('Calculate the area of a pentagon')
    .option('-s, --side <number>', 'One side of the pentagon')
    .action((options) => {
        area = calcPen(options.side);
        console.log('The area of the pentagon is: %s ', area);
    });
program.parse(process.argv);
