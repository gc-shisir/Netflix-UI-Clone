const questions=document.querySelectorAll('.question');
// console.log(questions[1].childNodes[3]);

questions.forEach(question=>{
  question.addEventListener('click',(e)=>{
    // question.nextElementSibling.classList.toggle('transform');
    question.nextElementSibling.classList.toggle('show');
    question.lastChild.previousSibling.classList.toggle('fa-plus');
    question.lastChild.previousSibling.classList.toggle('fa-times');
    // console.log(question.lastChild.previousSibling);
  })
})

