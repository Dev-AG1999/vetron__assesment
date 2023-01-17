import { useContext, useEffect, useState } from "react";
import SignIn from "../components/signin.component";
import { useLocation, useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
import Header from "../components/header.component";
import { UserContext } from "../App";

function SigninPage({ isUserSaved }) {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });



  const [useFetchApi, setuseFetchApi] = useState(false);
  const [res_error, setres_error] = useState(null);
  const [resData, setresData] = useState({});
 

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [pass_error, setpass_error] = useState("")

  const validatePassword = (str) =>{
    let regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$";
    if(regex.test(str)==true)
    {
      setpass_error("");
    }
    else{
setpass_error("Min length 5, 1 upper case,1 lower case, 1 digit");
    }
  }

  const getData = async (credentials) => {
    {
      await fetch("https://dummyjson.com/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data", data);

          if (data.token !== undefined) {
            console.log("PASS", data);
            setresData(data);
            localStorage.setItem("accessToken", JSON.stringify(data));
            setTimeout(() => {
              setUser({ loggedIn: true, data: data });
              navigate("/home");
            }, 1400);
          } else {
            setres_error(data.message);
          }

          // if (
          //   data.token !== "" ||
          //   data.token !== null ||
          //   data.token !== undefined
          // ) {
          //   setTimeout(() => {
          //     // setUser({ loggedIn: true, data: data });
          //     // navigate("/home");
          //   }, 1400);
          // } else {
          //   // setUser({ loggedIn: false, data: null });
          //   // navigate("/");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (useFetchApi) {
      getData(loginData);
      setTimeout(() => {
        setuseFetchApi(false);
      }, 1400);
      if (user.loggedIn) return;
      // setUser({ loggedIn: true });
      if (location.state?.from) {
        navigate(location.state.from);
      }
    }
  }, [useFetchApi]);

  useEffect(() => {
    let welcome_msg =
      resData.username !== undefined ? "Welcome !! " + resData.username : null;

    if (resData.username !== "" || resData.username !== null)
      if (
        (loginData.username !== "" || loginData.username !== undefined) &&
        loginData.password !== "" &&
        loginData.password !== undefined &&
        (resData.username == undefined || resData.username == "")
      ) {
        setres_error("Oops ! Invalid Credentials. Please try again");
      } else {
        setres_error(welcome_msg);
      }
  }, [resData, res_error]);

  return (
    <div className="App-header">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <SignIn
          username={loginData.username}
          password={loginData.password}
          onUserName={(e) =>
            setloginData({ ...loginData, username: e.target.value })
          }
          onPassword={(e) =>
            setloginData({ ...loginData, password: e.target.value })
          }
          onSubmit={() => setuseFetchApi(true)}
          res_error={res_error}
        />
      </Grid>
    </div>
  );
}

export default SigninPage;
