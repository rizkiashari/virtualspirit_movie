import {ChangeEventHandler} from "react";

export interface TextFieldProps {
    value?: string;
    onChange: (e: ChangeEventHandler<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
}