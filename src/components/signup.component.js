import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "react-select";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";

const Signup = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    country: "",
    state: "",
    gender: "",
    male: "",
    female: "",
  });
  
   const [error,setError]=useState("")
  const [anotherError,setAnotherError]=useState("")

  const genderOptions = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ];

  console.log('FOrm', form)
 

  const genderChange =( value) =>{
    setForm({...form, gender:value})

  }

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email) || form.password.length < 5) {
      setError('Please enter valid required value');
    }
    else if( form.email==="" || form.password==="" || form.firstname==="" ||form.lastname==="" || form.city==="" || form.country==="" || form.state===""||form.gender===""){
      setAnotherError("please enter required fields")
    }

  
else{
setAnotherError("")
setError("")
alert("signup done")
}
  };

  return (
    <Grid
      container
      styles={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        overflowY: "scroll",
    
      }}
    >
      <Grid
        style={{ margin: "auto" }}
        item
        xs={12}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div
          style={{
            margin: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            background:"#09134D",
        
          }}

        >
          <Typography color="white" component="h1" variant="h5">
            Sign Up
          </Typography>
          <form
            style={{ width: "100%", height: "100%", marginTop: "3",color:"white" }}
            noValidate
          >
            <TextField 
              variant="outlined"
              margin="normal"
              required
              style={{ marginTop: "10px",background:"white" }}
              fullWidth
              id="firstname"
              name="firstname"
              label="Firstname"
              value={form.firstname}
              onChange={onUpdateField}
            />
            {form.firstname === "" && <p>please enter firstname</p>}
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              style={{ marginTop: "10px",background:"white" }}
              id="lastname"
              name="lastname"
              label="Lastname"
              value={form.lastname}
              onChange={onUpdateField}
            />
            {form.lastname === "" && <p>please enter lastanme</p>}
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              style={{ marginTop: "10px",background:"white" }}
              name="email"
              label="Email Address"
              value={form.email}
              onChange={onUpdateField}
            />
           {
            form.email ==="" && <p>please enter email</p>
           
          }
           {
             error && <p>{error}</p>
            }
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              style={{ marginTop: "10px",background:"white" }}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={form.password}
              onChange={onUpdateField}
            />
         {
            form.email ==="" && <p>please enter email</p>
           
          }
           {
             error && <p>{error}</p>
            }

            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              name="city"
              style={{ marginTop: "10px",background:"white" }}
              label="City"
              type="city"
              value={form.city}
              onChange={onUpdateField}
            />
            {form.city === "" && <p>please enter your city</p>}
            <TextField 
              variant="outlined"
              margin="normal"
              required
              style={{ marginTop: "10px",background:"white" }}
              fullWidth
              id="state"
              name="state"
              label="State"
              type="state"
              value={form.state}
              onChange={onUpdateField}
            />
            {form.state === "" && <p>please enter your state</p>}

            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="country"
              name="country"
              style={{ marginTop: "10px",background:"white" }}
              label="Country"
              type="country"
              value={form.country}
              onChange={onUpdateField}
            />
            {form.country === "" && <p>please enter your country</p>}

            <FormControl>
              <FormLabel style={{color:"white"}} id="demo-controlled-radio-buttons-group">
                Gender:{form.gender}
              </FormLabel>
                <Select style={{color:"black"}}
                options={genderOptions}
                onChange={e=>genderChange(e.label)}
                />
            </FormControl>

            {anotherError && <p>{anotherError}</p>}
            {error && <p>{error}</p>}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => handleSubmit(e)}
              style={{background:"rgb(57, 224, 98)"}}
            >
              Sign Up
            </Button>
            <Link style={{color:" #1976d2"}} to="/"> Already Have an Account ? Sign in</Link>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
