package com.hospital.controllers;


import com.hospital.models.Patient;
import com.hospital.service.PatientServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientServise patientServise;

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/savepatient", method = RequestMethod.POST)
    public void savePatient(Patient patient) {
        System.out.println(patient);
        patientServise.save(patient);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public void deletePatient(Patient patient) {
        System.out.println(patient);
        System.out.println(patient.getPatientId());
         patientServise.delete(patient.getPatientId());
    }

}
