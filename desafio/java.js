document.getElementById("sla").addEventListener("click", 
    function() {
        let nome = prompt("Digite o seu nome:");
        if (!nome) {
            nome = "batata";
        }
        alert(`Olá ${nome}, seja bem-vindo(a)! Agora você é um(a) capivario(a)`);
    });