/**
 * Created by Administrator on 2017/8/31.
 */
/*
 var start=Date.now();
 var s=0;
 for(i=0;i<1000;i++){
 s+=i;
 }
 var stop=Date.now();
 var result=stop-start;
 alert(result);*/

/*************函数************/
/*function sum(num1,num2){
    return num1+num2;
}
alert(sum(10,10));
var anotherSum = sum;
alert(anotherSum(10,10));
sum=null;
alert(anotherSum(20,10));*/


/*******作为值的函数*********/
/*根据对象的某个属性进行排序*/
function createComparisonFunction(propertyName){
    return function (object1,object2){
        var v1 = object1[propertyName];
        var v2 = object2[propertyName];
        if(v1<v2){
            return -1;
        }else if(v1>v2){
            return 1;
        }else{
            return 0;
        }
    };
};
var data = [{name:'Zachary',age:28},{name:'Nicholas',age:29}];
data.sort(createComparisonFunction("name"));
//alert(data[0].name);
data.sort(createComparisonFunction("age"));
//alert(data[0].name);


/*****求阶乘，callee属性防止发生函数耦合******/
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
var trueFactorial = factorial;
factorial = function () {
    return 0;
};

//alert(trueFactorial(5));
//alert(factorial(5));


/***********call()和apply()*************/
function sum(n1,n2){
    return n1 + n2;
}
function callsum1(n1,n2){
    return sum.apply(this,arguments);
}
function callsum2(n1,n2){
    return sum.apply(this,[n1,n2]);
}
//alert(callsum1(10,20));//30
//alert(callsum2(20,30));//50

function callsum(n1,n2){
    return sum.call(this,n1,n2);
}
//alert(callsum(10,30));//40


var s1 = "some text";
var s2 = s1.substring(3);
//alert(s2);


var num = 100;
//alert(num.toFixed(2));//100.00
//alert(num.toExponential(1));//1.0e+2
//alert(num.toPrecision(1));//1e+2
//alert(num.toPrecision(2));//1.0e+2
//alert(num.toPrecision(3));//100

























