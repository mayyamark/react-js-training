import { Link, useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>
        Welcome to the {id.split("-").join(" ").toUpperCase()} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}

export default Course;
