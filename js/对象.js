/**
 * Created by Administrator on 2017/9/4.
 */
//var person={
//    name:"Nicholas",
//    age:29,
//    job:"Software Engineer",
//    sayName: function () {
//        console.log(this.name);
//    }
//}
//person.sayName();

/***********8数据属性*************/
/**********通过defineProperty设置name属性值不可更改************/
//var person={};
//Object.defineProperty(person,"name",{
//    writable:false,  //configurable:false (表示不能从对象中删除属性）enumerable:false(表示不能通过for-in循环返回属性）
//    value:"Nicholas"
//});
//alert(person.name);
//person.name="Greg";
//alert(person.name);


/*************访问器属性***********/
//var book = {
//    _year:2004,//前面的下划线是一种常用几号，表示只能通过对象方法访问的属性。
//    edition:1
//};
//Object.defineProperty(book,"year",{//year是访问器属性
//    get:function(){
//        return this._year;
//    },
//    set: function (newValue) {
//        if(newValue>2004){
//            this._year=newValue;
//            this.edition+=newValue-2004;
//        }
//    }
//});
//book.year=2005;
//alert(book.edition);


/*************定义多个属性***********/
//var book={};
//Object.defineProperties(book,{
//    _year:{
//        writable:true,
//        value:2004
//    },
//    edition:{
//        writable:true,
//        value:1
//    },
//    year:{
//        get: function () {
//            return this._year;
//        },
//        set: function (newValue) {
//            if(newValue > 2004){
//                this._year = newValue;
//                this.edition += newValue-2004;
//            }
//        }
//    }
//})
//
///********读取属性的特性***********/
//var descriptor = Object.getOwnPropertyDescriptor(book,"_year");//_year数据属性
//alert(descriptor.value);//2004
//alert(descriptor.configurable);//false
//alert(typeof descriptor.get);//"undefined"
//
//var descriptor = Object.getOwnPropertyDescriptor(book,"year");//year访问器属性
//alert(descriptor.value);//undefined
//alert(descriptor.enumerable);//false
//alert(typeof descriptor.get);//"function"      是指向getter函数的指针


/*******创建函数******/
/***工厂模式********/
//function createPerson(name,age,job){
//    var o = new Object();
//    o.name=name;
//    o.age=age;
//    o.job=job;
//    o.sayName = function () {
//        alert(this.name);
//    };
//    return o;
//}
//var person1 = createPerson("Nicholas",29,"Software Engineer");
//var person2 = createPerson("Greg",27,"Doctor");
/*******构造函数模式***********/
//function Person(name,age,job){
//    this.name=name;
//    this.age=age;
//    this.job=job;
//    this.sayName = function () {
//        alert(this.name);
//    }
//}
//var person1 = new Person("Nicholas",29,"Software Engineer");
//var person2 = new Person("Greg",27,"Doctor");


/***********用hasOwnProperty()方法检测一个属性是否存在于实例中***********/
//function Person(){};
//Person.prototype.name="Nicholas";
//Person.prototype.age=29;
//Person.prototype.job="Software Engineer";
//Person.prototype.sayName= function () {
//    alert(this.name);
//};
//var person1 = new Person();
//var person2 = new Person();
//alert(person1.hasOwnProperty("name"));//false
//person1.name = "Greg";
//alert(person1.name);//"Greg"
//alert(person1.hasOwnProperty("name"));//true
//alert(person2.name);//"Nicholas"
//alert(person2.hasOwnProperty("name"));//false
//delete person1.name;
//alert(person1.name);//"Nicholas"
//alert(person1.hasOwnProperty("name"));//false

/************判断属性是否存在于原型中************/
/*function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name)&&(name in object);
}

var person = new Person();
alert(hasPrototypeProperty(person,"name"));//true
person.name = "Greg";
alert(hasPrototypeProperty(person,"name"));//false*/


/*var o = {
    toString : function(){
        return "My Object";
    }
};
for(var prop in o){
    if(prop == "toString"){
        alert("Found toString");
    }
}*/

/***************Object.keys()方法返回所有可枚举属性的字符串数组*******************/
//function Person(){};
//Person.prototype.name="Nicholas";
//Person.prototype.age=29;
//Person.prototype.job="Software Engineer";
Person.prototype.sayName= function () {
    //alert(this.name);
};
//var keys = Object.keys(Person.prototype);//返回字符串数组
//alert(keys);//name,age,job,sayName
//var p1 = new Person();
//p1.name = "Rob";
//p1.age = 31;
//var p1keys = Object.keys(p1);
//alert(p1keys);//name,age
//var keys = Object.getOwnPropertyNames(Person.prototype);//得到所有实例属性，无论是否可枚举
//alert(keys);//constructor,name,age,job,sayName
/*****************************************************/


/***********修改person1.friends不会影响person2.friends******************/
//function Person(name,age,job){
//    this.name = name;
//    this.age = age;
//    this.job = job;
//    this.friends = ["Shelby","Court"];
//}
//Person.prototype = {
//    constructor : Person,
//    sayName : function () {
//        alert(this.name);
//    }
//}
//var person1 = new Person("Nicholas",29,"Software Engineer");
//var person2 = new Person("Greg",27,"Doctor");

//person1.friends.push("Van");
//alert(person1.friends);//"Shelby,Count,Van"
//alert(person2.friends);//"Shelby,Count"
//alert(person1.friends === person2.friends);//false
//alert(person1.sayName === person2.sayName);//true


/**********寄生构造函数模式************/
function Person(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };
    return o;
}
var friend = new Person("Nicholas",29,"Software Engineer");
friend.sayName();
/********创建一个具有额外方法的特殊数组*********/
function SpecialArray(){
    var values = new Array();//创建数组
    values.push.apply(values,arguments);//添加值
    values.toPipedString = function () {//添加方法
        return this.join("|");
    };
    return values;
}
var colors = new SpecialArray("red","blue","green");
alert(colors.toPipedString());//"red|blue|green"














