package com.javacms.cms.model;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private Date date_of_birth;
    private String nic_number;



    public Customer(){

    }
    public Customer(long id, String name, Date date_of_birth, String nic_number) {
        this.id = id;
        this.name = name;
        this.date_of_birth = date_of_birth;
        this.nic_number = nic_number;

    }




    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getNic_number() {
        return nic_number;
    }

    public void setNic_number(String nic_number) {
        this.nic_number = nic_number;
    }





}
