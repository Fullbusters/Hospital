package com.hospital.service;

import com.hospital.models.Patient;
import com.hospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientServise {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> findAll(){
       return   patientRepository.findAll();
    }
    public void save(Patient patient){
        patientRepository.save(patient);
    }
}
