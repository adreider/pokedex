import React, { useEffect, useState } from 'react';
import { PokemonDatail } from '../Pokemon/interfaces/PokemonDatail';
import { GetPokemonDatails } from '../Pokemon/services/GetPokemonDatails';
import { ListPokemons, PokemonListInterface } from '../Pokemon/services/ListPokemons';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { AppBar, Toolbar, Box, Container, Grid } from '@material-ui/core';

import { Card, CardActions, CardContent, Button } from '@material-ui/core';

interface PokedexProps {

}

export const Pokedex: React.FC<PokedexProps> = () => {

  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);

  const [selectedPokemonDatails, SetselectedPokemonDatails] = useState<PokemonDatail | undefined>(undefined);

  useEffect(() => {
    ListPokemons().then((response) => {
      setPokemons(response.results)
    })
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    GetPokemonDatails(selectedPokemon.name).then((response) => {
      SetselectedPokemonDatails(response);
    });

  }, [selectedPokemon]);

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
        <Box mt={10}>

          <Grid container spacing={2}>

            {pokemons.map(pokemon => (
              <Grid item xs={6} lg={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {pokemon.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      
                    </Typography>

                    <Typography color="textSecondary">
                      ...
                    </Typography>

                    <Typography variant="body2" component="p">
                      ...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>

          Pokemons:

          <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2>

          {JSON.stringify(selectedPokemonDatails, undefined, 2)}
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;