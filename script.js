$(function(){

    $('#topBtn').click(function(){
        
        $('html, body').animate({
            'scrollTop':0
        }, 500); 

    });
    /* 質問②：効率的にコーディングする方法を知りたい */
    $('#sendForm').click(function(){
        var check = [$('#check1').val(), $('#check2').val(),$('#check3').val(),$('#check4').val()];
        $('.msg').html('');
        
        for( var i=0; i<=3; i++){
            if(check[i] == ''){
                switch(i){
                    case 0:   
                        $('.msg').eq(0).text(' 入力必須です');
                        return false;
                        break;
                    case 1:   
                        $('.msg').eq(1).text(' 入力必須です');
                        return false;
                        break;
                    case 2:   
                        $('.msg').eq(2).text(' 入力必須です');
                        return false;
                        break;
                    case 3:   
                        $('.msg').eq(3).text(' 入力必須です');
                        return false;
                        break;
                }
            } 
        }
    });
    
    $('#listClose').click(function(){
        if($('.headMenu_hum').hasClass('open')){
            $('.headMenu_hum').css('display','none');
            $('.headMenu_hum').removeClass('open');
            $('#listClose').html('<span><i class="fa-solid fa-bars"></i></span>');
        } else {
            $('.headMenu_hum').css('display','block');
            $('.headMenu_hum').addClass('open');
            $('#listClose').html('<span><i class="fa-solid fa-xmark"></i></span>');
        }

    });

    /* 質問①：効率的にコーディングする方法を知りたい */
    $(this).find('#topBtn_hum1').click(function(){
        $('.headMenu_hum').css('display','none');
        $('.headMenu_hum').removeClass('open');
        $('#listClose').html('<span><i class="fa-solid fa-bars"></i></span>');
    });

    $(this).find('#topBtn_hum2').click(function(){
        $('.headMenu_hum').css('display','none');
        $('.headMenu_hum').removeClass('open');
        $('#listClose').html('<span><i class="fa-solid fa-bars"></i></span>');
    });

    $(this).find('#topBtn_hum3').click(function(){
        $('.headMenu_hum').css('display','none');
        $('.headMenu_hum').removeClass('open');
        $('#listClose').html('<span><i class="fa-solid fa-bars"></i></span>');
    });

});