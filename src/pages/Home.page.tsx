import TextField from "../components/atom/TextField";
import {ChangeEventHandler, useState} from "react";

const HomePage = () => {

    return (
        <div>
            <TextField onChange={(e: ChangeEventHandler<HTMLInputElement>)=>{}} placeholder="Search Movie" type="text" />
        </div>
    )
}

export default HomePage