package com.hospital.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/")
public class Home {

    @RequestMapping
    public String mainPage(Model model){

        return "main";
    }
}
