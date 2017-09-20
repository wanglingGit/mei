/**
 * Created by Administrator on 2017/9/4.
 */
function Animal(name){
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name+'正在睡觉');
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃:' + food);
};
function Cat(){}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
var cat = new Cat();
console.log(cat.name);
cat.eat('fish');
cat.sleep();
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);


/*******************************************借用构造函数***********************************/
//function SuperType(){
//    this.colors=["red","blue","green"];
//}
//function SubType(){
//    //继承了SuperType
//    SuperType.call(this);
//}
//var instancel = new SubType();
//instancel.colors.push("black");
//alert(instancel.colors);
//var instance2 = new SubType();
//alert(instance2.colors);
/*******************************传递参数*********************8*/
//function SuperType(name){
//    this.name=name;
//}
//function SubType(){
//    //继承了SuperType，同时还传递了参数
//    SuperType.call(this,"Nicholas");
//    this.age=29;
//}
//var instance = new SubType();
//alert(instance.name);
//alert(instance.age);


/*******************************组合继承（原型链实现对原型属性和方法的继承，借用构造函数实现对实例属性的继承*****************/
//function SuperType(name){
//    this.name=name;
//    this.colors = ["red","blue","green"];
//}
//SuperType.prototype.sayName = function () {
//    alert(this.name);
//};
//function SubType(name,age){
//    //继承属性
//    SuperType.call(this,name);
//    this.age = age;
//}
////继承方法
//SubType.prototype = new SuperType();
//SubType.prototype.constructor = SubType;
//SubType.prototype.sayAge = function () {
//    alert(this.age);
//};
//var instance1 = new SubType("Nicholas",29);
//instance1.colors.push("black");
//alert(instance1.colors);
//instance1.sayName();
//instance1.sayAge();
//var instance2 = new SubType("Greg",27);
//alert(instance2.colors);
//instance2.sayName();
//instance2.sayAge();


/******************************************原型式继承***********************/

var person = {
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};
var anotherPerson = Object(person);
anotherPerson.name="Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends);
















