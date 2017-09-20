/**
 * Created by Administrator on 2017/8/31.
 */

/******push:从数组的后端添加（返回数组长度），，pop:从数组的后端移除（返回移除的项）**********/
var colors = new Array();
var count=colors.push("red","blue");
//alert(count);
count=colors.push("black");
//alert(count);
count=colors.pop();
//alert(count);

/***********shift:从数组的前端移除（返回移除的项）*************/
var col = new Array();
var cou=col.push("white","yellow");
//alert(cou);
cou=col.push("green");
cou=col.shift();
//alert(cou);
//alert(col.length);

/**********unshift:在数组的前端添加任意项***********/
var colo = new Array();
var coun = colo.unshift("blue","green");
//alert(coun);
//alert(colo);//blue,green
var coun = colo.unshift("brown");
//alert(colo);//brown,blue,green
var coun = colo.pop();
//alert(colo)


/**********sort():数组升序排序（但是有bug,这时需要compare函数）  reverse():反转数组**********/
var values = [10,0,5,1,15];
values.sort(compare);
//alert(values);
function compare(v1,v2){
    return v1-v2;
}
values.reverse();
//alert(values);

/*****concat()：连接数组或给数组添加元素，如果没有传递参数，则只是复制当前数组并返回副本*/
var a=["1","2","9","56"];
var b=["3","0"];
b= a.concat(b);//a 连接b    b在后面
//alert(b);

/**********slice():截取数组(不包含第二个参数的位置。
 * 如果传入的参数是负数，则用数组长度加上参数来确定位置，
 * 如果结束位置小于开始位置，则返回空数组）***********/
var a=["1","2","9","56"];
var b= a.slice(2,3);
//alert(b)

/********splice():删除：插入：替换：*/
var a = ["1","9","34","8","15","10","23"];
var remove = a.splice(0,4);//从0位置开始删除4项,返回删除的项
//alert(a);//a数组剩余的
//alert(remove);//
var insert = a.splice(0,0,"red","yellow","blue","green");//返回空数组
//alert(insert);
//alert(a);//从0位置开始删除0项插入4项

var instead = a.splice(1,2,"black","color")
//alert(a);//从1位置开始，删除两项插入2项
//alert(instead);


/*********indexOf lastIndexOf:返回查找项的下标********/
var num=[1,2,3,4,5,4,3,2,1];
//alert(num.indexOf(4));//3
//alert(num.lastIndexOf(4));//5
//alert(num.indexOf(4,4));//5  查找的项，起始位置
//alert(num.lastIndexOf(4,4));//3


/*
* every():对数组的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
* filter():对数组的每一项运行给定函数，返回该函数会返回true的项组成的数组
* forEach():对数组的每一项运行给定函数，无返回值
* map():对数组的每一项运行给定函数，返回每次函数调用的结果组成的数组
* some():对数组的每一项运行给定函数，如果该函数对任一项返回true，则返回true
*/
var number = [1,2,3,4,5,4,3,2,1];
var everyresult = number.every(function (item, index, array) {
    return (item>2);
});
//alert(everyresult);//false

var someresult = number.some(function (item, index, array) {
    return(item>2);
});
//alert(someresult);//true

var filterresult = number.filter(function (item, index, array) {
    return(item>2);
});
//alert(filterresult);//3,4,5,4,3

var mapresult = number.map(function (item, index, array) {
    return(item*2);
});
//alert(mapresult);//2,4,6,8,10,8,6,4,2

/*
* reduce():从数组的第一项开始，遍历到最后一项
* reduceRight():从数组的最后一项开始，遍历到第一项
* 归并数组（每一项加起来），两者除了遍历方向的不同其他完全相同*/
var x=[1,2,3,4,5];
var sum= x.reduce(function (prev, cur, index, array) {
    return prev+cur;
});
//alert(sum);//15

/*********slice()、substring()、substr()比较******************/
var str="hello world";
//alert(str.slice(3));          //lo world
//alert(str.substring(3));      //lo world
//alert(str.substr(3));         //lo world
//alert(str.slice(3,7));        //lo w
//alert(str.substring(3,7));    //lo w
//alert(str.substr(3,7));       //lo worl
/**分别给上面三个方法传入负值
 * slice():将传入的负值与字符串的长度相加
 * substr():将负的第一个参数加上字符串的长度，将负的第二个参数转换为0
 * substring():把所有的负值转换为0
 * *****/
//alert(str.slice(-3));          //rld
//alert(str.substring(-3));      //hello world
//alert(str.substr(-3));         //rld
//alert(str.slice(3,-4));        //lo w
//alert(str.substring(3,-4));    //hel
//alert(str.substr(3,-4));       //""空字符串



var sum2= x.reduceRight(function (prev, cur, index, array) {
    return prev+cur;
});
//alert(sum2);//15

var y=["a","b","c"];
var sum3= y.reduce(function (prev, cur, index, array) {
    return prev+cur;
});
//alert(sum3);//abc


alert(Math.ceil(25.9));//向上取整
alert(Math.floor(25.9));//向下取整
alert(Math.round(25.9));//标准四舍五入











