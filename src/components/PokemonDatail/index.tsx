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
          <img width="100%" height="auto" src={selectedPokemonDatails?.sprites.other?.['official-artwork'].front_default} alt="" />
        </Box>

        <Typography variant="h2">
          {selectedPokemonDatails?.name}
        </Typography>

        {selectedPokemonDatails?.types.map((type) => <p>{type.type.name}</p>)}

        <Box display="flex" flexDirection='row'>
          <Typography>
            Espécie:
          </Typography>

          <Typography>
            {selectedPokemonDatails?.species.name}
          </Typography>
        </Box>

        <Box display="flex" flexDirection='row'>
          <Typography>
            Altura:
          </Typography>

          <Typography>
            {selectedPokemonDatails?.height}
          </Typography>
        </Box>

        <Box display="flex" flexDirection='row'>
          <Typography>
            Peso:
          </Typography>

          <Typography>
            {selectedPokemonDatails?.weight}
          </Typography>
        </Box>

        <Box display="flex" flexDirection='row'>
          <Typography>
            Habilidades:
          </Typography>

          <Typography>
            {selectedPokemonDatails?.abilities.map((ability) => <Typography>{ability.ability.name}</Typography>)}

          </Typography>
        </Box>

      </Container>
    </div>
  );
};

export default PokemonDatails;
