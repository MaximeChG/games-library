'use client';

import { useFormStatus } from "react-dom";
import Button from "../button/button";

export default function FormSubmitButton() {
    const { pending } = useFormStatus();
    return <Button type="submit" text={pending ? "Submitting..." : "Submit"} buttonClass={""} state={pending}/>
}