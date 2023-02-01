const debounce =(fn,delay)=>{
    let timeoutID;
    return function(...arg){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID =setTimeout(()=>{
            fn(...arg);
        },100);
    }
}

function flyToNext(){
    return flyTo(nowAt+1);
}
function flyToLast(){
    return flyTo(nowAt-1);
}

//initialization

const debounce =function(fn,delay){
    let timeoutID;
    console.log(timeoutID);
    return function(){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID =setTimeout(fn,delay);
    };
};



document.querySelector("body").onscroll = debounce(haha,1000);

function haha(){
    if(tempY < scrollY){
        flyToNext();
        console.log('Up')
    }else{
        console.log('Down');
        flyToLast()
    }
    tempY = scrollY;


    return console.log('a')
}