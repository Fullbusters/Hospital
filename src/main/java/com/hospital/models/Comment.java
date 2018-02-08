package com.hospital.models;


import javax.persistence.*;

@Entity
@Table(name="Comments")
public class Comment {

    @Id
    @GeneratedValue
    private Long commentId;
    @Column
    private String creationDate;
    @Column
    private String comment;

    public Comment(String creationDate, String commentar) {
        this.creationDate = creationDate;
        this.comment = commentar;
    }

    public Long getCommentarId() {
        return commentId;
    }

    public void setCommentarId(Long commentarId) {
        this.commentId = commentarId;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public String getCommentar() {
        return comment;
    }

    public void setCommentar(String commentar) {
        this.comment = commentar;
    }
}
