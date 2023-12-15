
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
       {props.name}
      </h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part}
      </p>
      <p>
        Exercises: {props.exercises}
      </p>
    </div>
  )
}
const Total = (props => {
  console.log(props)
  return (
    <div>
      <p>
        Total: {props.total}
      </p>
    </div>
  )
})
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header name={course}/>
      <Content part={part1} exercises={exercises1} /> 
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total total={total}/>
    </div>
  )
}

export default App