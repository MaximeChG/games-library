import LegendContainer from "@/components/legend/legend";
import classes from "./page.module.css";
import Link from "next/link";
import RowContainer from "@/components/gameRow/rowContainer";
import { IGame } from "@/types/games";
import { fetchGames } from "@/lib/gameActions";

type Props = {
};

export default async function Home({  }: Props) {

  const games = await fetchGames();

  return (
    <>
      <div className={classes.header}>
        <LegendContainer />
        <div className={classes.searchGames}>
            <label>Search:</label>
            <input />
            <Link type="button" className={classes.button} href={"/game"}>Add Game</Link>
        </div>
      </div>
      <div className={classes.body}>
        <ul className={classes.gamesList}>
          {games.map((game: any) => (
                  <RowContainer  key={game._id.toString()} game={game} />
              ))}
        </ul>
      </div>
    </>
  );
}
