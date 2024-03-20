let ipbackend = "http://20.31.207.39:8080"
let localhost = "http://localhost:8080"
// let ipbackend = "http://localhost:8080"   
let pythonBackend = "http://52.143.9.145:5000"
// let pythonai = "http://localhost:5000"
let pythonai = "http://20.73.213.206:5000"

function TekenNavBalk(modifier){

    let paginamodifier = modifier;
    let menudiv = document.getElementById("navbalk");
    let navbarHTML ='';
    console.log("Pagina modifier: "+paginamodifier)
    switch (paginamodifier){
        //Dit is de navbalk voor Trainees
        case "trainee":

            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="landingspagina_trainee.html"?`+localStorage.getItem("loginQuery")+`><img src="../images/NEXTMATCH_text.svg" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
        
            <div class="col-sm-2">
                <a href="trainee_overzicht_vacature.html?`+localStorage.getItem("loginQuery")+`" class="btn">Vacatures</a>
            </div>
        
            <div class="col-sm-2">
                <a href="trainee_overzicht_bedrijven.html?`+localStorage.getItem("loginQuery")+`" class="btn">Bedrijven</a>
            </div>

            <div class="col-sm-2">
            <button class="btn" onclick="logOut()">Log Uit</button>
            </div>

        
            <div class="col-sm-1">
                <img src="../images/NEXTMATCH_LOGO.svg" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `;
        break;

        //Dit is de navbalk voor Bedrijven
        case ("bedrijf"):
            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="bedrijf_landingspagina.html?`+localStorage.getItem("loginQuery")+`"><img src="../images/NEXTMATCHLOGO.svg" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
            
            <div class="col-sm-2">
                <a href="bedrijf_overzicht_vacatures.html?`+localStorage.getItem("loginQuery")+`" class="btn">Mijn Vacatures</a>
            </div>
        
            <div class="col-sm-2">
                <a href="bedrijf_chats.html?`+localStorage.getItem("loginQuery")+`" class="btn">Chats</a>
            </div>
        
            <div class="col-sm-1">
            <button class="btn" onclick="logOut()">Log Uit</button>
            </div>

        
            <div class="col-sm-1">
                <img src="../images/NEXTMATCH_LOGO.svg" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `;
        break;
 //Dit is de navbalk voor de talentmanagers
    case ("talentmanager"):
        navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="talentmanager_landingspagina.html?`+localStorage.getItem("loginQuery")+`"><img src="../images/NEXTMATCHLOGO.svg" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>

            <div class="col-sm-1">
            </div>
            
            <div class="col-sm-1">
                <a href="talentmanager_overzicht_trainees.html?`+localStorage.getItem("loginQuery")+`" class="btn">Mijn Trainees</a>
            </div>
            

            <div class="col-sm-1">
                <a href="talentmanager_overzicht_bedrijven.html?`+localStorage.getItem("loginQuery")+`" class="btn">Mijn Bedrijven</a>
            </div>

            <div class="col-sm-1">
                <a href="talentmanager_chats.html?`+localStorage.getItem("loginQuery")+`" class="btn">Chats</a>
            </div>

            <div class="col-sm-1">
            <a href="talentmanager_python.html?`+localStorage.getItem("loginQuery")+`" class="btn">Python</a>
            </div>

            <div class="col-sm-1">
            <button class="btn" onclick="logOut()">Log Uit</button>
            </div>

            <div class="col-sm-1">
                <img src="../images/NEXTMATCH_LOGO.svg" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>

        </div>
        </div>
    `;
    break;

        //Dit is de navbalk voor het beheer
        case ("beheer"):
            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="../index.html"><img src="../images/NEXTMATCHLOGO.svg" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
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
                <img src="../images/NEXTMATCH_LOGO.svg" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `;
        break;

        default:
            navbarHTML = `<div class="container text-center">

            <div class="col-sm-2">
                <a href="index.html"><img src="../images/NEXTMATCHLOGO.svg" alt="=NEXT MATCH=" style="width: 90%; height: auto;" class="img-thumbnail"></a>
            </div>
        
            <div class="col-sm-3">
            </div>
            
            <div class="col-sm-2">
                <a href="Actueel.html" class="btn">Actueel</a>
            </div>
        
            <div class="col-sm-2">
                <a href="YoungNext.html" class="btn">About Next</a>
            </div>
        
            <div class="col-sm-2">
                <a href="../login.html" class="btn">Login</a>
            </div>
        
            <div class="col-sm-1">
                <img src="../images/NEXTMATCH_LOGO.svg" alt="=NEXT MATCH=" style="width: 85%; height: auto;">
            </div>
        
        </div>
        </div>
        `

    }
    menudiv.innerHTML= navbarHTML;
}

