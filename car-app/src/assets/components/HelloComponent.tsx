import React from "react";

export type HelloProps = {
    name: string;
    age?: number;
    fn?: () => void;
}

function HelloComponent({name, age}: HelloProps){

    return(
        <>
            Hello {name}, you are {age} years old!
        </>
    )
}

export default HelloComponent;