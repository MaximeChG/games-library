import classes from "./form.module.css";

import GameForm from "./gameForm";

const EditGameForm = () => {

    function editCurrentGame(e: any) {
        e.preventDefault();
    }

    return <div className={classes.container}>
        <h1 className={classes.h1}>Edit Game</h1>
        <GameForm onSubmit={editCurrentGame} />
    </div>
}

export default EditGameForm;