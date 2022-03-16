import React, { useEffect, useState } from 'react';
import { PokemonDatail } from '../../interfaces/PokemonDatail';
import { AppBar, Toolbar, Box, Container, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useParams } from 'react-router-dom';
import { GetPokemonDatails } from '../../services/GetPokemonDatails';

interface PokemonDatailProps {

}

interface PokemonQueryParams {
  name: string;
}

const PokemonDatails: React.FC<PokemonDatailProps> = () => {

  const { name } = useParams<PokemonQueryParams>();

  const [selectedPokemonDatails, SetselectedPokemonDatails] = useState<PokemonDatail | undefined>(undefined);


  useEffect(() => {
    if (!name) return;
    GetPokemonDatails(name).then((response) => {
      SetselectedPokemonDatails(response);
    });

  }, [name]);


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Pokemon selecionado: {name}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box mt={2}>

          <img src={selectedPokemonDatails?.sprites.front_default} alt="" />

        </Box>
      </Container>

      <h2>Pokemon selecionado: {name || "Nenhum pokemon selecionado"}</h2>

      {JSON.stringify(selectedPokemonDatails, undefined, 2)}
    </div>
  );
};

export default PokemonDatails;
