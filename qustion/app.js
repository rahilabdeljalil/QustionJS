// const btns = document.querySelectorAll('.question-btn');


// // since we have multiply btn we have to select all of them so we wll use the foreach method then we will add an event 
// //event listener . and inside it we will target the parent and push in it class show-text
// ----
// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     } )
// })
 
// the second way is better which we will target the questions directly 

const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
         
    const btns = question.querySelector('.question-btn');
    
    btns.addEventListener('click', function(){

        //i add this one so when i click on another article btn the previous open one get close
        // by creating a function that lock if the item of the question i clicked on matched if not then close

      questions.forEach(function(item){
       if(item !== question){
        item.classList.remove('show-text')
       }
      })

        question.classList.toggle('show-text')

    })

})