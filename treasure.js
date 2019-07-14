var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)
var counter = 5

function treasure(location) {


        counter = counter - 1
        document.getElementById("counter").innerHTML = counter

    if (treasureLocation === bombLocation) {
        treasureLocation += 1
    }
    else if (location === bombLocation){
        document.getElementById(location).innerHTML = "&#x2620"
        setTimeout(function(){
            alert("You Lose");
            window.location.reload();

        },500)
    }
    else if (treasureLocation === location){
        document.getElementById(location).innerHTML = "&#x1f308"
        setTimeout(function(){
            alert("You Win");
            window.location.reload();
        },500)
    }
    else if (counter === 0){
        alert("Not quick enough! Pirates got ya!!! ARRRR!!!");
        window.location.reload()

    }

    else {
        document.getElementById(location).innerHTML = "&#x1f332"
    }

}
