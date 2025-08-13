  var div=document.getElementById("cont");
   
  document.getElementById("btn").addEventListener('click', ()=>{
    let input=document.getElementById("input").value;
    var qv=document.createElement('div');
    var question=`<div class="question">
      <div>
      ${input}
      </div>

    </div>`;
    qv.innerHTML=question;
    div.appendChild(qv);
    var input1=input;
     let input=document.getElementById("input");
    input.value="";
  fetch("https://text.pollinations.ai/" + encodeURIComponent(input1))
  .then(response => response.text()) // since it's plain text, not JSON
  .then(data => {
    console.log(data);
   
    var av=document.createElement('div');
    var answer=` <div class="answer">
      <div>
        <p> ${data}</p>
      </div>

    </div>`;
    av.innerHTML=answer;
    div.appendChild(av);
     requestAnimationFrame(() => {
    div.scrollTo({
      top: div.scrollHeight,
      behavior: 'smooth'
    });
  });
  })
  .catch(error => {
    console.error("Error fetching from AI API:", error);
  });


  });

  

  

