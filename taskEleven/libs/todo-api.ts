import {SingleTodo, SingleTodoToCreate} from "../types";
import fetch from "node-fetch";

export class TodoApi {

    private readonly url = "https://jsonplaceholder.typicode.com/todos";

    async get(id: number): Promise<SingleTodo> {
        const resp = await fetch(`${this.url}/${id}`);
        return await resp.json() as SingleTodo;
    };

    async list(): Promise<SingleTodo[]> {
        const resp = await fetch(`${this.url}/`);
        return await resp.json();
    }

    async create(task: SingleTodoToCreate): Promise<SingleTodo> {
        const resp = await fetch(`${this.url}/`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await resp.json();
    }

}