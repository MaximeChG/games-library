import classes from "./form.module.css";

interface Props {
    onSubmit: (e: any) => void,
    children: React.ReactNode
}

export default function Form({children, onSubmit}: Props){
    return (
        <form className={classes.form} onSubmit={onSubmit}>
            {children}
        </form>
    )
     
}