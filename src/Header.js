import React, { Component } from 'react';

class Header extends Component {
  Header() {
   
   
  }

  render() {
    return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Welcome to PG Private Grab </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
             
            </ul>
          </div>
        </div>
      </nav>


      <header>
      




        <div class="container">

            <div class="img text-center mx-auto">
            
            <a href="https://ppphone88.com/diver">
          <p id="img_a" ><img src="img/1.png" width="100%" alt=""/></p> 
          <p id="img_b" > <img src="img/2.png" width="100%" alt=""/></p> 
           <p id="img_c" > <img src="img/3.png" width="100%" alt=""/></p> 
           </a>


            </div>
        </div>
      </header>
      
    </>
   );
  }
}
export default Header;
