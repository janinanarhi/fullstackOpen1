
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
const Part = (props) => {
  console.log('PART', props)
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
const Content = (props) => {
  console.log('CONTENT', props)

  return (
    <div>
      <Part part={props.data1.name} exercises={props.data1.exercises} />
      <Part part={props.data2.name} exercises={props.data2.exercises} />
      <Part part={props.data3.name} exercises={props.data3.exercises} />
    </div>

  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
     {  <p>
        Total: {props.total}
      </p> 
      }
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header name={course} />
      <Content
        data1={part1}
        data2={part2}
        data3={part3}
      />
      <Total total={total} />
    </div>
  )
}

export default App
