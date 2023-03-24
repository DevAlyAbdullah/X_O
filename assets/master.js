$(function () {
    var lastVal = "X";
    var audioClick = new Audio("https://docs.google.com/uc?export=download&id=1PVt3NXAbMkAgpl0oRx4IXTogbxqHTp1-");

    $("#container > div").click(function () {
        if( $("#congratz").val() != "Congratulations O, you just won!")
        {
            var boxVal = $(this).val();

            if(boxVal == "X" || boxVal == "O")
            {
                console.log("error");
            } else if (check())
            {
                audioClick.play();

                $("#playX").toggleClass("hide");
                $("#playO").toggleClass("hide");
                $(this).append(lastVal);
                $(this).val(lastVal);  
                if(lastVal == "X"){
                    lastVal = "O";
                } else {
                    lastVal = "X";
                }  
                check();    
            }    
        }
    });

    const audioCongratz = new Audio("https://docs.google.com/uc?export=download&id=14UWI-Z7SIpHWZhfebKQubJ537FbcTpwM");

    function check(){
        var one = $("#one").val();
        var two = $("#two").val();
        var three = $("#three").val();
        var four = $("#four").val();
        var five = $("#five").val();
        var six = $("#six").val();
        var seven = $("#seven").val();
        var eight = $("#eight").val();
        var nine = $("#nine").val();

        if((one == "X" && two == "X" && three == "X") ||
        (one == "X" && four == "X" && seven == "X") ||
        (one == "X" && five == "X" && nine == "X") ||
        (two == "X" && five == "X" && eight == "X") ||
        (three == "X" && six == "X" && nine == "X") ||
        (three == "X" && five == "X" && seven == "X") ||
        (four == "X" && five == "X" && six == "X") ||
        (seven == "X" && eight == "X" && nine == "X") ||
        (four == "O" && five == "O" && six == "O") ||
        (seven == "O" && eight == "O" && nine == "O") ||
        (one == "O" && two == "O" && three == "O") ||
        (one == "O" && four == "O" && seven == "O") ||
        (one == "O" && five == "O" && nine == "O") ||
        (two == "O" && five == "O" && eight == "O") ||
        (three == "O" && six == "O" && nine == "O") ||
        (three == "O" && five == "O" && seven == "O"))
        {
            if(lastVal == "X")
            {
                audioCongratz.play();
                $("#congratz").append("Congratulations O, you just won!");
                $("#congratz").val("Congratulations O, you just won!");                
            } else if (lastVal == "O")
            {
                audioCongratz.play();
                $("#congratz").append("Congratulations X, you just won!");
                $("#congratz").val("Congratulations O, you just won!");                
            }
            return false;
        } else
        {
            return true;
        }
    }




    console.log("master.js loaded successfully");
});