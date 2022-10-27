import Link from "next/link";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href="/team">
        <StyledLink>Team</StyledLink>
      </Link>
      <a>This is our team</a>
    </>
  );
}
