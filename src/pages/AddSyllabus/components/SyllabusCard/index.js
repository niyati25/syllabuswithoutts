import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  control: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const SyllabusCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.control}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <CardContent>
            <Typography variant="h4" align="left" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="subtitle1" align="left">
              {props.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions disableSpacing>
            <IconButton onClick={() => props.onEdit(props.id)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => props.onDelete(props.id)}>
              <Delete />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SyllabusCard;
