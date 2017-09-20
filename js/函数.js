/**
 * Created by Administrator on 2017/9/6.
 */
//function myname(){
//
//}
//alert(myname.name);
/*******************************闭包*************************/
//function createFunctions(){
//    var result = new Array();
//    for(var i=0;i<10;i++){
//        result[i] = function () {
//            return i;//i是个function
//        }
//    }
//
//    return result;
//}
//var res = createFunctions();
//for(var j =0; j<res.length; j++){
//    console.log(res[j]());//输出闭包内i的返回值
//}
/**********************************关于this****************************/
//var name = "The Window";
//var object = {
//    name:"My Object",
//    getNameFunc: function () {
//        return function () {
//            return this.name;
//        };
//    }
//};
//alert(object.getNameFunc()());//"The Window"

//var name = "The Window";
//var object = {
//    name:"My Object",
//    getNameFunc: function () {
//        var that = this;
//        return function () {
//            return that.name;
//        };
//    }
//};
//alert(object.getNameFunc()());//"My Object"

/********************************模仿块级作用域**************************/
//(function () {
//    var now = new Date();
//    if(now.getMonth() == 0 && now.getDate == 1){
//        alert("Happy new year!");
//    }else{
//        alert("Good job!")
//    }
//})();

var a=[1,4,5,2,9];
alert(Math.max.apply(null,a));
var b=1.2;
alert(typeof b);

var arr=[];
arr[0]=0;
arr[1]=1;
arr.foo='c';
alert(arr.length);








































