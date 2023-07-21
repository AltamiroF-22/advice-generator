# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [Links](#links)
  - [What I learned](#what-i-learned)
  - [Author](#author)//

### Links

- Live Site URL: [Add live site URL here]((https://64ba7ed6591bfc052d845930--profound-lolly-d27645.netlify.app/))


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
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
```

## Author
- Frontend Mentor - [@AltamiroF-22](https://www.frontendmentor.io/profile/AltamiroF-22)
- Instagram - [@junior.rx22](https://www.instagram.com/junior.rx22/)
