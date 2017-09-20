/**
 * Created by Administrator on 2017/8/29.
 */

//var a=[1,4,7,2,6,9,5];
//var b=[2,3,4,5,6,7,8];
/**********求数组之和************/
//var s=0;
//function sum(a){

    //for(var i=0;i< a.length;i++){
    //    s+=a[i];
    //}
    //
    //
    //var i=0;
    // while(i< a.length){
    // s+=a[i];
    // i++;
    // }


//     alert(s)
//
//
//}
// sum(a);

/**********两个数组交错合并*************/
/*var n= a.length;
var c=[];var k=0;
for(var i=0;i<n;i++){
    c[k++]=a[i];
    c[k++]=b[i];
}
alert(c);*/

/************斐波那契数列***************/
/*var sum=[0,1];
for(var i=2;i<100;i++){
    sum[i]=sum[i-1]+sum[i-2];
}
alert(sum);*/


    /***************将给定非负整数列表中数字排列成最大数字************/
/*var a=[50,2,1,9,845,3];
var s=[];k=0;
for(var i=0;i< a.length;i++){
    s.push(a[i].toString());
}
document.write(s+"<br/>");
var m=[];
for(var i=0;i< s.length;i++){
    var n;
    n=s[i].split("");
    if(n.length>1){
        for(var j=0;j< n.length;j++){
            m.push(n[j]);
            console.log("m="+m);
        }
    }else{
        m.push(n[0]);
        console.log("m="+m);
    }
}
m= m.sort().reverse();
var result;
result= m.join("");
document.write(parseInt(result));*/



/*function test(){
     message = 'hi';
}
test();
alert(message);*/

//function Hi(){
//    alert(arguments.length);
//    alert("hello " + arguments[0] + "," + arguments[1]);
//}
//Hi("Bobo","how are you?");

/*function sum(num1,num2){
    arguments[1]=20;
    alert(num1+arguments[1]);//50
    alert(num2+arguments[1]);//40
}
sum(30,50);*/


/*function sum(num1){
    arguments[0]=20;
    alert(num1);
}
sum(30);*///20


/*function setName(obj){
    obj.name="Nick";
    obj = new Object();
    obj.name = "Daniel";
}
var person = new Object();
setName(person);
alert(person.name);*/


/*var color="blue";
function getColor(){
    var color="red";
    return window.color;
}
alert(getColor());*/


//function displayInfo(args){
//    var output="";
//    if(typeof args.name == 'string'){
//        output+="Name:" + args.name + "\n";
//    }
//    if(typeof args.age == 'number'){
//        output += "age:" + args.age + "\n";
//    }
//    alert(output);
//}
//displayInfo({name:"Nicholas",age:29});
//displayInfo({name:"Greg"});














