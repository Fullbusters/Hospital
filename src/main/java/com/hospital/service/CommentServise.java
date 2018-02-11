package com.hospital.service;

import com.hospital.models.Comment;
import com.hospital.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CommentServise {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> findAll(){
        return commentRepository.findAll();
    }

    public void save(Comment comment){
        commentRepository.save(comment);
    }
}
