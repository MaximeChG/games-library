import LegendContainer from "@/components/legend/legend";
import classes from "./page.module.css";
import Link from "next/link";
import RowContainer from "@/components/gameRow/rowContainer";
import { fetchGames } from "@/lib/gameActions";


// Since this is the base page, I doub props will ever be used but you never know
type Props = {
};

export default async function Home({  }: Props) {

  // Get all games
  const games = await fetchGames();

  // TODO: the app should show an error message if unable to find games
  return (
    <>
    {/*   Header section should include the legend, and a way to search, add games 
    TODO: Would like to eventually create a filter instead of search function*/}
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
