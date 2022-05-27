module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", 'You are BEAutiful!', ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ['Any decision you have to make tomorrow is a good decision.', 'Change is happening in your life, so go with the flow!', 'Curiosity kills boredom. Nothing can kill curiosity.', 'Do not let friends impose on you, work calmly and silently.', 'Each day, compel yourself to do something you would rather not do.'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAnswer: (req,res) => {
        const answers = ['Outlook Not so good.', 'Signs point to yes.', 'Better not til you know.', 'Maybe.', 'No.', 'Reply hazy. Try again.', 'Very doubtful.', 'You should see a doctor.', 'Ask your mom.', 'Sorry, I was playing Billards. What was the question?', 'Probably.']

        let randomIndex = Math.floor(Math.random() * answers.length);
        let randomAnswer = answers[randomIndex];

        res.status(200).send(randomAnswer);
    }

}