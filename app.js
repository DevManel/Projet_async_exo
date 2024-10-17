/*tester le fetch
recuperer les boutons
faire une requete fetch
afficher les données user dans la console
afficher les données user ds html
*/
document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    const userPhoto = document.getElementById('photo-user');
    const result = document.getElementById('resultat')
    const btnH = document.getElementById('homme');
    const btnF = document.getElementById('femme');
    const btnNewG = document.getElementById('new_game')
    
    let utilisateurActuel = null;
    
    async function randomUser(){
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            console.log(response)
            utilisateurActuel = data.results[0];
            console.log(utilisateurActuel);
            displayUser(utilisateurActuel);
            result.textContent = '';
    }
    console.log(randomUser())
    function displayUser(user){
        userPhoto.src = user.picture.large;
    }
    
    
    function verifRep(devine){
        if(utilisateurActuel){
            const genreActu = utilisateurActuel.gender;
            if(devine === genreActu){
                result.textContent = 'Bravo ! Vous avez deviné correctement.';
                result.style.color = 'green';
            } else{
                result.textContent = "Dommage, ce n'était pas la bonne réponse."
                result.style.color = 'red';
            }
        }
    }
    console.log(verifRep())
    
    btnH.addEventListener('click', () => verifRep('male'));
    btnF.addEventListener('click', () => verifRep('female'));
    btnNewG.addEventListener('click', randomUser)
    
    console.log(displayUser())
})