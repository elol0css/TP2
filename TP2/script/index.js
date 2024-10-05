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
        else if(numMots == 2)
            {
            longueurMots.push(phrase5Mot[0].length);
            longueurMots.push(phrase5Mot[1].length);
            longueurMots.push("".length);
            longueurMots.push("".length);
            longueurMots.push("".length);

            let motUn;
            let motDeux;
            let motLong;
            motUn= phrase5Mot.shift();
            motDeux= phrase5Mot.shift();
           

            // chercher mot + long + court
            //si motUn plus long
            //sinon motDeux plus long
            //sinon =
            //alert

            if (motUn.length > motDeux.length)
            {
                motLong = motUn
                alert("le mot le plus long de la phrase: " + motLong);
            }

            else if (motDeux.length > motUn.length) 
            {
                motLong = motDeux
                alert("le mot le plus long de la phrase: " + motLong);
            }
             
            else {
                alert("les mots sont de mêmes longueur")
            }
           
            } 

            else 
            if (numMots == 3)
                {
                    longueurMots.push(phrase5Mot[0].length);
                    longueurMots.push(phrase5Mot[1].length);
                    longueurMots.push(phrase5Mot[2].length);
                    longueurMots.push("".length);
                    longueurMots.push("".length);

                    motTrois= phrase5Mot.shift();

                    if (motUn.length > motDeux.length)
                        {
                            motLong = motUn
                            alert("le mot le plus long de la phrase: " + motLong);
                        }
            
                        else if (motDeux.length > motUn.length) 
                        {
                            motLong = motDeux
                            alert("le mot le plus long de la phrase: " + motLong);
                        }

                        else if (motUn.lenght && motDeux.lenght < motTrois.lenght)
                        {
                            motLong = motTrois
                            alert("le mot le plus long de la phrase: " + motLong);
                        }
                }

            else if (numMots == 4)
                {
                    
                    longueurMots.push(phrase5Mot[0].length);
                    longueurMots.push(phrase5Mot[1].length);
                    longueurMots.push(phrase5Mot[2].length);
                    longueurMots.push(phrase5Mot[3].length);
                    longueurMots.push("".length);
                }
                else if (numMots == 5)
                    {
                        
                        longueurMots.push(phrase5Mot[0].length);
                        longueurMots.push(phrase5Mot[1].length);
                        longueurMots.push(phrase5Mot[2].length);
                        longueurMots.push(phrase5Mot[3].length);
                        longueurMots.push(phrase5Mot[4].length);
                    }

}
                          
alert("Les longueurs des mots respectivement : " + longueurMots);

let motLong= 0;
let motActuel= longueurMots.pop;
motLong= longueurMots.pop 


// let motCourt=

// EXERCICE 2

// EXERCICE 3 

// EXERCICE 4

// EXERCICE 5