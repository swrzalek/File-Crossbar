
function processInput(holder) {
    var elements = holder.children(), //taking the "kids" of the parent
        str = ""; //unnecesary || added for some future mods

    elements.each(function (e) { //iterates through each element
        var val = $(this).val().replace(/\D/, ""), //taking the value and parsing it. Returns string without changing the value.
            focused = $(this).is(":focus"), //checks if the current element in the iteration is focused
            parseGate = false;

        val.length == 1 ? parseGate = false : parseGate = true;
        /*a fix that doesn't allow the cursor to jump
        to another field even if input was parsed
        and nothing was added to the input*/

        $(this).val(val); //applying parsed value.

        if (parseGate && val.length > 1) { //Takes you to another input
            var exist = elements[e + 1] ? true : false; //checks if there is input ahead
            exist && val[1] ? ( //if so then
                elements[e + 1].disabled = false,
                    elements[e + 1].value = val[1], //sends the last character to the next input
                    elements[e].value = val[0], //clears the last character of this input
                    elements[e + 1].focus() //sends the focus to the next input
            ) : void 0;
        } else if (parseGate && focused && val.length == 0) { //if the input was REMOVING the character, then
            var exist = elements[e - 1] ? true : false; //checks if there is an input before
            if (exist) elements[e - 1].focus(); //sends the focus back to the previous input
        }

        val == "" ? str += " " : str += val;
    });
}

$("#inputs").on('input', function () { processInput($(this)) }); //still wonder how it worked out. But we are adding input listener to the parent... (omg, jquery is so smart...);

$("#inputs").on('click', function (e) { //making so that if human focuses on the wrong input (not first) it will move the focus to a first empty one.
    var els = $(this).children(),
        str = "";
    els.each(function (e) {
        var focus = $(this).is(":focus");
        $this = $(this);
        while ($this.prev().val() == "") {
            $this.prev().focus();
            $this = $this.prev();
        }
    })
});
// Function fetching digits from inputs and returning it as a 6 digits number
function fetchNumberfromInput() {
    var i1 = $("#i1").val();
    var i2 = $("#i2").val();
    var i3 = $("#i3").val();
    var i4 = $("#i4").val();
    var i5 = $("#i5").val();
    var i6 = $("#i6").val();
    return i1 + i2 + i3 + i4 + i5 + i6;
}
// Removing values from all inputs
function clearInputs() {
    $("#i1").val("");
    $("#i2").val("");
    $("#i3").val("");
    $("#i4").val("");
    $("#i5").val("");
    $("#i6").val("");
}
// On submit
$("#sumbit").on('click', function () {
    // Initialize request
    var request;
    // Siging number to a variable
    var code = fetchNumberfromInput();
    // Checking if enetered code is not empty and have 6 digits
    if (code == "" && code.length != 6 ) {
        toastr.error("Please enter code !");
    }
    else {
        event.preventDefault();
        if (request) {
            request.abort();
        }
        request = $.ajax({
            url: "/receive/getImageUrl",
            type: "get",
            data: {code: code}
        });
        request.done(function (data) {
            // On Success inform user that
            var reslink = data.link;
            if (reslink == null) {
                toastr.error("Wrong code entered !")
            }
            else {
                $("#download_link").attr("href", reslink);
                $("#download_link").show();
                /////
                var image = new Image();
                image.crossOrigin = "anonymous";
                image.src = reslink;
                // get file name - you might need to modify this if your image url doesn't contain a file extension otherwise you can set the file name manually
                var fileName = image.src.split(/(\\|\/)/g).pop();
                image.onload = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
                    canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
                    canvas.getContext('2d').drawImage(this, 0, 0);
                    var blob;
                    // ... get as Data URI
                    if (image.src.indexOf(".jpg") > -1) {
                        blob = canvas.toDataURL("image/jpeg");
                    } else if (image.src.indexOf(".png") > -1) {
                        blob = canvas.toDataURL("image/png");
                    } else if (image.src.indexOf(".gif") > -1) {
                        blob = canvas.toDataURL("image/gif");
                    } else {
                        blob = canvas.toDataURL("image/png");
                    }
                    //  var element = "'<a id="download_link" download='" + fileName + "' href='" + blob + " type = "button"  class="btn btn-outline-info btn-lg" > Download</a >

                    $("body").html("<b>Click image to download.</b><br><a download='" + fileName + "' href='" + blob + "'><img src='" + blob + "'/></a>");
                };
            }
        })
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });
    }
    // clearing inputs after submitting form
    clearInputs();
});
