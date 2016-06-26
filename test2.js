function sayHello(){
    console.log(this.words);
}
var obj={};
obj.words=1;
obj.say=sayHello;
//
obj.say();
//
sayHello.apply(obj);
//
sayHello.call(obj);
