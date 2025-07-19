import AddGameForm from "@/backup/components/forms/addGameForm";

// Default props variable
type Props = {
};

// Component function to for the game path, this will be AddGame for now. 
export default async function Page({}: Props) {
    // For now return the AddGameForm
    return <AddGameForm/>
}