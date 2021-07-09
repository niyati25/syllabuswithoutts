import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { NewSyllabusForm } from "../../components/NewSyllabusForm";
import SyllabusCard from "./components/SyllabusCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      height: "90vh",
      backgroundColor: "#f5f5f5",
      borderRadius: 24,
    },
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const AddSyllabus = (props) => {
  const classes = useStyles();
  const initial_data = [];
  const [openSyllabusForm, setOpenSyllabusForm] = useState(false);
  const [syllabusList, setSyllabusList] = useState(initial_data);
  const [isEdit, setIsEdit] = useState([]);

  const handleClickOpen = () => {
    setIsEdit([]);
    setOpenSyllabusForm(true);
  };
  const handleClose = () => {
    setOpenSyllabusForm(false);
  };
  const handleFormSave = (data) => {
    const obj = {
      id: data.id,
      title: data.title,
      description: data.description,
    };
    setSyllabusList([...syllabusList, obj]);
    handleClose();
  };
  const handleDelete = (id) => {
    const newSyllabusList = syllabusList.filter((x) => x.id !== id);
    setSyllabusList(newSyllabusList);
  };
  const handleEdit = (id) => {
    setOpenSyllabusForm(true);
    const editedCard = syllabusList.filter((x) => x.id === id);
    var newObj = Object.assign({}, ...editedCard);
    setIsEdit(newObj);
    console.log("IsEdit: ", isEdit);
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid item>Syllabus</Grid>
            <Grid item>
              <Button
                color="primary"
                className={classes.button}
                endIcon={<AddCircle />}
                onClick={handleClickOpen}
              >
                Add Syllabus
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {openSyllabusForm ? (
            <NewSyllabusForm
              open={openSyllabusForm}
              handleClose={handleClose}
              onSave={handleFormSave}
              isEdit={isEdit}
            />
          ) : (
            <>
              {syllabusList.map((syllabus) => (
                <SyllabusCard
                  key={syllabus.id}
                  title={syllabus.title}
                  description={syllabus.description}
                  onDelete={() => handleDelete(syllabus.id)}
                  onEdit={() => handleEdit(syllabus.id)}
                />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddSyllabus;
