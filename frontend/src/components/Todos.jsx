
// export function Todos() {
//     return(
//         <div>
//             <h1>Go to gym</h1>
//             <h2>You need to go to gym</h2>
//             <button>Mark as done</button>
//         </div>
//     )
// }

// to rendering we can use props but more modern thing is destructing
// function Todos({todos}) // it means give me all the array in the form of array
// like this
// todos=[
//     title:"Go to gym",
//     description:"YOu need to go to gym"
// ]
// like that something


export function Todos({ todos }) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button>{todo.completed == true ? "completed" : "Mar as complete"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
