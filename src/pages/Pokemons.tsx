import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PokemonList } from "../components";

export const Pokemons: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('page') || isNaN(Number(searchParams.get('page')))) {
      searchParams.set('page', '1');
      setSearchParams({ page: '1' });
    }
  }, [searchParams, setSearchParams])

  const getPage = (): number => { 
    const page = Number(searchParams.get('page'))

    if (isNaN(page)) {
      return 0;
    }

    return page - 1;
  }

  const handlePageChange = (page: number) => {
    searchParams.set('page', `${page + 1}`);
    setSearchParams({ page: `${page + 1}` });
  }

  return (
    <>
      { searchParams.get('page') != null && <PokemonList page={getPage()} onPageChange={handlePageChange}/>}
    </>
  );
} 
