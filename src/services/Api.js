import baseUrl from "./host"

export const getTodos = () => fetch(baseUrl + 'todos/1')
    .then(response => response.json())