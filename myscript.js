

function removeFirst(){
    document.getElementById("firstColumn").innerHTML = "";
}


function removeSecond(){
    document.getElementById("secondColumn").innerHTML = "";
}

function removeThird(){
    document.getElementById("thirdColumn").innerHTML = "";
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })