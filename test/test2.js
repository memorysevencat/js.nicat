var tasks1 = [];
for (var i=0; i<3; i++) {

    tasks1.push(closure(i));
}
for(var item in tasks1)
{
    console.log(tasks1[item]);
}
tasks2 = [];
for (var i=0; i<3; i++) {
    tasks2.push(function(){
        return i;
    });
}
for(var item in tasks2)
{
    console.log(tasks2[item]());
}
function  closure(i){
    function func(){
        return i;
    }
    return func();
}

//input
nodev6 test2.js
//output
0
1
2
3
3
3
