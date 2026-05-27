function Child({PassingCount}) {
    return (
        <div>

            {/* if we want to pass the function from parent to child component we can do that by passing the function as a prop and then we can call the function in the child component by using the prop name. 
            and If we click on the button in the child component it will call the function in the parent component and increment the count in the parent component. */}

            <button onClick={PassingCount}>
                Increment Count from Child
            </button>
        </div>
    )
}
export default Child