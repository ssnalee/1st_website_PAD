

//maingall
//변수
let num = 0;
let targetX = 0; //목적값

let count = 0; //카운트
let action = 300;//이미지 전환시간의 간격
let sWidth = window.innerWidth; //li 의 가로크기

// console.log(sWidth);

//let sWidth = document.querySelector('#gall>ul>li').innerWidth; //li 의 가로크기
let sNum = 4; //li의 숫자

let go = true; //진행 시 논리 값

//시점
window.onload =function(){
    //준비
    //source복제
    const TEMP = document.querySelector('.gallul').cloneNode(true);
    // console.log(TEMP);
    document.querySelector('#gall').append(TEMP);

    //스타일
    document.querySelector('.gallul').style.width= sWidth*sNum +'px';
    document.querySelector('#gall').style.width= (sWidth*sNum)*2+'px';

    //타이머
    setInterval(motion,10);
//
circle();
//이벤트 정리 ->prev, next 버튼정리

const PREV = document.querySelector('#maingall>.prev');
const NEXT = document.querySelector('#maingall>.next');

PREV.addEventListener('click',prev);
NEXT.addEventListener('click',next);

//진행 진행막기 -> go -> true, false;
const BTN = document.querySelectorAll('.gallul>li');
//console.log(BTN);
BTN.forEach(function(BTN){BTN.addEventListener('mouseover',function(){go=false;})});
BTN.forEach(function(BTN){BTN.addEventListener('mouseout',function(){go=true;})});

//circle 이벤트
const CIRMOVE = document.querySelectorAll('.gallnav>li');
//console.log(CIRMOVE);
CIRMOVE.forEach(function(CIRMOVE){CIRMOVE.addEventListener('click',function(event){
    let DATA =  this.getAttribute('data-num');
    cir= DATA;
    circle();
    targetX = -sWidth*(DATA-1);
});});
}

//카운트, 움직임
function motion(){
    if(go){
        ++count;
        if(count==action){
            next();
            count = 0;
        }
    }

//계산하기
num += 0.1*(targetX-num);
document.querySelector('#gall').style.left = num+'px';
}
//circle
let cir = 1;
function circle(){
    for(i=1 ; i<=sNum; i++){
        document.querySelector('#g'+i).style.backgroundColor='grey';
    }
    document.querySelector('#g'+cir).style.backgroundColor='white';
}
      
//prev
function prev(){
    targetX+= sWidth;
    if(targetX > 0){
        num= -sWidth*sNum;
        targetX = -sWidth*(sNum-1);
    }
    //circle
    --cir;
    if(cir<1){cir=sNum}
    circle();
}
//next
function next(){
    targetX -= sWidth;
    if(targetX < -sWidth*(sNum*2-1)){
        num = -sWidth*(sNum-1);
        targetX = -sWidth*sNum;
}

    //circle
    ++cir;
    if(cir>sNum){cir=1;}
    circle();
}

      

//box01 gall
      
      function box01Gall(){
          
        let MgallWidth=$('#box01>ul>li').width();
        console.log(MgallWidth);
        $('#box01>ul>li:last').prependTo('#box01>ul');
        $('#box01>ul').css('margin-left','-'+MgallWidth+'px');
        
        $('#box01>.prev').on('click',function(e){
            $('#box01>ul').animate({marginLeft:'-='+MgallWidth+'px'},1000,
            'swing',function(){
               $('#box01>ul>li:first').appendTo('#box01>ul');
               $('#box01>ul').css('margin-left','-'+MgallWidth+'px');
            });
        });
       
        $('#box01>.next').on('click',function(e){
            $('#box01>ul').animate({marginLeft:'+='+MgallWidth+'px'},1000,'swing',function(){
                $('#box01>ul>li:last').prependTo('#box01>ul');
                $('#box01>ul').css('margin-left','-'+MgallWidth+'px');
            });
        });
    };