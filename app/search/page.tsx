import getSongsByTitle from "@/actions/get-songs-by-title";
import Header from "@/components/header2";
import SearchInput from "@/components/search-input";
import SearchContent from "./components/search-content";

interface SearchProps {
  searchParams: {
    title: string;
  };
};

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Search
          </h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;