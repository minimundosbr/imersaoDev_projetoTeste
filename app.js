function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if(!campoPesquisa){
        section.innerHTML = "Por favor, insira o nome de uma receita!"
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    
let resultados = "";
let title = "";
let description = "";
let tags = "";

for(let dado of dados){
    title = dado.receita.toLowerCase();
    description = dado.informacao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if(title.includes(campoPesquisa) || description.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2><a href="${dado.link}" target="_blank">${dado.receita}</a></h2>
        <p class="descricao-meta">${dado.informacao}
        </div>
    `
    }
   
}
if(!resultados){
    resultados = "Nenhuma receita encontrada!"
}

section.innerHTML = resultados;

}