import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/next">NextJS</Link>
        </li>
        <li>
          <Link href="/news/next">NextJS</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