function CheckValidLogin(endpoint, id){
    fetch(ipbackend+"/"+endpoint+"/"+id)
    .then(response => 
    response.json()
    ).then(d=>inlogCheck(d,endpoint))
}
function inlogCheck(data,loginType){
    console.log(data);
    let succes = false;
    if (data != null) {
        switch (loginType) {
          case "trainee"      :localStorage.setItem("loginQuery", "trid="+data.id); succes = true; break;
          case "talentmanager":localStorage.setItem("loginQuery", "tmid="+data.id); succes = true; break;
          case "bedrijf"      :localStorage.setItem("loginQuery", "bfid="+data.id); succes = true; break;
          default             :console.log("Unknown Login Type."); succes = false;
        }}
    else{console.log("ID not found."); alert("ID does not exist."); succes = false;}
            
    console.log("login Query = "+localStorage.getItem("loginQuery"))
    console.log("check succesful = "+succes)
    let nextPage = loginType+"/"+loginType+"_landingspagina"+".html?"+localStorage.getItem("loginQuery");
    console.log(nextPage);
    
    if (succes){window.location.href = nextPage;}
}

function logOut(){
    console.log("clearing loginQuery")
    localStorage.setItem("loginQuery",null);
    localStorage.setItem("logintype",null);
    console.log("login Query = "+localStorage.getItem("loginQuery"))
    console.log("login type = "+localStorage.getItem("logintype"))
    window.location.href="../login.html";

}

function loadProfileData(){
    let url_string = window.location.href;
    let url = new URL(url_string);
    let loginType = localStorage.getItem("logintype");
    let paramValue;
    let succes = false;

    switch (loginType){
        case "trainee":
            paramValue = url.searchParams.get("tmid");
            localStorage.setItem("loginQuery", "trid="+paramValue);
            succes = true;
            break;
        case "talentmanager":
            paramValue = url.searchParams.get("tmid");
            localStorage.setItem("loginQuery", "tmid="+paramValue);
            succes = true;
            break;
        case "bedrijf":
            paramValue = url.searchParams.get("bfid");
            localStorage.setItem("loginQuery", "bfid="+paramValue);
            succes = true;
            break;
        default:
            console.log("Geen login Type bekend.")
            succes = false;

    }
    if (succes){
        console.log("login Query = "+localStorage.getItem("loginQuery"))
        x = paramValue;
        console.log("current profile id: "+ x);
        console.log("current login type: "+loginType)

        let fetchUrl= ipbackend+"/"+localStorage.getItem("logintype")+"/"+x;
        console.log(fetchUrl);

        TekenNavBalk(loginType);

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                let jsonObject = data;
                let stringyfiedJSON = JSON.stringify(jsonObject);

                // console.log(jsonObject);
                // console.log(stringyfiedJSON)
                slaJSONstringOp(stringyfiedJSON)
            }
        )
    }else{ console.log("Geen Actie.")}}

function slaJSONstringOp(stringyfiedJSON){
    localStorage.setItem("ProfielString",stringyfiedJSON)
}
function laatObject(){
    let a = localStorage.getItem("ProfielString");
    let hetObject = JSON.parse(a);
    // console.log(hetObject)
    return hetObject
}

// JSON.stringify()
// JSON.parse()