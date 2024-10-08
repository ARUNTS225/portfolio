  import './style.css'
  
  function Profile() {
    return (
      <>
    
  
           <div class="row ">
            {/* card */}
            <div  class="col-md-6 pro">
            <div class="card m-5 bg-secondary" >
            <p class="h1 m5 d-flex justify-content-center text-dark-emphasis">Personal info</p>
            <ul class="list-group  ">
              <li class="list-group-item d-flex justify-content-center"><i class="fa-solid fa-user" style={{color: "#2f6f6b"}}>Arun Tamilselvan</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-duotone fa-solid fa-calendar-days" style={{color: "#2f6f6b"}}>
                22 April 2002</i></li>
              <li class="list-group-item d-flex justify-content-center"> <i class="fa-solid fa-person-rays" style={{color: "#2f6f6b"}}>Single</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-brands fa-github" style={{color: "#2f6f6b"}}>ARUNTS225</i></li>
              <li class="list-group-item d-flex justify-content-center">
                <i class="fa-duotone fa-solid fa-envelope rounded" style={{color: "#2f6f6b"}}>
                arun220420025@gmail.com</i></li>
              <li class="list-group-item d-flex justify-content-center">
          <i class="fa-solid fa-phone" style={{color: "#2f6f6b"}}>+919361555066</i></li>
            </ul>
            <div class="card-footer"></div>
           </div></div>
            {/* card */}
           <div class="col-md-6 max ">         
            <div class="card m-5 bg-secondary" >
            <p class="h1 m5 d-flex justify-content-center text-dark-emphasis">Skills</p>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-center" ><i class="fa-brands fa-html5 p-1" style={{color: "#2f6f6b"}}>Html</i>
              <i class="fa-brands fa-css3-alt p-1" style={{color: "#2f6f6b"}}>Css</i><i class="fa-brands fa-bootstrap p-1 " style={{color: "#2f6f6b"}}>Bootstrap</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-brands fa-js" style={{color: "#2f6f6b"}}>Javascript</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-brands fa-react" style={{color: "#2f6f6b"}}>React js</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-brands fa-node" style={{color: "#2f6f6b"}}>Node js</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-solid fa-database" style={{color: "#2f6f6b"}}>Mysql</i></li>
              <li class="list-group-item d-flex justify-content-center"><i class="fa-duotone fa-solid fa-leaf" style={{color: "#2f6f6b"}}>Mongodb</i></li>
            </ul>
            <div class="card-footer"></div>
           </div></div></div>
  
           <div class="m-5">

            {/* table */}
            
           <table class="table" >
    <thead>
      <tr>
        <th colspan="2" scope="col" class="h1 text-info-emphasis">Education</th>
        
        
      </tr>
    </thead>
    <tbody>
      <tr >
        <th scope="row"><p class="text-info-emphasis h4 zdat">2019-2023</p><p class="h6 text-dark-emphasis zdat"><i class="fa-solid fa-location-pin"></i>Trichy</p></th>
        <td class="zdat"colspan="2"><p class="text-secondary"><i class="fa-solid fa-graduation-cap"></i>B.E Computer Science Engineering</p>
          <p class="text-secondary">Oasys Institute Of Technology</p>
          <p class="text-secondary">CGPA:8.10</p></td>
        
        
      </tr>
      <tr>
        <th scope="row"><p class=" text-info-emphasis h4 zdat">2018-2019</p><p class="h6 text-dark-emphasis zdat"><i class="fa-solid fa-location-pin"></i>Tiruvarur</p></th>
        <td class="zdat"colspan="2">
          <p class="text-secondary"><i class="fa-solid fa-school-flag"></i>HSC-Computer Science</p>
          <p class="text-secondary">Govt Boys Higher Secondary School</p>
          <p class="text-secondary">50%</p>
        </td>
        
      </tr>
      
    </tbody>
           </table></div>
            
      </>
      
    );
  }
  
  export default Profile;