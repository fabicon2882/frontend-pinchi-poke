import { useEffect, useState } from 'react';
import iconEdit from '../assets/edit.svg';
import iconTrash from '../assets/trash.svg';
import iconSearch from '../assets/search.svg';
import { Button, Form, InputText, Modal, Table } from '../components';
import {
  deletePokemon,
  getPokemon,
  getPokemons,
} from '../services/pokemon.service';

const HomePage = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState({ visible: false, action: '' });

  const [inputValue, setInputValue] = useState('');

  const handleShowModal = (action) => {
    setShowModal({ visible: true, action });
  };

  const handleCloseModal = (action) => {
    setShowModal({ visible: false, action });
  };

  const fetchPokemons = async () => {
    const data = await getPokemons();
    setPokemons(data);
    setSearchResults(data);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleUpdate = async (id) => {
    const data = await getPokemon(id);
    setPokemon(data);
    handleShowModal('modify');
  };

  const handleDelete = async (id) => {
    await deletePokemon(id);

    const updatedPokemons = pokemons.filter((pokemon) => {
      return pokemon.id !== id;
    });

    setPokemons(updatedPokemons);
  };

  const actionsButtonsCreate = (
    <>
      <Button
        type="submit"
        iconName="iconSave"
        className="mr-1"
        label="Guardar"
      />
      <Button
        type="button"
        iconName="iconCross"
        label="Cancelar"
        onClick={() => handleCloseModal('create')}
      />
    </>
  );

  const actionsButtonsUpdate = (
    <>
      <Button
        type="submit"
        iconName="iconSave"
        className="mr-1"
        label="Modificar"
      />
      <Button
        type="button"
        iconName="iconCross"
        label="Cancelar"
        onClick={() => handleCloseModal('modify')}
      />
    </>
  );

  const modalCreate = (
    <Modal>
      <Form
        titleForm="Nuevo Pokemon"
        actionsButtons={actionsButtonsCreate}
        pokemons={pokemons}
        setPokemons={setPokemons}
        handleCloseModal={() => handleCloseModal('create')}
      />
    </Modal>
  );

  const modalUpdate = (
    <Modal>
      <Form
        titleForm="Modificar Pokemon"
        actionsButtons={actionsButtonsUpdate}
        data={pokemon}
        pokemons={pokemons}
        setPokemons={setPokemons}
        handleCloseModal={() => handleCloseModal('modify')}
      />
    </Modal>
  );

  const config = [
    {
      label: 'Nombre',
      render: (pokemon) => pokemon.name,
    },
    {
      label: 'Imagen',
      render: (pokemon) => (
        <img src={pokemon.img} width={50} height={50} alt="imagen de pokemon" />
      ),
    },
    {
      label: 'Ataque',
      render: (pokemon) => pokemon.attack,
    },
    {
      label: 'Defensa',
      render: (pokemon) => pokemon.fender,
    },
    {
      label: 'Acciones',
      render: (pokemon) => (
        <>
          <img
            className="pointer"
            src={iconEdit}
            height={24}
            width={24}
            onClick={() => handleUpdate(pokemon.id)}
          />
          <img
            className="pointer"
            src={iconTrash}
            height={24}
            width={24}
            onClick={() => handleDelete(pokemon.id)}
          />
        </>
      ),
    },
  ];

  const keyFn = (pokemon) => {
    return pokemon.id;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    const filteredObjects = searchResults.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setPokemons(filteredObjects);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Listado de Pokemones</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InputText
            name="search"
            placeholder="Buscar"
            type="text"
            classNameLabel="hidden"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            img={iconSearch}
            classNameInput="pl-1"
          />
        </div>
        <div className="col d-flex justify-content-end">
          <Button
            type="button"
            iconName="iconAdd"
            label="Nuevo"
            onClick={() => handleShowModal('create')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table data={pokemons} config={config} keyFn={keyFn} />
        </div>
      </div>
      {showModal.action === 'create' && showModal.visible && modalCreate}
      {showModal.action === 'modify' && showModal.visible && modalUpdate}
    </div>
  );
};

export default HomePage;
