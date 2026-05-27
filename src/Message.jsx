function Message(props) // is a React functional component that takes in props as an argument. It returns a JSX element that displays a greeting message using the name prop and the current count using the count prop.
{
  return (
    <div>
      <h2>Hello {props.name} 👋</h2>
      <p>Your current count is: {props.count}</p>
    </div>
  )
}

export default Message