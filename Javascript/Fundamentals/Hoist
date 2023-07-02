//1)
console.log(hello); //logs undefined
var hello = 'world';
//---------------------------------------

//2)
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle); // logs magnet
}
//---------------------------------------

//3)
var brendan = 'super cool';
function print() { //function not called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //logs super cool
//---------------------------------------

//4)
var food = 'chicken';
console.log(food); //logs chicken
eat();//calls function eat()
function eat() {
    food = 'half-chicken';//food variable changed to ""
    console.log(food);//logs half-chicken
    var food = 'gone';
}
//---------------------------------------

//5)
mean();//calls function mean
console.log(food);//logs undefined
var mean = function () {// mean is not a function
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//---------------------------------------

//6)
console.log(genre);//logs undefined
var genre = "disco";//variable set
rewind();//calls function
function rewind() {
    genre = "rock";//genre variable changed
    console.log(genre);//logs genre
    var genre = "r&b";//genre variable changed
    console.log(genre);//logs r&b
}
console.log(genre);//logs disco
//---------------------------------------

//7)
dojo = "san jose";
console.log(dojo);//logs san jose
learn();//calls function
function learn() {
    dojo = "seattle";//dojo changed
    console.log(dojo);//logs seattle
    var dojo = "burbank";//dojo changed
    console.log(dojo);//logs burbank
}
console.log(dojo);// san jose
//---------------------------------------

//8)
console.log(makeDojo("Chicago", 65));//1)calls function 2){ name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

//---------------------------------------









