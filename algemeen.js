let ipbackend = "http://20.31.207.39:8080"
// let ipbackend = "http://localhost:8080"
let pythonBackend = "http://52.143.9.145:5000"
// let pythonai = "http://localhost:5000"
let pythonai = "http://20.73.213.206:5000"

function TekenNavBalk(modifier){

    let paginamodifier = modifier;
    let menudiv = document.getElementById("navbalk");
    let navbarHTML ='';
    console.log("abc"+paginamodifier)
    switch (paginamodifier){
        //Dit is de navbalk voor Trainees
        case "trainee":

            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="landingspagina_trainee.html"><img src="../images/NextMatch_TextLogo.png" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
        
            <div class="col-sm-2">
                <a href="trainee_overzicht_vacature.html" class="btn">Vacatures</a>
            </div>
        
            <div class="col-sm-2">
                <a href="trainee_overzicht_bedrijven.html" class="btn">Bedrijven</a>
            </div>

            <div class="col-sm-2">
            <a href="../login.html" class="btn">Log Uit</a>
            </div>
        
            <div class="col-sm-1">
                <img src="../images/NextMatch_TextLogo_round.png" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `;
        break;

        //Dit is de navbalk voor Bedrijven
        case ("bedrijf"):
            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="bedrijf_landingspagina.html"><img src="../images/NextMatch_TextLogo.png" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
            
            <div class="col-sm-2">
                <a href="bedrijf_overzicht_vacatures.html" class="btn">Mijn Vacatures</a>
            </div>
        
            <div class="col-sm-2">
                <a href="bedrijf_chats.html" class="btn">Chats</a>
            </div>
        
            <div class="col-sm-2">
                <a href="../login.html" class="btn">Log uit</a>
            </div>
        
            <div class="col-sm-1">
                <img src="../images/NextMatch_TextLogo_round.png" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `;
        break;
 //Dit is de navbalk voor de talentmanagers
    case ("talentmanager"):
        navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="talentmanager_landingspagina.html"><img src="../images/NextMatch_TextLogo.png" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>

            <div class="col-sm-1">
            </div>
            
            <div class="col-sm-1">
                <a href="talentmanager_overzicht_trainees.html" class="btn">Mijn Trainees</a>
            </div>
            

            <div class="col-sm-1">
                <a href="talentmanager_overzicht_bedrijven.html" class="btn">Mijn Bedrijven</a>
            </div>

            <div class="col-sm-1">
                <a href="talentmanager_chats.html" class="btn">Chats</a>
            </div>

            <div class="col-sm-1">
            <a href="Talentmanager_python.html" class="btn">Python</a>
            </div>

            <div class="col-sm-1">
            <a href="../login.html" class="btn">log uit</a>
            </div>

            <div class="col-sm-1">
                <img src="../images/NextMatch_TextLogo_round.png" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>

        </div>
        </div>
    `;
    break;

        //Dit is de navbalk voor het beheer
        case ("beheer"):
            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="../index.html"><img src="../images/NextMatch_TextLogo.png" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
            
            <div class="col-sm-2">
                <a href="bedrijf_beheer.html" class="btn">bedrijf</a>
            </div>
            
        
            <div class="col-sm-2">
                <a href="trainee_beheer.html" class="btn">Trainee</a>
            </div>
        
            <div class="col-sm-2">
                <a href="talentmanager_beheer.html" class="btn">Talentmanager</a>
            </div>
        
            <div class="col-sm-1">
                <img src="../images/NextMatch_TextLogo_round.png" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `;
        break;

        default:
            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="index.html"><img src="images/NextMatch_TextLogo.png" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
            
            <div class="col-sm-2">
                <a href="Actueel.html" class="btn">Actueel</a>
            </div>
        
            <div class="col-sm-2">
                <a href="YoungNext.html" class="btn">Young Next</a>
            </div>
        
            <div class="col-sm-2">
                <a href="../login.html" class="btn">Login</a>
            </div>
        
            <div class="col-sm-1">
                <img src="images/NextMatch_TextLogo_round.png" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `

    }
    menudiv.innerHTML= navbarHTML;
}
