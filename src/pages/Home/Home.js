import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-sands-77989.herokuapp.com/data')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    return (
        <div>
            <table className="table w-100 mx-auto">


                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>

                    </tr>
                    {
                        data.map(order =>
                            <tr>
                                <td>{order.FirstName}</td>
                                <td>{order.LastName}</td>
                                <td>{order.email}</td>
                                <td>{order.age}</td>
                                <td>{order.gender}</td>
                            </tr>

                        )
                    }

                </tbody>




            </table>


        </div>
    );
};

export default Home;