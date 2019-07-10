import React, {Component} from 'react'
import './table.css'

const URL= 'http://localhost:8080/tasks/'

export default class Table extends Component{

    state={
        tasks: []
    }

    constructor(props){
        super(props)
        this.removeTask = this.removeTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount(){
        this.refresh()
    }

    refresh(){
        fetch(`${URL}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ tasks: data })
        })
        .catch(console.log)
    }

    removeTask(id){
        fetch(`${URL}${id}`, {
			method: 'DELETE'
        })
        .then(resp => this.refresh())
    }

    updateTask(task){
        fetch(`${URL}${task.id}`, {
			method: 'PUT',
			body: JSON.stringify({
				name: `${task.name}`,
                status: true,
                date: `${task.date}`
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				user:json
			});
        }).then(()=>this.refresh())
    }

    render(){
        return(
            <table className="table table-hover">
                <thead >
                    <tr className="table-secondary">
                    <th scope="col">#</th>
                    <th scope="col">Tarefa</th>
                    <th scope="col">Data</th>
                    <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.tasks.map((task) => (
                    <tr key={task.id}>
                    <th scope="row" >{task.id}</th>
                    <td>{task.name}</td>
                    <td>{task.date}</td>
                    <td>{task.status ? 
                        <button className="btn btn-danger" onClick={()=> this.removeTask(task.id)}>
                            <i className="fas fa-trash-alt"></i> Remover
                        </button>: 
                        <button className="btn btn-success" onClick={() => this.updateTask(task)}>
                            <i className="fas fa-check"></i> Concluir</button>
                        }</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        )
    }
}
