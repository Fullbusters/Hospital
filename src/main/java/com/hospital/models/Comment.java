package com.hospital.models;


import javax.persistence.*;

@Entity
@Table(name="Comments")
public class Comment {

    @Id
    @GeneratedValue
    @Column(name="Comment_Id")
    private Long commentId;
    @Column(name="Creation_Date")
    private String creationDate;
    @Column(name="Comment")
    private String comment;

    public Comment() {
    }

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
