import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import CustomerComponent from './components/CustomerComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
	
	
	
  return (
            <div>
			    <Router>
				    <div className="body">
						<HeaderComponent/>
							<div className="container">
							
								<Switch>
									<Route exact path={"/"} component = {CustomerComponent}></Route>
									<Route  path={"/customers"}  component = {CustomerComponent}></Route>
									<Route   path={"/addcustomer"}   component = {CreateCustomerComponent}></Route>
									<Route   path={"/updatecustomer/:id"}   component = {UpdateCustomerComponent}></Route>										
							    </Switch>
							
							</div>
						<FooterComponent/>
					</div>
					</Router>
			</div>	
			
  );
}

export default App;
