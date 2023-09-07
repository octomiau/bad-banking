import React from 'react';
import { UserContext, Card } from './context';

function LogIn(){
    const bgStyle = {
        backgroundImage: 'url(/BGbank-login.png)',
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
    const [name, setName]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    const [nameError, setNameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
  
    function validate(field, type) {
        if (!field) {
            switch(type) {
                case 'name':
                    setNameError('Name is required.');
                    break;
                case 'password':
                    setPasswordError('Password is required.');
                    break;
                default:
                    break;
            }
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
        setPasswordError('');
        if (!validate(name,    'name'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,password,balance:0});
        setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setPassword('');
      setShow(true);
    }
  
    return (
    <>
        <div className="maincontent">
            <div className="maincontent">
                <div style={bgStyle}></div>
                    <Card
                        bgcolor="card border-dark mb-3"
                        header="Log In"
                        txtcolor="black"
                        status={status}
                        body={show ? (  
                                <>
                                Name<br/>
                                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                                {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                                Password<br/>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                                {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                                <button type="submit" className="btn btn-outline-primary" onClick={handleCreate}>Log In</button>
                                </>
                            ):(
                                <>
                                <h5>Welcome back {name}!</h5>
                                <button type="submit" className="btn btn-primary" onClick={clearForm}>Change to another account</button>
                                </>
                            )}
                    />
            </div>
        </div>
    </>
    )
  }

  export default LogIn;
  