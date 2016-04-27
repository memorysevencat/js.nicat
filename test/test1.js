/**
 * Created by lintao on 16-4-27.
 */
for (i = 0; i < 10; i++) {
    //(function (e) {
    //    setTimeout(console.log(a), 2000);
    //})(i);
    setTimeout(sc(i), 2000);
}

function sc(a){
    function sc2(){
        console.log(a)
    }
    return sc2;
}
