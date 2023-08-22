import Link from 'next/link';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <h1>NextJS Example</h1>

      <p>
        This example demonstrates how to use React Router's "route object" API
        instead of the JSX API to configure your routes. Both APIs are
        first-class. In fact, React Router actually uses the object-based API
        internally by creating route objects from your{" "}
        <code>&lt;Route&gt;</code>
        elements.
      </p>

      <p>
        React Router exposes a <code>useRoutes()</code> hook that allows you to
        hook into the same matching algorithm that <code>&lt;Routes&gt;</code>{" "}
        uses internally to decide which <code>&lt;Route&gt;</code> to render.
        When you use this hook, you get back an element that will render your
        entire route hierarchy.
      </p>

    {/* Layout component */}
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
