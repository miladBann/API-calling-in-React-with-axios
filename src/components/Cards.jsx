import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cards()
{

    const [users, setUsers] = useState([]);

    async function getUsers() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <div className="container">
                {
                    users.map((user, index) => {
                        return (
                        <Link to={`/posts/${user.id}`}>
                        <div className="card" key={index}>
                            <h2 className="name">{user.name}</h2>

                            <div className="email_cont">
                                <h3 className="email">Email:</h3>
                                <h3 className="thin">{user.email}</h3>
                            </div>
                            
                            <div className="phone_cont">
                                <h3 className="phone">Phone:</h3>
                                <h3 className="thin">{user.phone}</h3>
                            </div>
                            
                            <div className="website_cont">
                                <h3 className="website">Website:</h3>
                                <h3 className="thin">{user.website}</h3>
                            </div> 
                        </div>
                        </Link>
                        )
                    })
                }

            </div>
        </div>
    );

}

export default Cards;