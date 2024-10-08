
import './style.css'
  
  
  function Exp() {
    return (
      <>
      {/* image */}
      <div class="m-5 d-flex justify-content-center">
       <img id="one" src="https://images.unsplash.com/photo-1727985622854-4f145fe7ecf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D"
        alt="..."  class=" d-flex justify-content-stretch" style={{width:"100vw",height:"50vh"}}></img></div>
      
<div class="container-fluid">
  <p class="display-3  d-flex justify-content-center text-color-dark">Courses</p>
<div class="row">
      {/* card guvi */}
  <div class="col mb-3 d-flex justify-content-center trans">
<div class="card bg-secondary d-flex justify-content-center" style={{width: "18rem"}}>
<img src="https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Guvi </h5>
    <p class="card-text">Fullstack Development</p>
  
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#guviModal">
  More Details
</button>
  </div>
</div></div>
 {/* card csc */}
<div   class="col d-flex justify-content-center trans">
<div class="card bg-secondary" style={{width: "18rem",}}>
  <img   src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Csc</h5>
    <p class="card-text">Diploma In Computer Application</p>
   
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#cscModal">
    More Details
</button> </div>
</div></div></div >
     
       {/* guvi course modal */}
      <div class="modal fade" id="guviModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Guvi</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <p class="display-5">Web Developer</p>
        <p class="h6">Full Stack Development Course </p>
        <p class="h6">Mern stack</p>
        <p class="h6">Solving more than 250 problems in codekata & webkata</p>
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>

</div>
       {/* csc course modal */}
<div class="modal fade" id="cscModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Csc</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p class="display-5">DCA</p>
        <p class="h6">Diploma In Computer Application </p>
        <p class="h6">Offline Coaching Center</p>
        <p class="h6">C & C++</p>
        <p class="h6">Solving more than 100 problems</p>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
  </>
      
    );
  }
  
  export default Exp;