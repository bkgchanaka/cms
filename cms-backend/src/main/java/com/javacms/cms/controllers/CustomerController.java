package com.javacms.cms.controllers;

import com.javacms.cms.model.Customer;
import com.javacms.cms.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    // get all customers
    @GetMapping("/customers")
    public List<Customer> getCustomers(){
         return this.customerRepository.findAll();

    }

    // create customers
    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer){

        return customerRepository.save(customer);
    }
    
    // get customer by id
    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) throws ReflectiveOperationException {

        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ReflectiveOperationException("Customer not exist : " + id));
        return ResponseEntity.ok(customer);
    }

    //update customer
    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customerDetails) throws ReflectiveOperationException {

        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ReflectiveOperationException("Customer not exist : " + id));

        customer.setName(customerDetails.getName());
        customer.setDate_of_birth(customerDetails.getDate_of_birth());
        customer.setNic_number(customerDetails.getNic_number());

        Customer updatedCustomer = customerRepository.save(customer);
        return ResponseEntity.ok(updatedCustomer);

    }

    //delete customer
    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable Long id) throws ReflectiveOperationException {

        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ReflectiveOperationException("Customer not exist : " + id));

        customerRepository.delete(customer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
