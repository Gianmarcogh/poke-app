
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setValue] = useState('');

  const items: MenuItem[] = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => navigate('/'),
      },
      {
          label: 'Pokémons',
          icon: 'pi pi-table',
          command: () => navigate('/pokemons'),
      },
  ];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      navigate(`/pokemon/${inputValue}`);
    }
  }

  const onInput = (e : React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget as HTMLInputElement;
    setValue(value.toLowerCase());
  }

  const start = <img loading="lazy" alt="logo" src="/images/pokemon-logo.png" width={75} className="mr-2" />;
  const end = (
      <div className="flex align-items-center gap-2">
          <InputText placeholder="Search for a Pokémon" type="text" className="w-8rem sm:w-auto px-2" onKeyDown={onKeyDown} onInput={onInput} />
      </div>
  );

  return (
      <div className="card z-10">
        <Menubar model={items} start={start} end={end} />
      </div>
  )
}
        