import Link from "next/link";
import { useRouter } from 'next/router';

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>
        Welcome to the {id?.split("-").join(" ").toUpperCase()} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link href="/courses">See all courses</Link>
    </div>
  );
}

export default Course;
