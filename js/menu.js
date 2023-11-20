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


// acodianTab
function acodianTab(){
    $('section>h3:first').addClass('selectted');
    $('section>ul:not(:first)').hide();

    $('section>h3').on('click',function(e){
        let box =$(this).next('section>ul').css('display');
        console.log(box);
        if(box =='none'){
            //action
            $('.selectted').next('ul').slideUp(300);
            $(this).next('ul').slideDown(300);
            $('section>h3').removeClass('selectted');
            $(this).addClass('selectted');
        }
    });
  };