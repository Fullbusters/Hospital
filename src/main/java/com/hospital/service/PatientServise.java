package com.hospital.service;

import com.hospital.models.Patient;
import com.hospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PatientServise {

    @Autowired
    private PatientRepository patientRepository;

    public Iterable<Patient> findAll(){
        System.out.println(patientRepository.findAll());
       return   patientRepository.findAll();
    }
}
