const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  // console.log(props);
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  );
};
const Content = (props) => {
  //console.log(props);
  return (
    <div>
      <Part name={props.name1.name} exercise={props.name1.exercises}></Part>
      <Part name={props.name2.name} exercise={props.name2.exercises}></Part>
      <Part name={props.name3.name} exercise={props.name3.exercises}></Part>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>Number of exercises {props.number1 + props.number2 + props.number3}</p>
  );
};
const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content name1={part1} name2={part2} name3={part3}></Content>
      <Total
        number1={part1.exercises}
        number2={part2.exercises}
        number3={part3.exercises}
      ></Total>
    </div>
  );
};

export default App;
