/*

    TASK: 2 (#fundamentals)

    DESCRIPTION:

    Three functions should return these results:

    incPoints() - should increase a quantity of points,
    totalPoints() - should present the total number of points in the array,
    personWithMostPoints() - should present an object which has the most points,

    [done] TODO: #1 Create an interface,
    [done] TODO: #2 Create logic in functions,
    [done] TODO: #3 Handel exceptions,
    [not be able to provide yet] TODO: #4 Try to write at least one unit test ,

 */


interface User {
    id: string;
    name: string;
    points: number;
}

import { v4 as uuid } from 'uuid';

const users: User[] = [
    {
        id: uuid(),
        name: 'Anna',
        points: 1000,
    },
    {
        id: uuid(),
        name: 'Krzysztof',
        points: 500,
    },
    {
        id: uuid(),
        name: 'Ola',
        points: 0,
    },
    {
        id: uuid(),
        name: 'Marek',
        points: 0,
    },
];


function incPoints() {

    console.log("")

    users.forEach(item => {
        console.log(` Name: ${item.name} Points before: ${item.points}`);
        item.points++;
        console.log(` Points after: ${item.points}`);
    });

}

function totalPoints() {

    const totalPoints2 = users.reduce((sum, user) => sum + user.points, 0);
    console.log("")
    console.log(` Total points of users: ${totalPoints2}`);

}

function personWithMostPoints() {

    //for me the fastest

    const userWithMostPoints = users.reduce((prev, current) =>
        (prev.points > current.points) ? prev : current
    );
    console.log("")
    console.log(` User name: ${userWithMostPoints.name}\n User points: ${userWithMostPoints.points}`);


}

incPoints();
totalPoints();
personWithMostPoints();