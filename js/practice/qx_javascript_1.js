//变量学习

var numberOfBlings = 1 + 3;
var numberOfCandies = 8;
document.write(numberOfCandies / numberOfBlings);
document.write("<br />");



//输入的英文自动转化为首个字母是大写的单词
function translateTheInputWord() {
    var wrongWord = "it Is wRong When elEphAnt lOve sWan";
    var allWrongWordToSmall = wrongWord.toLowerCase();
    var chooseFirstOneLetter = wrongWord[0];
    var chooseAllTheLetterButFirstOne = allWrongWordToSmall.slice(1);   
    var firstOneLetterTransToBig = chooseFirstOneLetter.toUpperCase();
    var theRightWord = firstOneLetterTransToBig + chooseAllTheLetterButFirstOne;
    
    document.write(theRightWord);
    document.write("<br />");
}


//数学运算符

//普通四则运算
var ordinaryFourOperations = 35 / 3 +34 - 3 * 34;
var ordinaryFourOperations1 = 35 / (3 +34) - 3 * 34;
document.write(ordinaryFourOperations);
document.write("<br />");
document.write("<br />");

document.write(ordinaryFourOperations1);
document.write("<br />");
document.write("<br />");


//赋值运算

var number = 1;
document.write(++number);
document.write("<br />");
document.write("<br />");

//  ++  递增操作
if (number<100) {
    ++ number
};
document.write(++number);
document.write("<br />");
document.write("<br />");



//  --  递减操作
if (number<100) {
    -- number
};
document.write(++number);
document.write("<br />");
document.write("<br />");


//  +=  加后赋值
number += 7;
document.write(++number);
document.write("<br />");
document.write("<br />");


//  -=  减后赋值
number -=7;
document.write(++number);
document.write("<br />");
document.write("<br />");


//逻辑操作符





//数组操作
var animal = [
    "elephant",
    "swan",
    "spider",
    "petHamster",
    [
        12,
        15.1,
        33,
        23,
    ],
    "pig",
    "dog",
    [
        "12",
        "34",
    ],
    "chicken",
    "sparrow",
];
document.write(animal[4][0] - animal[4][2]);
document.write("<br />");
document.write("<br />");

var dinosaur = [];
document.write(dinosaur[0]);
document.write("<br />");
document.write("<br />");


dinosaur[0] = animal;
dinosaur[3] = animal;
document.write(dinosaur[0]);
document.write("<br />");
document.write("<br />");


//查看数组长度
document.write(dinosaur.length);
document.write("<br />");
document.write("<br />");

//为数组末尾添加元素
dinosaur.push("long");
dinosaur.push("longlongago");

document.write(dinosaur);
document.write("<br />");
document.write("<br />");



//为数组开头添加元素
dinosaur.unshift("secondLong");
dinosaur.unshift("dragon");

document.write(dinosaur);
document.write("<br />");
document.write("<br />");


//删除数组元素
var deleteAnimal = animal.pop();

document.write(animal);
document.write("<br />");
document.write("<br />");


//删除数组开头元素
var deleteFirstAnimal = animal.shift();
document.write(animal);
document.write("<br />");
document.write("<br />");


//数组相加
var allTheAnimal = animal.concat(dinosaur);
document.write(allTheAnimal);
document.write("<br />");
document.write("<br />");


//多个数组相加
var allTheAnimals = animal.concat(allTheAnimal,dinosaur);
document.write(allTheAnimals);
document.write("<br />");
document.write("<br />");


// 查找某个元素的索引位置
document.write(allTheAnimal.indexOf("petHamster"));




//将数组转化为字符串











































