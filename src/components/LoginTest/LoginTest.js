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
  const [userTokenG, setUserTokenG] = useState("");
  const [userTokenF, setUserTokenF] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://powerful-waters-91620.herokuapp.com/auth/register",
        form
      );

      console.log(data);
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
    try {
      const { accessToken } = response;

      console.log(response);

      const body = {
        accessToken,
      };

      const { data } = await axios.post(
        "https://powerful-waters-91620.herokuapp.com/auth/google",
        body
      );

      setUserTokenG(data.token);
      setUserTokenF("");

      console.log("GOOGLE LOGIN GOOD");
      console.log(data);
    } catch (error) {
      console.log("GOOGLE LOGIN FAILED");
      console.error(error);
    }
  };

  const responseFacebook = async (response) => {
    try {
      const { accessToken } = response;

      const body = {
        accessToken,
      };

      const { data } = await axios.post(
        "https://powerful-waters-91620.herokuapp.com/auth/facebook",
        body
      );

      setUserTokenF(data.token);
      setUserTokenG("");

      console.log("FACEBOOK LOGIN GOOD");

      console.log(data);
    } catch (error) {
      console.log("FACEBOOK LOGIN FAILED");
      console.error(error);
    }
  };

  const userLogout = async () => {
    let bearerToken = null;

    if (userTokenG) {
      bearerToken = userTokenG;
    } else if (userTokenF) {
      bearerToken = userTokenF;
    }

    try {
      const opt = {
        method: "POST",
        url: "https://powerful-waters-91620.herokuapp.com/auth/logout",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios(opt);

      console.log("LOGOUT GOOD");

      console.log(res);
    } catch (error) {
      console.log("LOGOUT FAILED");
      console.log(error);
    }
  };

  return (
    <div>
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
      <br />
      <div>
        <GoogleLogin
          clientId="1016113227604-0u7tph6hm9s2bbnvi19h8dvdg3h5lqu4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          autoLoad={false}
        />
        <FacebookLogin
          appId="628094021455729"
          fields="name,email,picture"
          callback={responseFacebook}
          autoLoad={false}
          buttonStyle={{
            padding: "12px 16px",
            fontSize: "14px",
            marginLeft: "10px",
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={userLogout}>logout</button>
      </div>
    </div>
  );
};

export default LoginTest;
