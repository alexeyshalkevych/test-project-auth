import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

const LoginTest = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    try {
      const newUser = await axios.post(
        // "https://warm-reef-14893.herokuapp.com/api/v1/auth/register",
        "http://localhost:4242/auth/register",
        form
      );

      console.log(newUser.data);
    } catch (error) {
      console.error(error);
    }

    setForm({ email: "", password: "", confirmPassword: "", name: "" });
  };

  const handleInput = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const responseGoogle = async (response) => {
    const { accessToken } = response;

    const body = {
      accessToken,
    };

    const bla = await axios.post(
      // "https://warm-reef-14893.herokuapp.com/api/v1/auth/google",
      // "http://localhost:4242/api/v1/auth/google",
      "http://localhost:4242/auth/google",
      body
    );

    console.log(bla);
  };

  const responseFacebook = async (response) => {
    const { accessToken } = response;

    console.log(accessToken);

    const body = {
      accessToken,
    };

    const bla = await axios.post(
      // "https://warm-reef-14893.herokuapp.com/api/v1/auth/facebook",
      // "http://localhost:4242/api/v1/auth/facebook",
      "http://localhost:4242/auth/facebook",
      body
    );

    console.log(bla);
  };

  const handleGoogleAuth = async () => {
    // await axios.get("https://accounts.google.com/o/oauth2/v2/auth");
    const params = new URLSearchParams({
      client_id:
        "566572400240-1bqcgkac9k0v7j836crur44omj0htaoi.apps.googleusercontent.com",
      redirect_uri: "https://warm-reef-14893.herokuapp.com/api/v1/auth/google",
      response_type: "code",
      scope: "openid email profile",
    });

    const url =
      "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString();

    // const test = window.open(url);

    let style = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

    // const bla = await axios.get(url);
    // console.log(bla);

    window.open(url, "test", style);

    // const bla = await axios.get(
    //   "https://warm-reef-14893.herokuapp.com/api/v1/auth/google",
    //   params
    // );
    // console.log(bla);
  };

  const handleFacebookAuth = () => {
    const params = new URLSearchParams({
      client_id: "641950426421786",
      redirect_uri:
        "https://warm-reef-14893.herokuapp.com/api/v1/auth/facebook",
      // state: "{st=state123abc,ds=123456789}",
      scope: ["email", "user_friends"].join(","),
      response_type: "code",
      auth_type: "rerequest",
      display: "popup",
    });

    console.log(params.toString());

    const url =
      "https://www.facebook.com/v8.0/dialog/oauth?" + params.toString();

    let style = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

    const newWin = window.open(url, "test", style);

    if (newWin.opener) {
      // send them to the opening window
      newWin.opener.postMessage(params);
      // close the popup
      newWin.close();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="confirm password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={form.name}
            onChange={handleInput}
          />
        </div>
        <button type="submit">register</button>
      </form>
      <div>
        <button onClick={handleGoogleAuth}>Google o_auth</button>
      </div>
      <div>
        <button onClick={handleFacebookAuth}>Facebook o_auth</button>
      </div>
      <div>
        <GoogleLogin
          clientId="1016113227604-0u7tph6hm9s2bbnvi19h8dvdg3h5lqu4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          autoLoad={false}
          // cookiePolicy={"single_host_origin"}
        />
      </div>
      <div>
        <FacebookLogin
          appId="628094021455729"
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
    </>
  );
};

export default LoginTest;
