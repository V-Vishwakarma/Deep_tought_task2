
export function CreateTodo() {

    return (
        <div>
            <input style={{ padding: 10, margin: 10 }} type="text" placeholder="title" /><br /><br />
            <input style={{ padding: 10, margin: 10 }} type="text" placeholder="description" /><br /><br />
            <button style={{ padding: 10, margin: 10 }}>Add Todo</button>
        </div>
    )
}
// export default CreateTodo
// we can direct export the function like watch above
// one more difference while importing use {} for the name of the function