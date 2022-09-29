import React from 'react'
import CustomerService from '../services/CustomerService'
import Moment from 'moment';


class CustomerComponent extends React.Component{

   constructor(props){
        super(props)
        this.state ={
             customers:[]
        }
		this.addCustomer = this.addCustomer.bind(this);
		this.editCustomer = this.editCustomer.bind(this);
		this.deleteCustomer = this.deleteCustomer.bind(this);
		
   }
   deleteCustomer(id){
	   
	   CustomerService.deleteCustomer(id).then(res => {
          this.setState({customers: this.state.customers.filter (customer => customer.id)});
       });
	   this.props.history.go();
   }
    editCustomer(id){
		
	   
	   this.props.history.push('/updatecustomer/'+id);
	   this.props.history.go();	 
   }
   componentDidMount(){
       CustomerService.getCustomers().then((response) => {
          this.setState({customers: response.data})
       });

   }
  
   addCustomer(){
     
	   this.props.history.push('/addcustomer');
	   this.props.history.go();	  
   }
   

   
   render(){
         return(
            <div>
			<h2 className="text-center">Customers List</h2>
			<div className="row">
			<button type="button" className="btn btn-dark btn-add" onClick={this.addCustomer}>Add New Customer</button>
			</div>
			<div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                      <td>Customer ID</td>
                      <td>Customer Name</td>
					  <td>Date of Birth</td>
					  <td>NIC Number</td>
					  <td>Actions</td>
                    </tr>
                </thead>

                <tbody>
                {
                   this.state.customers.map(
                       customers=>
                       <tr key = {customers.id}>
                          <td>{customers.id}</td>
                           <td>{customers.name}</td>
						    <td> {Moment(customers.date_of_birth).format('DD/MM/YYYY')}</td>
							<td>{customers.nic_number}</td>
							<td>
							  <button onClick = {() => this.editCustomer(customers.id)} className = "btn btn-outline-success my-sm-0">Update</button>
							  <button onClick = {() => this.deleteCustomer(customers.id)} className = "btn btn-outline-danger my-2 my-sm-0">Delete</button>
							</td>
                       </tr>
                   )
                }
                </tbody>
                 </table>
				</div>
            </div>
         )
   }
}

export default CustomerComponent