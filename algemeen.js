let ipbackend = "http://20.31.207.39:8080"
let pythonBackend = "http://52.143.9.145:5000"

function tekenNavBalk(){
    let menudiv = document.getElementById("navbalk");
    menudiv.innerHTML=`
    <div class="container text-center">

            <div class="col-sm-2">
                <a href="index.html"><img src="images/NextMatch_TextLogo.png" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>

            <div class="col-sm-3">
            </div>
            
            <div class="col-sm-2">
                <a href="url" class="btn">TEST</a>
            </div>

            <div class="col-sm-2">
                <a href="url" class="btn">Young Next</a>
            </div>

            <div class="col-sm-2">
                <a href="login.html" class="btn">Login</a>
            </div>

            <div class="col-sm-1">
                <img src="images/NextMatch_TextLogo_round.png" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>

        </div>
      </div>   `
}