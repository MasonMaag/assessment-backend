const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const getAllBtn = document.querySelector('#all')
const createForm = document.querySelector('#create-quest')
const newQuest = document.querySelector('#new-quest')
const newExpect = document.querySelector('#new-expect')
const questContainer = document.querySelector('section')
const deleteBtn = document.querySelector('#delete-btn')

const baseURL = `http://localhost:4000/api`

const getCompliment = () => {
    axios.get(baseURL + "/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get(baseURL + "/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)

function createQuest(newQuest) {
    let questSheet = document.createElement('div')
    questSheet.innerHTML = `<h3>${newQuest.mainQuest} </h3>
    <h4>Expected:</h4>
    <ul>
      <li>${newQuest.mainExpect[0]}</li>
    </ul>`
  
    questContainer.appendChild(questSheet)
  }
  
  function clearQuest() {
    questContainer.innerHTML = ``
  }
  
  const getAllquestions =() => {
   clearQuest()
  
   axios.get(baseURL + '/quests')
   .then((res) => { 
     for(let i = 0; i<res.data.length ; i++){
        createQuest(res.data[i]);
     } 
   })
   .catch(error => console.log(error))
  }
  
  getAllBtn.addEventListener('click',getAllquestions)
  
  
  const createNewQuest = (event) => {
    const reqBody = {
      mainQuest: newQuest.value,
      mainExpect: newExpect.value.split(',') 
    }
    event.preventDefault();
    console.log(reqBody)
    clearQuest()
    axios.post(baseURL + '/quest', reqBody)
    .then((res) => {
      for(let i = 0; i <res.data.length; i++) {
        createQuest(res.data[i])
      }
      newQuest.value = '';
      newExpect.value ='';
    })
    .catch(error => console.log(error))
  
  }
  
  createForm.addEventListener('submit',createNewQuest)
  
  const deleteQuest =(event) => {
    event.preventDefault();
    clearQuest()
    axios.delete(baseURL + '/quest')
    .then((res) => { 
      for(let i = 0; i<res.data.length ; i++){
         createQuest(res.data[i]);
      } 
    })
    .catch(error => console.log(error))
  }
  
  deleteBtn.addEventListener('click',deleteQuest)

// const ballInp = document.getElementById('wiseInp')
// const ballBtnIn = document.getElementById('wiseBtn')

// const getAnswer = () => {
//     axios.get(baseURL + "/answer/")
//     .then(res => {
//         const data = res.data;
//         alert("Magic 8 ball says : " + data);
//     });
// };

// ballInp.addEventListener('submit', getAnswer)
// ballBtnIn.addEventListener('click', getAnswer)