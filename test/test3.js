> function test(){console.log(1);}
undefined
> test.prototype
test {}
> test.constructor
[Function: Function]
> test.__proto__
[Function]
> test.constructor===test.__proto__
false
> var a=new test();
1
undefined
> a.__proto__===test.prototype
true