import React from 'react';
import { UserContext, Card } from './context';

function AllData() {
    const ctx = React.useContext(UserContext);
    const bgStyle = {
        backgroundImage: 'url(/BGbank-alldata.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    };

    return (
        <>
            <div style={bgStyle}></div>
            <Card
                txtcolor="black"
                header="Bad Bank"
                title="Peek at other's data!"
                text=""
                body={
                    <>
                    <img src="alldataCard.png" className="img-fluid" alt="Responsive image" />
                    <div className="table-responsive table-hover">
                            <table className="table borderless">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ctx.users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.balance}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                }
            />
        </>
    );
}

export default AllData;
