package com.hospital.controllers;

import com.hospital.models.Comment;
import com.hospital.models.Patient;
import com.hospital.service.CommentServise;
import com.hospital.service.PatientServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
public class InformationFromDBController {

    @Autowired
    private PatientServise patientServise;

    @Autowired
    private CommentServise commentServise;

    @RequestMapping("/patient")
    public List<Patient> getListOfPatients(){
        System.out.println(patientServise.findAll());
        return patientServise.findAll();
    }

    @RequestMapping("/comment")
    public List<Comment> getListofComment(){
        return commentServise.findAll();
    }

}
