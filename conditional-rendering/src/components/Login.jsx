import React from "react";
import Input from "./Input";

const inputVar = [{
    id: 1,
    type : "text",
    placeholder : "username"
    },
    {
    id: 2,
    type : "password",
    placeholder : "password"
    }
];

function Login(){
    return(
        <div>
            <form className="form" >
                {inputVar.map( inputVar => (
                    <Input 
                    key={inputVar.id} 
                    type={inputVar.type} 
                    placeholder={inputVar.placeholder}
                    />
                )
                )}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;