package br.com.rbarreto.todo;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Task {

    //menor impacto na performance do sistema a geração de chaves aleatórias dessa forma
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_generator")
    @SequenceGenerator(name="task_generator", sequenceName = "task_seq", allocationSize=50)
    private Long id;

    private String name;
    private Boolean status;
    private Date date;

    Task(){}

    Task(String name, Date date){
        this.name = name;
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
