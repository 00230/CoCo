$('form').on('submit', function(){

    // ^[] : 첫문자 일치
    // []$ : 끝문자 일치
    // 영문자 : [a-zA-Z]
    // 숫자 : [0-9]
    // 특수문자 : [^a-zA-Z0-9]
    // 숫자(3~4) : \d{3,4}, 숫자 : \d{4}
    // . : 임의의 모든 문자(숫자, 영문자, 특수문자)
    // + : 앞의 글자가 한 번 이상 나옴
    // * : 앞의 글자가 0번 이상 나옴
    // ?= : 조건 확인 후 처음으로 돌아가서 다시 확인
    // 정규표현식.test(변수) : 변수값이 정규표현식에 맞으면 true, 틀리면 false값을 돌려주는 메소드

    // 아이디는 특수문자는 포함하지 않으며, 영문자와 숫자만 허용 6글자 이상
    var idval = $('#idbox').val()
    var idcheck = /^[a-zA-Z0-9]+$/
    if (!idcheck.test(idval) || idval.length<6 ){
        alert('아이디는 6글자 이상의 영문과 숫자만을 이용해서 만들어주세요.')
        $('#idbox').focus()
        return false
    }

    // 비밀번호는 영문, 숫자, 특수문자 중 3가지 이상 조합. 첫글자는 영어만 허용
    var passvalcheck = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    var passval = $('#pwbox').val()
    var passvalok = $('#pwboxok').val()

    if ( !passvalcheck.test(passval) ) {
        alert('비밀번호는 영문, 숫자, 특수문자 중 3가지 이상을 사용하여 만들어주세요.')
        $('#pwbox').focus()
        return false
    } else {
        if (passvalok) {
            if(passval!==passvalok){
                alert('비밀번호가 맞지 않습니다.')
                $('#pwbox').focus()
                return false
            }
        } else {
            alert('비밀번호확인을 입력해주세요.')
            $('#pwboxok').focus()
            return false
        }
    }    
    var nameval = $('#irum').val()
    var namevalcheck = /^[가-힣]+$/
    if (!namevalcheck.test(nameval)) {
        alert('이름은 한글만 입력해주세요.')
        $('#irum').focus()
        return false
    }

    // 휴대폰 가운데 번호 숫자는 3~4개
    // 마지막 번호 숫자 4개 
    var hp1val = $('#hp1').val()
    var hp2val = $('#hp2').val()
    var hp1valcheck = /^\d{3,4}$/
    var hp2valcheck = /^\d{4}$/
    if (!hp1valcheck.test(hp1val)) {
        alert('휴대폰 번호를 다시 입력해주세요')
        $('#hp1').focus()
        return false
    } else {
        if (!hp2valcheck.test(hp2val)) {
            alert('휴대폰 번호를 다시 입력해주세요')
            $('#hp2').focus()
            return false
        }
    }

    var emailval = $('#emaildomain').val()
    var emailvalcheck = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/
    if (!emailvalcheck.test(emailval)){
        alert('이메일 형식에 맞지 않습니다.')
        $('#eamildomain').focus()
        return false
    }

    if( !$('#male').prop('checked') && !$('#femlae').prop('checked')){
        alert('성별을 선택해주세요.')
        $('#male').focus()
        return false
    }


    return false  // 프로그램 완성 후 삭제
})











// 이메일 주소 입력상자에서 선택상자의 옵션을 변경했을 때
// 선택된 option의 value 값을 추출해서      : .val()
// value값이 noselect가 아니고, self가 아닌 경우
// #emalidomain 입력상자에 쓰고, 비활성화   : .val('쓸내용')
// value값이 self인 경우에는 disabled를 false로 바꿔서 입력상자 활성화
// valuer값이 noselect인 경우에는 비활성화
$('#domainlist').on('change', function(){
    var value = $(this).find('option:selected').val()
    if ( value!=='noselect' && value!=='self' ) {
        $('#emaildomain').val(value).attr({disabled:true})
    } else if(value==='self') {
        $('#emaildomain').attr({ disabled : false }).val("")
    } else {
        $('#emaildomain').attr({ disabled : true }).val("")
    }
})

// 체크박스들 전체선택으로 제어하기
$('.joinBox #all').on('click', function(){
    var check = $(this).prop('checked')
    // $('input[id^="co"]').prop({checked:check})
    $(this).siblings('input').prop({checked:check})
})

// 메모박스에 글씨를 입력할 때마다 남은 글자 수 계산하기
var maxleng = 10
$('.joinBox #memo').on('keyup', function(){
    var currleng = $(this).val().length
    var remainleng = maxleng-currleng
    if (remainleng===-1) remainleng=0
    $(this).next().text(remainleng);
})