const PinMatch = (data) => {

    var resObj = new Array();
    var resText = false;
    var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s+]/gi;
    var alpExp = /[A-Z]/gi;

    var marksBoolean = regExp.test(data);
    var alpBoolean = alpExp.test(data);

    console.log('a', marksBoolean);
    console.log('b', alpBoolean);

    if (marksBoolean != true && alpBoolean != true) { 
        resText = true;
    }

    resObj = { res: resText, text: data }
    return resObj;
};

export default PinMatch;