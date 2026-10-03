import { useRef } from "react";

function Login() {

  const emailRef = useRef(null);
  const passRef = useRef(null);

  console.log("re render");

  function handledSubmit(e) {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  }

  return (
    <>
      <form onSubmit={handledSubmit}>

        <input
          type="email"
          ref={emailRef}
        />

        <br />

        <input
          type="password"
          ref={passRef}
        />

        <br />

        <button type="submit">Submit</button>

      </form>
    </>
  );
}

export default Login;