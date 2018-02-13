package com.hospital.controllers;

import com.hospital.models.Comment;
import com.hospital.service.CommentServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Date;

@Controller
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentServise commentServise;

    // Збереження та редагування  даних коментарія в  БД
    @ResponseStatus(HttpStatus.CREATED )
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void saveComment(Comment comment) {
        Date currentDate = new Date();
        if(comment.getCreationDate()==null){
            comment.setCreationDate(currentDate);
        }
        System.out.println(comment);
        commentServise.save(comment);
    }

    // Видалення коментарія з БД
    @ResponseStatus
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public void deleteComment(Comment comment) {
        commentServise.delete(comment.getCommentId());
    }

}
