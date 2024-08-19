function Greeting(props) {
  const name = props.name;
  return (
    <div className="greeeting div">
      <h2>Привет, {name}!</h2>
    </div>
  );
}

export default Greeting;
