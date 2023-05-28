/*

    TASK: 11 (#fundamentals)

    DESCRIPTION: Find free open API and try to add new item

     TODO 1# create Class Todo
     TODO 2# use interface
     TODO 3# use Omit as commonly used
     TODO 4# add different methods like: get one, get all, create new todo
     TODO 5# Make a function responsible for one action

     Omit description: Omit pomaga w sytuacji gdy trzeba stworzyć dwa lub więcej interfejsów utworzonych
     w celu uniknięcia konfliktu. Zamiast tworzyć dwa różne interfejsy lub tworzyć kontrakty i dziedziczenie
     można użyć Omit i wskazać jakie pole ma zostać usunięte

     UWAGA: W przypadku gdy usuwane jest więcej niż jedno pole, należy oddzielić nazwy znakiem: "|" jak w przypadku określania typów zmiennych

     Omit<NazwaInterfejsu, 'nazwaPola1' | 'nazwaPola2' | 'nazwaPola3'

 */


import { v4 as uuid } from 'uuid';
import {SingleTodo} from "./types";
import {TodoApi} from "./libs/todo-api";

const displayFirst10 = (listOfAllTodos: SingleTodo[]) => {

    let counter: number = 1;
    listOfAllTodos.forEach(item => {
        if(counter > 3) {
            return;
        }else{
            console.log("");
            console.log("   ", counter,")"," Tytuł: ", item.title);
            if(item.completed){
                console.log("   Status: Zrealizowany");
            }else{
                console.log("   Status: Oczekuje na realizację");
            }
            console.log("");
            counter++
        }
    });

}

const displayAll = (listOfAllTodos: SingleTodo[]) => {
    listOfAllTodos.forEach(item => {
        console.log("   ", item);
    })
}

const howManyTodos = (listOfAllTodos: SingleTodo[]) => {
    console.log('   Ilość todos: ', listOfAllTodos.length);
}

const findSpecificTodo = async (idToFind: number, todo:TodoApi)=> {
    console.log(await todo.get(10));
}

const createNewTodo = async (todo: TodoApi) => {

    const newTodo = await todo.create({
        userId: uuid(),
        title: "test 27.05.2023",
        completed: false,
    });

    console.log("   ", "Nowo utworzony Todo item:", newTodo.id);
    console.log("   ", "Tytuł: " ,newTodo.title);
    console.log("   ", "Status: Oczekuje na realizację");
}

(async () => {

    const todo = new TodoApi();
    const listOfAllTodos = await todo.list();

    await findSpecificTodo(10, todo);
    howManyTodos(listOfAllTodos)
    displayFirst10(listOfAllTodos);
    // displayAll(listOfAllTodos);

})();

(async () => {

    const todo = new TodoApi();
    await createNewTodo(todo)

})();