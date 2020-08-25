class Component extends React.Component {
  render() {
    return (
      <div className="component">
        Welcome {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <Component name="Fili" />,
  document.getElementById("container");
);
