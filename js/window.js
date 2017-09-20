/**
 * Created by Administrator on 2017/9/11.
 */
//var age = 29;
//window.color = 'red';
//delete window.age;
//delete window.color;
//alert(window.age);
//alert(window.color);

//var newValue = window.oldValue;//查询属性
//console.log(newValue);



//var pageWidth = window.innerWidth;
//var pageHeight = window.innerHeight;
//console.log(pageWidth);
//console.log(pageHeight);
//if(typeof pageWidth != "number"){
//    if(document.compatMode == "CSS1Compat"){//通过检查document.compatMode来确定页面是否处于标准模式
//        pageWidth = document.documentElement.clientWidth;
//        pageHeight = document.documentElement.clientHeight;
//    }else{
//        pageWidth = document.body.clientWidth;
//        pageHeight = document.body.clientHeight;
//    }
//}
//console.log(pageWidth);
//console.log(pageHeight);

//以下有可能被浏览器禁用
//window.moveTo(0,0);//将窗口移动到（0,0）位置
//window.moveBy(0,100);//将窗口向下移动100像素
//window.resizeTo(200,200);//将窗口调整到200*200
//window.resizeBy(100,50);//将窗口调整到(200+100)*(200+50)

//检查弹出窗口是否被屏蔽
//var wroxWin = window.open("http://www.baidu.com","_blank","height=400,width=400,top=20,left=20,resizable=yes");
//if(wroxWin == null){
//    alert("The popip was blocked!")
//}

//如果是浏览器扩展或其他程序阻止的弹出窗口，window.open()会抛出一个错误，
// 因此使用try-catch更准确地检测弹出窗口是否被屏蔽
//var blocked = false;
//try{
    //var wroxWin = window.open("http://www.baidu.com","_blank","height=400,width=400,top=20,left=20,resizable=yes");
//    if(wroxWin == null){
//        blocked = true;
//    }
//}catch (ex){
//    blocked = true;
//}
//if(blocked){
//    alert("The popip was blocked!");
//}


//超时调用和间歇调用
//var timeoutId = setTimeout(function () {
//    alert("Hello world!");
//},1000);
//alert(timeoutId);
//clearTimeout(timeoutId);


    //秒表计时器
var num = 0;
var b = document.getElementById("wl");
b.innerHTML=num;
function incrementNumber(){
    num++;
    b.innerHTML=num;
    if(num == 10){
        clearInterval(intervalId);
    }
}
var intervalId = setInterval(incrementNumber,1000);








