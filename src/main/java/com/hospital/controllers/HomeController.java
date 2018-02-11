package com.hospital.controllers;

import com.hospital.models.Patient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/")
public class HomeController {

    @RequestMapping
    public String mainPage(Model model){
        model.addAttribute("patient", new Patient());
        return "main";
    }
}
