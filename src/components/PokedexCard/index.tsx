import React from 'react';
import { PokemonListInterface } from '../../services/ListPokemons';
import { useHistory } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PokemonDatail } from '../../interfaces/PokemonDatail';
import { Chip, Box } from '@material-ui/core';

interface PokedexCardProps {
  pokemon: PokemonDatail;
}

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/pokemon/${pokemon.name}`)
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        padding: '75px', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
    }),
  );

  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={pokemon.sprites.other?.['official-artwork'].front_default}
          title={pokemon.name}
        />
        <CardHeader
          title={pokemon.name}
          subheader={pokemon.types.map((type) => (
            // <Box mr={1}>
              <Chip label={type.type.name} variant="outlined" />
            // </Box>
          ))}
        />
      </Card>
    </>
  )

}

export default PokedexCard;
