/* const pronoun = ['the', 'our'];

const adj = ['great', 'big'];

const noun = ['jogger', 'racoon'];

function sentence() {
    for (let i = 0; i<pronoun.length; i++) {
        for (let j=0; j<adj.length; j++) {
            for (let k=0; k<noun.length; k++) {
                console.log(pronoun[i] + adj[j] + noun[k] + '.com');
            }
        }
    }
}

sentence() */


//Yo creo que klo mejoraría de esta otra forma:

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];

function sentence() {
    pronoun.forEach(pronoun => {
        adj.forEach(adj => {
            noun.forEach(noun => {
                console.log(pronoun + adj + noun + '.com');
            });
        });
    });
}

sentence();