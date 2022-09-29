import axios from 'axios'

const CUSTOMERS_REST_API_URL = 'http://localhost:8080/api/customers';

class CustomerService {

    getCustomers(){

       return axios.get(CUSTOMERS_REST_API_URL);
    }
	createCustomer(customer){

       return axios.post(CUSTOMERS_REST_API_URL,customer);
    }
	getCustomerById(customerId)
	{
	    
		return axios.get(CUSTOMERS_REST_API_URL + '/' + customerId);
	}
	updateCustomer(customer, customerId){

       return axios.put(CUSTOMERS_REST_API_URL + '/' + customerId, customer);
    }
	deleteCustomer(customerId){

       return axios.delete(CUSTOMERS_REST_API_URL + '/' + customerId);
    }

}

export default new CustomerService()