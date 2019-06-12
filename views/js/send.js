
console.log('JavaScript working');
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');
var request;


// Submiting
$("#sumbit").click(function () {
    var filesCount = $("#file-input")[0].files.length;
    if (filesCount === 0) {
        toastr.error("No files selected")
    } else {
        // AJAX POST
        // Fetch AWS file link singed to value property
        var aws_link = $('#url').val();
        // ajax post request sending link to backend
        request = $.ajax({
            url: "/send/getCode",
            type: "post",
            data: { "link": aws_link }
        });
        // Callback handler that will be called on success
        request.done(function (data) {
            console.log(data.random);
            var rm = data.random;
            $("#code").text(rm.toString());
        })
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            toastr.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            // Prevent submiting
            event.preventDefault();
            if (request) {
                request.abort();
            }
        });
        DOMafterSubmitSuccess();
    }
});
function DOMafterSubmitSuccess() {

    $(".file-drop-area").hide();
    $("#code").show();
    $("#next-file").show();
    $("#sumbit").hide();
}
// Next file respond
$("#next-file").click(function () {
    $(".file-drop-area").show();
    $("#code").hide();
    $("#next-file").hide();
    $("#file-input").val('');
    $('.fake-btn').text('SELECT FILE');

});
// highlight drag area
$fileInput.on('dragenter focus click', function () {
    $droparea.addClass('is-active');
});
// back to normal state
$fileInput.on('dragleave blur drop', function () {
    $droparea.removeClass('is-active');
});
// change inner text
$fileInput.on('change', function () {
    $("#overlay").fadeIn(300);
    var filesCount = $(this)[0].files.length;
    var $textContainer = $('.fake-btn');

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
    initUpload();

});
// functions from account.html
function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {


                $("#sumbit").show();
                $("#overlay").fadeOut(300);


            }
            else {
                toastr.error('Could not upload file.');
            }
        }
    };
    xhr.send(file);
}
//New function from above in jquery

/*
  Function to get the temporary signed request from the app.
  If request successful, continue to upload the file using this signed
  request.
*/
function getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `send/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                uploadFile(file, response.signedRequest, response.url);
                document.getElementById('url').value = "https://filecrosbarr.s3.eu-west-2.amazonaws.com/" + file.name;

            }
            else {
                toastr.error('Could not get signed URL.');
            }
        }
    };
    xhr.send();
}

/*
 Function called when file input updated. If there is a file selected, then
 start upload procedure by asking for a signed request from the app.
*/
function initUpload() {
    console.log('working')
    const files = document.getElementById('file-input').files;
    const file = files[0];
    if (file == null) {
        return alert('No file selected.');
    }
    getSignedRequest(file);
}
