import React from 'react'

class HeaderComponent extends React.Component{

   constructor(props){
        super(props)
        this.state ={
            
        }
		
   }
   
 
 
   render(){
         return(
            <div>
              <header>
			    <nav className="navbar navbar-expand-lg navbar-light  bg-trak">
				  <div className="container"> <a className="navbar-brand" href="#">Customer Management System |</a>
				  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
					  <a className="nav-item nav-link active" href="#">Home</a>
					  <a className="nav-item nav-link" href="#">Customers</a>
					 </div>
					</div>
				  </div>
				</nav>
			   </header>
            </div>
         )
   }
}

export default HeaderComponent