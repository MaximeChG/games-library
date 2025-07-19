import EditGameForm from "@/backup/components/forms/editGameForm";
import { fetchGame } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";

// default props type, edit props here
type Props = {
};

// page for editing 1 game
export default async function Page({params}: {params: Promise< {slug: string}>}) {

    // get the slug from params
    const  {slug} = await params;

    // TODO: need to check make sure there is an ID if not return an error

    // Grab game based on slug
    const game: LocalGame = await fetchGame(slug);

    // Return the EditGameForm passing in the game found from fetchGame
    return <EditGameForm game={game}/>

    // TODO: Returning the editGameForm should only work if there is no error message, an error should be shown to the user instead of a crash
}