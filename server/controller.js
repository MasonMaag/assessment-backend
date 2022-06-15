const getCompliment =(req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
}



const getFortune = (req, res) => {
    const fortunes = ["A beautiful, smart, and loving person will be coming into your life.","A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way.", "A friend asks only for your time not your money.", "A friend is a present you give yourself."];
     let randomIndex = Math.floor(Math.random() * fortunes.length);
     let randomfortunes = fortunes[randomIndex]; 
        res.status(200).send(randomfortunes);
    }

module.exports = {
getCompliment,
getFortune
}

//     getAnswer: (req,res) => {
//         const answers = ['Outlook Not so good.', 'Signs point to yes.', 'Better not til you know.', 'Maybe.', 'No.', 'Reply hazy. Try again.', 'Very doubtful.', 'You should see a doctor.', 'Ask your mom.', 'Sorry, I was playing Billards. What was the question?', 'Probably.']

//         let randomIndex = Math.floor(Math.random() * answers.length);
//         let randomAnswer = answers[randomIndex];

//         res.status(200).send(randomAnswer);
//     }

// }