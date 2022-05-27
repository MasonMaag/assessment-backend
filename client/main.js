//compliment
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

//fortune
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

//8ball
const ballInp = document.getElementById('newElementId')
const ballBtnIn = document.getElementById('newElementIdTwo')

const getAnswer = () => {
    axios.get("http://localhost:4000/api/answer/")
    .then(res => {
        const data = res.data;
        alert("Magic 8 ball says : " + data);
    });
};

ballInp.addEventListener('submit', getAnswer)
ballBtnIn.addEventListener('click', getAnswer)

// rating 
const ratingBtn = document.getElementById('ratingSubmit')
const favoriteIn = document.getElementById('favourite')

const getRating = () => {
    alert("Rating successfully submitted!")
}

ratingBtn.addEventListener('click', getRating)
favoriteIn.addEventListener('submit', getRating)