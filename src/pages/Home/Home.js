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
            <table className="table container-fluid">


                <thead className="w-100">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody className="w-100">

                    {
                        data.map(order =>
                            <tr className="container-fluid w-100 ">
                                <td className="col">{order.FirstName}</td>
                                <td className="col">{order.LastName}</td>
                                <td className="col">{order.email}</td>
                                <td className="col">{order.age}</td>
                                <td className="col">{order.gender}</td>
                            </tr>

                        )
                    }

                </tbody>




            </table>


        </div >
    );
};

export default Home;