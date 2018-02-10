package com.hospital.service;

import com.hospital.models.Comment;
import com.hospital.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CommentServise {

    @Autowired
    private CommentRepository commentRepository;


    public Iterable<Comment> findAll(){
        return commentRepository.findAll();

    }
}
