import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { signoutWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => signoutWithRedirect()}>SSign Out</button>
    )
  );
}
