$('.article4 li > div').on('mouseover mouseout', function(){
    $(this).toggleClass('on')
})


$('.article4 li > div .zoom > a:first-child').on('click', function(){
    var href = $(this).attr('href')
    var src = $(this).parent().prev().attr('src')
    console.log(src)
    $('#wrap').after('<div class = "outbox"><div class="inbox"></div></div>')
    $('.inbox').append(`<a href="${href}" target="_blank"><img src="${src}" alt="설명문구"></a>`)
    $('.inbox').append('<button type="button">닫기</button>')
    $('.outbox').css({display:'block'})
    // $('.inbox a').attr({ href:href })
    // $('.inbox img').attr({ src:src })
    return false    
})

$('body').on('click', '.outbox button', function(){
    $('.outbox').remove()
})


$('.cs_board .tabmenu li').on('click', function(){
    $(this).addClass('active')
    .siblings().removeClass('active')
    // console.log($(this).index())
    var index = $(this).index()
    $(this).parent().next().children('div').eq(index).addClass('active')
    .siblings().removeClass('active')
})

// function slideTarget(n){    // 1, 2, 3
//     // .slideInner의 left값 : 0, -100%, -200%, -300%
//     var pos = n*(-100)+'%'
//     // console.log(pos)
//     $('.slide-group').animate({left:pos}, 500)
// }

// var count = 0;
// $('.article1 .next').on('click', function(){
//     if (count<2) {
//         count++;
//         $('.article1 .slickdots li').eq(count).addClass('active')
//         $('.article1 .slickdots li').eq(count).siblings().removeClass('active')
//         slideTarget(count)
//     }
// })

// $('.article1 .prev').on('click', function(){
//     if (count>0) {
//         count--;
//         $('.article1 .slickdots li').eq(count).addClass('active')
//         $('.article1 .slickdots li').eq(count).siblings().removeClass('active')
//         slideTarget(count)
//     }     
// })

// $('.slickdots li button').on('click', function(){
//     $(this).parent().addClass('active')
//     $(this).parent().siblings().removeClass('active')
//     var liIndex = $(this).parent().index()
//     slideTarget(liIndex)
// })

//슬릭 슬라이더 플러그인 연결

$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:1700,
    speed:600,
    dots:true,
    // arrows:false,  화살표 없애기
    prevArrow:'<button class="slick-arrow slick-prev"><i class = "fas fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class = "fas fa-angle-right"></i></button>',
    pauseOnDotsHover:true,
    fade:false,
    vertical:false,
    rtl:false,
    slidesToShow:1,
    slidesToScroll:1,
    responsive:[{
        breakpoint:769,
        settings:{
            fade:true,
            arrows:false
        }
    }]
})

// 슬라이더 자동재생 멍춤 버튼 연결

$('.article1 .plpa').on('click', function(){
    if ($(this).find('i').hasClass('fa-pause')) {
        $('.slide-group').slick("slickPause")
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick("slickPlay")
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }
    
})

// product 구역 p요소 글자수 제한하기
$('.article4 ul li').each(function(){
    var text = $(this).find('p').text()
    var newtext = text.substr(0,40)
    if (text.length<40) {
        // $(this).find('p').text(newtext)
        let count = 40 - text.length
        for (let i=0; i<count; i++){
            text += "&nbsp; "
        }
        $(this).find('p').html(text)
    } else {
        $(this).find('p').text(newtext+'...')
    }

    
})

var article2Near = $('.article2').offset().top - $(window).height()
var article4Near = $('.article4').offset().top - $(window).height()
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>10) {
        $('.article2').addClass('on')
    } else {
        $('.article2').removeClass('on')
    }if (sct>article4Near) {
        $('.article4 li').addClass('on')
    } else {
        $('.article4 li').removeClass('on')
    }

})

// 동영상 팝업박스 
$('.cs_movie .tubewrap img').on('click', function(){
    $('body').append('<div class="youtubeVideo"><div class = "youtube"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/h7C3RyiZfYs?controls=1&amp;mute=1&amp;autoplay=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>')
    $('.youtubeVideo').css({
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        paddingTop:'56.25%',
        // background:'rgba(0,0,0,0.5)',
        // bottom:0,
        zIndex:999999999999
    })
    $('.youtube').css({
        position:'absolute',
        top:'10%',
        left:'10%',
        right:'10%',
        bottom:'10%',
    })

    $('.youtube').append('<button type="button">닫기</button>')
    $('.youtube button').css({
        position:'absolute',
        top:0, right:0,
    })
})

$('body').on('click', '.youtubeVideo button', function(e){
    e.preventDefault()
    $('.youtubeVideo').remove()
})
