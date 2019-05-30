$('.left').click(function () {
    window.location.href = '/send';
})
$('.right').click(function () {
    window.location.href = '/receive';
})

var formData = fs.createReadStream('./temp' + fileName);
request.put({url: returnData.signedRequest,formData: formData}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
})
