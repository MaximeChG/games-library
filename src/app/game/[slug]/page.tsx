import EditGameForm from "@/components/forms/editGameForm";
import { fetchGame } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";
import { useSearchParams } from "next/navigation";

type Props = {
};

export default async function Page({params}: {params: Promise< {slug: string}>}) {

    const  {slug} = await params;
    // need to check make sure there is an ID if not return an error
    const game: LocalGame = await fetchGame(slug);

    return <EditGameForm game={game}/>
}