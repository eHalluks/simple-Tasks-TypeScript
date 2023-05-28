export interface SingleTodo {
    userId: number | string;
    id: number;
    title: string;
    completed: boolean;
}

export type SingleTodoToCreate = Omit<SingleTodo, 'id'>