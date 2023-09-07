import React from 'react';
import { UserContext, Card } from './context';

function Withdraw(){
    const bgStyle = {
        backgroundImage: 'url(/BGbank-withdraw.png)',
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
    const [withdraw, setWithdraw]         = React.useState('');
    const ctx = React.useContext(UserContext);
    const [withdrawError, setWithdrawError] = React.useState('');
    const [balance, setBalance] = React.useState(100);
  
    function validate(field, type) {
        if (!field && type === 'withdraw') {
            setWithdrawError('Withdrawal is required.');
            return false;
        } else if (isNaN(field)) {
            setWithdrawError('Input should be a number.');
            return false;
        } else if (parseFloat(field) > balance) {   // Check if withdrawal amount is greater than the balance
            setWithdrawError('Insufficient funds.');
            return false;
        }
        setWithdrawError('');
        return true;
    }
    function handleCreate(){
        setWithdrawError('');
        if (!validate(withdraw,     'withdraw'))     return;
        setBalance(prevBalance => {
            const newBalance = prevBalance - parseFloat(withdraw);
            if (newBalance >= 0) {
                ctx.users.push({withdraw, balance: newBalance});
                return newBalance;
            } else {
                setWithdrawError('Insufficient funds.');
                return prevBalance;  // retain the old balance
            }
        });

        setWithdraw('');
        setShow(false);
    }    
  
    function clearForm(){
        setWithdraw('');
        setShow(true);
    }
  
    return (
        <>
            <div className="maincontent">
                <div style={bgStyle}></div>
                    <Card
                        bgcolor="card border-dark mb-3"
                        header="Withdraw"
                        txtcolor="black"
                        status={status}
                        body={(
                            <>
                            Balance: ${balance} <br /> {/* Display the balance */}
                            {show ? (
                                <>
                                <img src="withdrawCard.png" className="img-fluid" alt="Responsive image"/>
                                Withdraw<br/>
                                <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
                                {withdrawError && <div style={{ color: 'red' }}>{withdrawError}</div>}
                                <button type="submit" className="btn btn-outline-primary" onClick={handleCreate} disabled={!withdraw}>Make withdraw</button>
                                </>
                            ):(
                                <>
                                <h5>Success</h5>
                                <img src="balanceCard.png" className="img-fluid" alt="Responsive image"/>
                                <button type="submit" className="btn btn-primary" onClick={clearForm}>Make another withdraw opperation</button>
                                </>
                                
                            )}
                            </>
                            
                        )}
                        />
            </div>
        </>
    )}

export default Withdraw;