package br.com.rbarreto.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private final TaskRepository repository;

    TaskController(TaskRepository repository){
        this.repository = repository;
    }

    @CrossOrigin
    @GetMapping("/tasks")
    List<Task> all(){
        return repository.findAll();
    }

    @PostMapping("/tasks")
    Task newTask(@RequestBody Task task){
        return repository.save(task);
    }

    @CrossOrigin
    @DeleteMapping("/tasks/{id}")
    void deleteTask(@PathVariable Long id){
        repository.deleteById(id);
    }

    @CrossOrigin
    @PutMapping("/tasks/{id}")
    Task updateTask(@RequestBody Task newTask, @PathVariable Long id){

        return repository.findById(id)
                .map(task -> {
                    task.setStatus(newTask.getStatus());
                    task.setDate(newTask.getDate());
                    task.setName(newTask.getName());
                    return repository.save(task);
                }).orElseGet(() ->{
                    newTask.setId(id);
                    return repository.save(newTask);
                });
    }
}
