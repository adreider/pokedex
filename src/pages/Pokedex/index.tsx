import React, { useEffect, useState } from 'react';
import { ListPokemons, PokemonListInterface } from '../../services/ListPokemons';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { AppBar, Toolbar, Box, Container, Grid } from '@material-ui/core';
import PokedexCard from '../../components/PokedexCard';
import { PokemonDatail } from '../../interfaces/PokemonDatail';

interface PokedexProps {

}

export const Pokedex: React.FC<PokedexProps> = () => {

  const [pokemons, setPokemons] = useState<PokemonDatail[]>([]);

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);


  useEffect(() => {
    ListPokemons().then((response) => {
      setPokemons(response.results)
    })
  }, []);


  return (

    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box mt={5}>

          <Grid container spacing={2}>

            {pokemons.map(pokemon => (
              <Grid item xs={6} lg={3}>
                <PokedexCard pokemon={pokemon} />
              </Grid>
            ))}

          </Grid>

         
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;