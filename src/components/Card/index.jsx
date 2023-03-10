function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="Error" />
      <p className="name">{props.name}</p>
      <div className="desc">
        <p>{props.position}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export { Card };
