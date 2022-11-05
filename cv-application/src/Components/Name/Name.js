import "./Name.css";

const Name = (props) => {
  const { editDetails } = props;

  return (
    <div className="name-container">
      <h1 className="name" onClick={editDetails}>
        Mia Williams
      </h1>
      <h4 className="title" onClick={editDetails}>
        Professional Title
      </h4>
    </div>
  );
};

export default Name;
