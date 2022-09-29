import React from 'react'
import CustomerService from '../services/CustomerService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';

class UpdateCustomerComponent extends React.Component{

   constructor(props){
        super(props)
        this.state ={
			id: this.props.match.params.id,
			name: '',
			date_of_birth: '',
			nic_number: '',
            
        }
		 this.changeNameHandler = this.changeNameHandler.bind(this);
	     this.changeDateofbirthHandler = this.changeDateofbirthHandler.bind(this);
	     this.changeNicnumberHandler = this.changeNicnumberHandler.bind(this);
		 this.updateCustomer = this.updateCustomer.bind(this);
		 this.cancel = this.cancel.bind(this);
   }
   
      componentDidMount(){
		  
		 
		  CustomerService.getCustomerById(this.state.id).then( (res) => {
			  
			    let customer = res.data;
				  var formattedDate =  Moment(customer.date_of_birth).toDate();				
				  this.setState({name: customer.name,date_of_birth: formattedDate, nic_number: customer.nic_number
			  });
			  
		  });
		  
	  }
   
   updateCustomer = (e) => {
	   
	  
	   e.preventDefault();
	   let customer = {name:this.state.name, date_of_birth:this.state.date_of_birth, nic_number:this.state.nic_number};
	  
	   
	      CustomerService.updateCustomer(customer,this.state.id).then(res => {
		   
		     this.props.history.push('/customers');
			  this.props.history.go();
	      }	   
	   );
	  
	   
   }
   cancel(){
     
	   this.props.history.push('/customers');
	  
   }
   
   changeNameHandler = (event) => {
	   
	   this.setState({name: event.target.value});
   }
     changeDateofbirthHandler(d){
		 var formattedDate =  Moment(d).format("MM/DD/YYYY");
    this.setState({date_of_birth: formattedDate});
  }

     changeNicnumberHandler = (event) => {
	   
	   this.setState({nic_number: event.target.value});
   }
 
   render(){
         return(
            <div>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 ">
							<h3 className="text-center">Update Customer</h3>
							<div className="card-body">
							<form>
								  <div className="form-group">
									<label>Customer Name</label>
									<input type="text" className="form-control" name="name" placeholder="Customer Name" value={this.state.name} onChange = {this.changeNameHandler} />									
								  </div>
								  <div className="form-group">
									<label>Date of Birth</label>
									 <DatePicker 
									  selected= {this.state.date_of_birth}
									  onChange={this.changeDateofbirthHandler}
									  showMonthDropdown={true}
									  showYearDropdown={true}
									  scrollableYearDropdown={false}
									  className="form-control"
									
									 />
									
								  </div>
								    <div className="form-group">
									<label>NIC Number</label>
									<input type="text" className="form-control" name="nic_number" placeholder="NIC Number" value={this.state.nic_number} onChange = {this.changeNicnumberHandler} />
								  </div>
								
								  <button  className="btn btn-outline-success my-sm-0" onClick={this.updateCustomer} >Update</button>
								  <button  className="btn btn-outline-warning my-2 my-sm-0" onClick={this.cancel} >Cancel</button>
								</form>
							</div>
						</div>
					</div>
				</div>
            </div>
         )
   }
}

export default UpdateCustomerComponent