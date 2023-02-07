import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { createPokemon, updatePokemon } from '../../services/pokemon.service';
import { InputText, RangeSlider } from '../Inputs';

const Form = ({
  titleForm,
  actionsButtons,
  data = {},
  pokemons,
  setPokemons,
  handleCloseModal,
}) => {
  const {
    control,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm(
    data.id
      ? { defaultValues: data }
      : { defaultValues: { name: '', img: '', attack: 50, fender: 50 } }
  );

  const onSubmitCreate = handleSubmit(async (pokemon) => {
    try {
      const response = await createPokemon(pokemon);

      if (response.status === 201) {
        const updatedPokemons = [...pokemons, response.data];
        setPokemons(updatedPokemons);
        handleCloseModal();
      }
    } catch (err) {
      console.log('Ha ocurrido un error', err);
    }
    reset();
  });

  const onSubmitUpdate = handleSubmit(async (pokemon) => {
    if (isDirty) {
      try {
        const response = await updatePokemon(data.id, pokemon);

        if (response.status === 200) {
          const updatedPokemons = pokemons.map((pokemon) => {
            if (pokemon.id === data.id) {
              return { ...pokemon, ...response.data };
            }

            return pokemon;
          });

          setPokemons(updatedPokemons);
          handleCloseModal();
        }
      } catch (err) {
        console.log('Ha ocurrido un error', err);
      }
    }

    reset();
  });

  const onSubmit = (pokemon) => {
    if (titleForm === 'Nuevo Pokemon') {
      onSubmitCreate(pokemon);
    } else {
      onSubmitUpdate(pokemon);
    }
  };

  return (
    <section className="container">
      <div className="card">
        <div className="card-title text-center">
          <h5>{titleForm}</h5>
        </div>
        <form onSubmit={onSubmit}>
          <div className="d-flex justify-content-between">
            <div className="w-50">
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <InputText
                    label="Nombre:"
                    id="name"
                    name="name"
                    placeholder="nombre pokemon"
                    type="text"
                    className="mb-4"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
                rules={{ required: true }}
              />
              <Controller
                control={control}
                name="img"
                render={({ field: { onChange, value } }) => (
                  <InputText
                    label="Imagen:"
                    id="img"
                    name="img"
                    placeholder="url pokemon"
                    type="text"
                    className="mb-4"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
                rules={{ required: true }}
              />
            </div>
            <div className="w-50">
              <Controller
                control={control}
                name="attack"
                render={({ field: { onChange, value } }) => (
                  <RangeSlider
                    labeltext="Ataque:"
                    name="min"
                    min={0}
                    max={100}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                  />
                )}
              />
              <Controller
                control={control}
                name="fender"
                render={({ field: { onChange, value } }) => (
                  <RangeSlider
                    labeltext="Defensa:"
                    name="min"
                    min={0}
                    max={100}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                  />
                )}
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              {actionsButtons}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
