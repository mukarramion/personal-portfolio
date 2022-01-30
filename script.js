const generaterRandomNumber=num=> Math.floor(Math.random()*num);

const knock_KnockJokes={
    reply:['I am','Oink oink','Abe','Leaf'],
    replyWho:['I am who?','Oink oink who?','Abe who?','Leaf who?'],
    reply2Me:['You tell me!!','Make up your mind are you a pig, or an owl?!','Abe CDEFGH...','Leaf Me Alone!']
};

const formatJoke=joke=>{
    let element=document.getElementById('knock-knock');
    element.style.color='orange';
    element.style.display='block';
    const formatted= joke.join('\n');
    element.innerHTML=formatted;
}
let kk_button=document.getElementById('kk-joke');
kk_button.onclick=function() { 
    let knock_knock=[];
    knock_knock.push('Knock! Knock! \u{270A}\u{1F6AA}');
        knock_knock.push('Who\'s there?');
    let kk_Index=generaterRandomNumber(knock_KnockJokes.reply.length);
    for(let part in knock_KnockJokes){
        switch(part){
            case 'reply':
                knock_knock.push(knock_KnockJokes[part][kk_Index]);
                break;
            case 'replyWho':
                knock_knock.push(knock_KnockJokes[part][kk_Index]);
                break;
            case 'reply2Me':
                knock_knock.push(knock_KnockJokes[part][kk_Index]);
                break;
            default:
                knock_knock.push('Silence!...');
        }
    }
    formatJoke(knock_knock);
};