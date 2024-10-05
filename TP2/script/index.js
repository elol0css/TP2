// EXERCICE 1
let phrase5MotTxt= prompt("Écrivez une phrase avec 5 mots maximum");

let longueurMots= [];
if(phrase5MotTxt.length == 0)
{
    alert("Le nombre de mots dans la phrase " + 0);
    longueurMots.push("".length);
    longueurMots.push("".length);
    longueurMots.push("".length);
    longueurMots.push("".length);
    longueurMots.push("".length);
}
else if(phrase5MotTxt.length >=1)
{    
    let phrase5Mot= phrase5MotTxt.split(" ");
    let numMots= phrase5Mot.length;

    alert("Le nombre de mots dans la phrase " + numMots);
    let texte = " ";

    if (numMots == 1) //toDo//remplacer par une boucle for
        {
            longueurMots.push(phrase5Mot[0].length);
            longueurMots.push("".length);
            longueurMots.push("".length);
            longueurMots.push("".length);
            longueurMots.push("".length);
       }
        else 
        if(numMots == 2)
            {
            longueurMots.push(phrase5Mot[0].length);
            longueurMots.push(phrase5Mot[1].length);
            longueurMots.push("".length);
            longueurMots.push("".length);
            longueurMots.push("".length);
            } 

            else 
            if (numMots == 3)
                {
                    longueurMots.push(phrase5Mot[0].length);
                    longueurMots.push(phrase5Mot[1].length);
                    longueurMots.push(phrase5Mot[2].length);
                    longueurMots.push("".length);
                    longueurMots.push("".length);
                    // texte = phrase5Mot[0].length + ", " + phrase5Mot[1].length + phrase5Mot[2].length +  " , 0, 0";            
                    // alert("Les longueurs des mots respectivement : " + texte);
                }

            else if (numMots == 4)
                {
                    
                    longueurMots.push(phrase5Mot[0].length);
                    longueurMots.push(phrase5Mot[1].length);
                    longueurMots.push(phrase5Mot[2].length);
                    longueurMots.push(phrase5Mot[3].length);
                    longueurMots.push("".length);
                    //texte = phrase5Mot[0].length + ", " + phrase5Mot[1].length + ", " +  phrase5Mot[2].length + ", " + phrase5Mot[3].length + " , 0";            
                    //alert("Les longueurs des mots respectivement : " + texte);
                }
                else if (numMots == 5)
                    {
                        
                        longueurMots.push(phrase5Mot[0].length);
                        longueurMots.push(phrase5Mot[1].length);
                        longueurMots.push(phrase5Mot[2].length);
                        longueurMots.push(phrase5Mot[3].length);
                        longueurMots.push(phrase5Mot[4].length);
                        //texte = phrase5Mot[0].length + ", " + phrase5Mot[1].length + ", " +  phrase5Mot[2].length + ", " + phrase5Mot[3].length + ", " + phrase5Mot[4].length;            
                        //alert("Les longueurs des mots respectivement : " + texte);
                    }

}
                          
alert("Les longueurs des mots respectivement : " + longueurMots);

// let longueurMots= [];
// longueurMots.push(phrase5Mot[0].length);
// longueurMots.push(phrase5Mot[1].length);
// longueurMots.push(phrase5Mot[2].length);
// longueurMots.push(phrase5Mot[3].length);
// longueurMots.push(phrase5Mot[4].length);

// let motLong=
// let motCourt=

// EXERCICE 2

// EXERCICE 3 

// EXERCICE 4

// EXERCICE 5