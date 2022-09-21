
//Nous commençons par appeler (et créer) la fonction
function maFonction() {
    // Nous poursuivons en créant une variable JS que l'on lie à la balise <i> (soit notre îcone d'oeil) grâce à son id dans le fichier HTML
    let img = document.getElementById('mdpShow');
    //Nous créons également une variable JS que l'on lie à l'input dans le fichier HTML grâce à son id
    let inputpassword = document.getElementById("mdp");
    //Par la suite nous voulons que le l'oeil apparaisse/disparaisse et que le champ de saisit soit visible/composé d'astérix en fonction de si l'utilisateur clique sur l'oeil ou non
    //Pour ce faire nous créons alors un if...else qui vas vérifier si l'input type est soit "password" (astérix) (position initiale) soit "text"
    if (inputpassword.type == "password") {
        inputpassword.type = "text";
        img.className = "fa-regular fa-eye-slash";
        //Si l'input est "password" alors on vas le remplacer par du texte en changeant le type
        //Puis on vas changer l'îcone d'oeil en oeil barré en changeant l'attribut class de la balise <i> vers l'îcone spécifique de fontawesome
        setTimeout(cinqSeconde, 5000);
        function cinqSeconde() {
            inputpassword.type = "password";
            img.className = "fa-regular fa-eye";
        }
        //Puisque l'on veut également que le champ de saisit se change à nouveau en astérix au bout de 5 seconde si l'utilisateur ne reclique pas sur l'oeil alors on utilise setTimeout que l'on associe à la fonction "cinqSeconde" et où l'on règle les paramètre à 5000ms
        //La fonction cinqSeconde vas donc faire revenir l'input type à "password" et l'îcone à un oeil non barré
    }
    else {
        inputpassword.type = "password";
        img.className = "fa-regular fa-eye";
    }
    //Dans le cas où l'utilisateur reclique sur l'oeil avant les 5 secondes alors il se passeras la même chose qu'avec la fonction "cinqSeconde" (mdp en astérix et oeil non barré)
}