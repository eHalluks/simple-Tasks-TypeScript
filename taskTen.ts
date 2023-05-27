/*

    TASK: 10 (#fundamentals)

    DESCRIPTION: download the data from min three random API

    Link to exemplary API: https://jsonplaceholder.typicode.com/users

    [ done ] TODO: 1# Create interface.
    [ done ] TODO: 2# Create an endpoint GET.
    [ done ] TODO: 3# Return data.
    [ done ] TODO: 4# Display street!

 */

import chalk from 'chalk';
const fetch = require('isomorphic-fetch');

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const getUser = async (id: number): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json() as User;
};

(async () => {
    const user: User = await getUser(10);
    console.log(`\n   Street name: ${chalk.magentaBright(user.address.street)} Street [ USERS SECTION REQUEST 1 ]`);
})();

(async () => {
    const user: User = await getUser(2);
    console.log(`   Street name: ${chalk.magentaBright(user.address.street)} Street [ USERS SECTION REQUEST 2 ]\n`);
})();



/*

##################################################

Next Api Posts

 */

interface SinglePost {

    userId: number;
    id: number;
    title: string;
    body: string;

}

const getPost = async (id: number): Promise<SinglePost> => {

    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json() as SinglePost;
}

(async () => {
    const post: SinglePost = await getPost(10);
    console.log(`   Post title: ${chalk.cyanBright(post.title)} [ POSTS SECTION REQUEST 1 ]`);
})();

(async () => {
    const post: SinglePost = await getPost(2);
    console.log(`   Post title: ${chalk.cyanBright(post.title)} [ POSTS SECTION REQUEST 2 ]\n`);
})();


/*

##################################################

Next Api Todos

 */

interface SingleTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodo = async (id: number): Promise<SingleTodo> => {

    const response = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`)
    return response.json() as SingleTodo;
}

(async () => {
    const todo: SingleTodo = await getTodo(10);
    console.log(`   Todo title: ${chalk.yellowBright(todo.title)} [ TODOS SECTION REQUEST 1 ]`);

    if(todo.completed) {
        console.log(`   Todo completed: ${chalk.greenBright(todo.completed)} [ TODOS SECTION REQUEST 1 ]`);
    }else{
        console.log(`   Todo completed: ${chalk.redBright(todo.completed)} [ TODOS SECTION REQUEST 1 ]\n`);
    }

})();

(async () => {
    const todo: SingleTodo = await getTodo(2);
    console.log(`   Todo title: ${chalk.yellowBright(todo.title)} [ TODOS SECTION REQUEST 2 ]`);
    if(todo.completed) {
        console.log(`   Todo completed: ${chalk.greenBright(todo.completed)} [ TODOS SECTION REQUEST 2 ]`);
    }else{
        console.log(`   Todo completed: ${chalk.redBright(todo.completed)} [ TODOS SECTION REQUEST 2 ]\n`);
    }
})();


/*

##################################################

Next Api Todos

 */




interface MeteoStation {

    id_stacji: number;
    stacja: string;
    data_pomiaru: string;
    godzina_pomiaru: number;
    temperatura: number;
    predkosc_wiatru: number;
    kierunek_wiatru: number;
    wilgotnosc_wzgledna: number;
    suma_opadu: number;
    cisnienie: number;

}

let allData: MeteoStation[] = [];


const getAllData = async () => {
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
        try {
            const response = await fetch(`https://danepubliczne.imgw.pl/api/data/synop/${page}`);
            const data = await response.json() as MeteoStation;

            allData = allData.concat(data);
            totalPages = parseInt(response.headers.get('x-total-pages'));
            page++;
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
            throw error;
        }
    }

    return allData;
};

getAllData()
    .then((data) => {
        const totalCount: number = data.length;
        const result = data.reduce((accumulator, item) => {
            accumulator[0] += Number(item.temperatura);
            accumulator[1] += Number(item.cisnienie);
            accumulator[2] += Number(item.wilgotnosc_wzgledna);
            return accumulator;
        }, [0, 0, 0]);

        const average:number[] = [result[0] / totalCount, result[1] / totalCount, result[2] / totalCount];

        console.log("");
        console.log("   [WEATHER API]");
        console.log(`   Kraj: Poland (EU-EMEA-PL)`);
        console.log(`   Ilość jednostek w których dokonano pomiaru: ${chalk.yellowBright(data.length)}`);
        console.log(`   Średnia temperatura w Polsce wyniosła: ${chalk.yellowBright(`${average[0].toFixed(0)} stopni`)}`);
        console.log(`   Średnie ciśnienia w Polsce wyniosła: ${chalk.yellowBright(`${average[1].toFixed(0)} hPa`)}`);
        console.log(`   Średnia wilgotność względna w Polsce wyniosła: ${chalk.yellowBright(`${average[2].toFixed(0)}%`)}\n`);

        data.forEach((item) => {
            console.log(`   Miasto: ${chalk.blueBright(item.stacja)}`);
            console.log(`   Data pomiaru: ${chalk.blackBright(item.data_pomiaru)}`);
            console.log("");
        });
    })
    .catch((error) => {
        console.error('Błąd:', error);
    });