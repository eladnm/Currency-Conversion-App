getDataNow();
function getDataNow(){
        $.get("https://forex.1forge.com/1.0.1/quotes?pairs=EURUSD,GBPJPY,AUDUSD", getData);
}
function getData(result) {
    $('#aud_time').text(result[0].timestamp); 
    $('#aud_price').text(result[0].price);
    $('#aud_symbol').text(result[0].symbol);
    $('#gbp_time').text(result[1].timestamp);
    $('#gbp_price').text(result[1].price);
    $('#gbp_symbol').text(result[1].symbol);
    $('#jpy_time').text(result[2].timestamp);
    $('#jpy_price').text(result[2].price);
    $('#jpy_symbol').text(result[2].symbol);  
    };
    function RefreshDataNow(){
        $.get("https://forex.1forge.com/1.0.1/quotes?pairs=EURUSD,GBPJPY,AUDUSD", RefreshData);
}
    function RefreshData(result) {
    $('#aud_time').text(convertToTime(result[0].timestamp)); 
    $('#aud_price').text(result[0].price);
    $('#gbp_time').text(convertToTime(result[1].timestamp));
    $('#gbp_price').text(result[1].price);
    $('#jpy_time').text(convertToTime(result[2].timestamp));
    $('#jpy_price').text(result[2].price);
};
function convertToTime(timestamp){
    var time = new Date(timestamp);
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return hours + ":" + minutes + ":" + seconds;;
}
  
 setInterval(function() {
    RefreshDataNow();
}, 800);
 $("#convert_now").click(function(){
  $("form").show(); 
});

$('form').submit(function(e) {
    e.preventDefault();
    var currency = $('select').val();
    console.log(currency);
    var amount = $('#amount').val();
    console.log(amount);
    var result = $('#yourResult').val();
    var test= $.get('https://forex.1forge.com/1.0.1/convert?from=USD&to=' + currency  + '&'  + 'quantity=' + amount, function(response) {
    $('#yourResult').text(response.value);
    console.log(test);
  });
});

function printResult(resonse) {
  $('result').val(res);
}
			