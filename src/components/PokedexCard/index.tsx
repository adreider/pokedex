import React from 'react';
import { PokemonListInterface } from '../../services/ListPokemons';
import { Card } from './styles';
import { useHistory } from 'react-router-dom';

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/pokemon/${pokemon.name}`)
  }
  
  return (
    <>
      <Card onClick={handleClick}>
        {pokemon.name}
      </Card>
    </>
  )

}

export default PokedexCard;
