/*  Lógica de programação Algoritmo
obj1 - Quando o usuário clicar no botão de ver o trailer, devemos abrir a modal com o video do trailer.

obj2 - Quando o usuário clicar no x, fechar a modal.

obj 1 
1 - pegar o elemento que representa o botão na tela.
2 - Identificar quano o usuário clicar no botão
3 - Pegar o elemento da modal 
4 - abrir a modal

obj 2 Quando o usuário clicar no X devemos fechar a modal
1 - pegar o elemento de fechar
2 - identificar quando o usuário clicar no x
3 - fechar a modal
*/
//1 - pegar o elemento que representa o botão na tela.
//1 - pegar o elemento de fechar
//3 - Pegar o elemento da modal 
const modal = document.querySelector('.modal');
const botaoTrailer = document.querySelector('.botao-trailer');
const fecharModal = document.querySelector('.fecha-modal');

//2 - Identificar quano o usuário clicar no botão
//2 - identificar quando o usuário clicar no x
botaoTrailer.addEventListener("click", ()=>{
    console.log('Clicou no botão');
    //4 - abrir a modal na tela
    //classe modal do html, depois classList q é a propriedade que acessa as classes e o metódo add() para adcionar uma nova classe
    modal.classList.add("aberto"); 
    //metodo setAttribute voccê consegue alterar os atributos de um elemento primeiro parametro é qual o atributo e o segundo é o valor.
    video.setAttribute("src","https://www.youtube.com/embed/Cb4WV4aXBpk") 

})

//3-fechar a modal
fecharModal.addEventListener('click', ()=> {
    modal.classList.remove("aberto");
    video.setAttribute("src","");
})

const video = document.getElementById('video');


/*
Refaturando o codigo:
1 - Evidar redundâncias 
    Ao inves de usar nas funções add() e remove(), poderia ser trocado por toggle(), toggle() realiza as duas funções quando verdadeiro joga falso, falso joga verdadeiro. como um interruptor. adcionando ou removendo a classe de abertura de modal "aberto"

    modal.classList.toggle("aberto")

 2 - Não repetir codigos, criar uma função para reduzir isso.
    No caso da linha do código modal.classList.toggle('aberto') o ideal por se repetir mais de uma vez transformar essa linha numa função.

    function alternarModal() {
        modal.classList.toggle("aberto")
    }

    Em seguida chamar dentro do addEventListener('click',()=>{
        alternarModal();
        video.setAttribute...
    })
 */




