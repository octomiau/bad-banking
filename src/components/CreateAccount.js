import React from 'react';
import { UserContext, Card } from './context';

function CreateAccount(){
    const bgStyle = {
        backgroundImage: 'url(/BGbank-createaccount.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    }; 

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
  
    function validate(field, type) {
        if (!field) {
            switch(type) {
                case 'name':
                    setNameError('Name is required.');
                    break;
                case 'email':
                    setEmailError('Email is required.');
                    break;
                case 'password':
                    setPasswordError('Password is required.');
                    break;
                default:
                    break;
            }
            return false;
        } else if (type === 'email' && !/\S+@\S+\.\S+/.test(field)) {
            setEmailError('Email is not valid.');
            return false;
        } else if (type === 'password' && field.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            alert('Password must be at least 8 characters long.');  // This line shows an alert to the user
            return false;
        }
        return true;
    }
  
    function handleCreate(){
        setNameError('');
        setEmailError('');
        setPasswordError('');
        console.log(name,email,password);
        if (!validate(name,     'name'))     return;
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
    <>
        <div style={bgStyle}></div>
            <Card
                bgcolor="card border-dark mb-3"
                header="Create Account"
                txtcolor="black"
                status={status}
                body={show ? (  
                        <>
                        Name<br/>
                        <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                        {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                        Email address<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <button type="submit" className="btn btn-outline-primary" onClick={handleCreate}>Create Account</button>
                        </>
                    ):(
                        <>
                        <h5>Success</h5>
                        <button type="submit" className="btn btn-primary" onClick={clearForm}>Add another account</button>
                        </>
                    )}
            />
    </>
    )
  }

  export default CreateAccount;
  