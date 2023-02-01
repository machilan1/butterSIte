let contentArea =document.querySelector('.content-area');
let contentYs =[];
let nowAt=0;
//css injector
const injectCSS = (css) => {
    let el = document.createElement('style');
    el.type = 'text/css';
    el.innerText = css;
    document.head.appendChild(el);
    return el;
  };
//css injector with queryselector
// eg. injectCSSto('.header',`{display:none;}`)  >>>>inject CSS into class'header'

const injectCSSTo =function(className,cssArguments){
    target = className ;
    targetString =`${target }${cssArguments}`;
    console.log(targetString);
    return injectCSS(targetString);
}

//debouncer
const debounce =function(fn,delay){
    let timeoutID;
    return function(){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID =setTimeout(fn,delay);
    };
};


// 右側開關

function openCart(){injectCSSTo(`.cart-banner`,`{transform:translate(-100vw,0px); opacity:1;}`)
}

function closeCart(){ injectCSSTo(`.cart-banner`,`{transform:translate(0vw,0px); opacity:0;}`)
}
document.querySelector('.icon-cart').addEventListener('click',openCart);

document.querySelector('.close-button').addEventListener('click',closeCart);


