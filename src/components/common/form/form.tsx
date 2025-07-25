import classes from "./form.module.css";

interface Props {
    children: React.ReactNode
    onFormSubmit: (e: any) => void
}

export default function Form({children, onFormSubmit} :Props) {
    return <form className={classes.form} onSubmit={onFormSubmit}>{children}</form>
}