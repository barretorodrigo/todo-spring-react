package br.com.rbarreto.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private final TaskRepository repository;

    TaskController(TaskRepository repository){
        this.repository = repository;
    }

    @GetMapping("/tasks")
    List<Task> all(){
        return repository.findAll();
    }

    @PostMapping("/tasks")
    Task newTask(@RequestBody Task task){
        return repository.save(task);
    }

    @DeleteMapping("/task/{id}")
    void deleteTask(@PathVariable Long id){
        repository.deleteById(id);
    }
}
