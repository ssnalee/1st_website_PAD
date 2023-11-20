//SubMenu

function sMenu(){
        $('#SubMenu>nav>ul>li>a').click(function(e){
            let num = $(this).attr('href');
            //console.log(num);
            let numPos = $(num).offset().top;
            //console.log(numPos);
            $('body,html').animate({scrollTop:numPos},1000,'swing');
            //
            return false;
        });
    };

//map

function Smap(){

$('#box01 ul>li:first').css('backgroundColor','rgb(80,78,79)');
$('#box01 ul>li').on('click',function(e){
        $('#box01 ul>li').css('backgroundColor','rgb(255, 196, 211)');
        $(this).css('backgroundColor','rgb(80,78,79)');

});
}

function formValue(){
    $('#sec02>form ul>li>input,#sec02>form ul>li>textarea').removeAttr('placeholder');

    $('#sec02>form ul>li>input,#sec02>form ul>li>textarea').on('focus',function(e){
        $(this).prev('label').fadeOut(300);
    });
    $('#sec02>form ul>li>input,#sec02>form ul>li>textarea').on('blur',function(e){
        let num =$(this).val();
        if(num == ''){
            $(this).prev('label').fadeIn(300);
        }
    });
}

