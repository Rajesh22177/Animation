const containerE1 = document.querySelector(".container")
const careers = ['Youtuber', 'Web Developer', 'Freelancer','Instructor'];
let careerIndex = 0;
let characterIndex=0;
updateText();
function updateText(){
characterIndex++;
    containerE1.innerHTML= `<h1>   ${careers[careerIndex].slice(0,1) === "" ? "" :
        ""} ${careers[careerIndex].slice(0, characterIndex)}
    </h1>`;
   characterIndex++;
    if(characterIndex > careers [careerIndex].length){
        characterIndex=0
        careerIndex++;
    }
    if(careerIndex >= careers.length){
        careerIndex =0;
    }
        setTimeout(updateText, 400);
}