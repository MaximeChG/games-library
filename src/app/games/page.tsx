import List from "@/components/games/list/list";
import classes from "./page.module.css";
import { fetchGames } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";
import { Suspense } from "react";
import Row from "@/components/common/row/row";
import LegendContainer from "@/components/legend/legend";
import Search from "@/components/search/search";


// Since this is the base page, I doub props will ever be used but you never know
type Props = {
};

export default async function Home({ }: Props) {

  const games: LocalGame[] = await fetchGames();

  // TODO: the app should show an error message if unable to find games
  return (
    <>
      {/*   Header section should include the legend, and a way to search
    TODO: Would like to eventually create a filter instead of search function*/}
      <Row>
        <LegendContainer />
        <Search label="Search: "/>
      </Row>
      <Suspense fallback={<div>Loading...</div>}>
        <List games={games} />
      </Suspense>
    </>
  );
}
