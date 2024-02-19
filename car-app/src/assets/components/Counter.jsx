import React, {useState, useEffect, useRef} from 'react';
import useTitle from './useTitle';
import AuthContext from './AuthContext';
import {v4} from 'uuid'


function Counter(){
    const [count, setCount] = useState(0);
    // const [text, setText] = useState('');
    const handleChange = (event) => {
        setUser({...user, [event.target.name]:
        event.target.value})
        // setText(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName} ${user.lastName}`);
        event.preventDefault();
    }
    const inputRef = useRef(null);
    const authContext = React.useContext(AuthContext);
    const data = [1, 2, 3, 4, 5];
    const tableData = [
      { id: 1, brand: "Ford", model: "Mustang" },
      { id: 2, brand: "VW", model: "Beetle" },
      { id: 3, brand: "Tesla", model: "Model S" },
    ];
    const handleClick = () => {
        alert('Button pressed');
    }
    useTitle(`You clicked ${count} times`);

    useEffect(() => {
      console.log("Hello from useEffect");

      return () => {
        console.log("Cleanup fun");
      };
    });

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    return (
    <div>
        <p>Counter = {count}</p>
        <button onClick={() => setCount((countVal) => countVal+1)}>
            Increment
        </button>
        <br/>
        <input ref={inputRef} defaultValue={authContext}/>
            <button onClick={() => inputRef.current.focus()}>
                Focus input
        </button>
        <div>
            <ul>
                {
                    data.map((number) => {
                        const key = v4();
                        console.log(key)
                       return (<li key={key}>Listen {number}</li>);
                       
                    })
                }
            </ul>
        </div>
        <div>
            <table>
                <tbody>
                    {
                        tableData.map((item) =>
                        <tr key={item.id}>
                            <td>{item.brand}</td>
                            <td>{item.model}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
            <button onClick={handleClick}>Press me</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>First name</label>
                <input type='text' name='firstName' onChange={handleChange}
                value={user.firstName}/><br/>
                <label>Last name</label>
                <input type='text' name='lastName' onChange={handleChange}
                value={user.lastName}/><br/>
                <label>Email</label>
                <input type='email' name='email' onChange={handleChange}
                value={user.email}/><br/>
                <input type='submit' value="Press me"/>
            </form>
        </div>
        
    </div>
    );
}

export default Counter;