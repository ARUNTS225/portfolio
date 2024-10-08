  import './style.css';
  
  function About() {
    return (
      <>
      <div class="container">
        {/* project */}
      <ul class="list-group"><li class="list-group-item active bg-secondary h4 text-danger-emphasis"aria-current="true" >Projects</li></ul>
           <ol class="list-group list-group-numbered zdat">
           
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Gold Rate Calculator</div>
      Its a fullstack project.Using React,Node js,Mongo db.
    </div>
    <span class="badge text-bg-secondary rounded-pill"><a href="https://atsgrcalc.netlify.app">Project link</a></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Pokiemon Api</div>
      Fecting the api project.Using Html,Css,Javascript.
    </div>
    <span class="badge text-bg-secondary rounded-pill"><a href="https://admirable-starburst-5b259e.netlify.app">Project link</a></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Shoping Dashboard</div>
      Shoping Application And Crud operation.Using react.
    </div>
    <span class="badge text-bg-secondary rounded-pill"><a href="https://curious-tarsier-02e938.netlify.app">Project link</a></span>
  </li>
  
</ol>




    <div >
      {/* language */}
  <div class="zdat"> <ul class="list-group" >
  <li class="list-group-item active bg-secondary h4 text-danger-emphasis" aria-current="true">Languages</li>
  <li class="list-group-item fw-bold">Tamil<span class="badge text-danger-emphasis bg-secondary">Native</span></li>
  <li class="list-group-item fw-bold">English<span class="badge text-danger-emphasis bg-secondary">Intermediate</span></li>
 
</ul></div>
{/* strenght */}
<div class="zdat"> <ul class="list-group" >
  <li class="list-group-item active bg-secondary h4 text-danger-emphasis" aria-current="true">Strengths</li>
  <li class="list-group-item fw-bold">Problem Solving</li>
  <li class="list-group-item fw-bold">Logical Thinking</li>
  <li class="list-group-item fw-bold">Positive Thinking</li>
  <li class="list-group-item fw-bold">Hard Working</li>
 
</ul></div></div>
<footer>
<i class="fa-solid fa-copyright m-1 p-2 h6 d-flex justify-content-end">Developed By Ats</i>
</footer>
           
</div>
          </>
      
    );
  }
  
  export default About;