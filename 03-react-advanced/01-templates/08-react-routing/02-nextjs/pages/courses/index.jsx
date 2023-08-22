import Link from "next/link";

const CoursesIndex = () => {
  return (
    <div>
      <div>
        {/* Courses component */}
        <h2>Courses</h2>
        <p>Please choose a course:</p>
        <nav>
          <ul>
            <li>
              <Link href="/courses/react-fundamentals">React Fundamentals</Link>
            </li>
            <li>
              <Link href="/courses/advanced-react">Advanced React</Link>
            </li>
            <li>
              <Link href="/courses/react-router">React Router</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default CoursesIndex;
