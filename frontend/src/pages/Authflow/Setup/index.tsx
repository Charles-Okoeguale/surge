import React, {useContext} from "react";
import { Appcontext } from "../../../context";


const Setup = () => {
    const {stage} = useContext(Appcontext)
    console.log(stage)
    return (
        <div>

        </div>
    )
}

export default Setup