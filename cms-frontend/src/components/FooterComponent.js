import React from 'react'

class FooterComponent extends React.Component{

   constructor(props){
        super(props)
        this.state ={
            
        }
   }
 
   render(){
         return(
            <div>
              <footer className="footer text-center">			   
				<span className="text-muted">All Rights Recerved 2022 @Viraj</span>				
			  </footer>
            </div>
         )
   }
}

export default FooterComponent