import React, { useEffect, useState } from 'react';
import { ListPokemons, PokemonListInterface } from '../Pokemon/services/ListPokemons';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { AppBar, Toolbar, Box, Container, Grid } from '@material-ui/core';

import { Card, CardActions, CardContent, Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

interface PokedexProps {

}

export const Pokedex: React.FC<PokedexProps> = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);


  useEffect(() => {
    ListPokemons().then((response) => {
      setPokemons(response.results)
    })
  }, []);

  function handleClick(pokemon: PokemonListInterface) {
    history.push(`/pokemon/${pokemon.name}`)
  }

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
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => handleClick(pokemon)} size="small">Abrir</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>

         
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;