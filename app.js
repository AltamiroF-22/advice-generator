const button = document.querySelector('button');

button.addEventListener('click', e => {
    e.preventDefault();

    newPost(e);
});
newPost();

async function newPost(e){

    try{
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const html = await resposta.json();

        carregaResultado(html);

        if(resposta.status !== 200) throw new Error(resposta.status);
    }catch(err) {
        alert('Algo deu errado.');
        console.log(err);
    }
}

function carregaResultado(resposta) {
 const adviceText = document.querySelector('.advice-text');
 const spanAdvice = document.querySelector('#advice');
 spanAdvice.innerText =resposta.slip.id
 adviceText.innerText = `" ${resposta.slip.advice} "`    
}