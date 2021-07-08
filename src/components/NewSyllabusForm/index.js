import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const NewSyllabusForm = (props) => {
  console.log("props: ", props);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSave = (e) => {
    props.onSave({
      id: uuidv4(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    });
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Syllabus Form</DialogTitle>
        <form action="#" onSubmit={handleSave}>
          <DialogContent>
            <DialogContentText>
              To add Syllabus to this course, please enter Syllabus Title and
              its Description here.
            </DialogContentText>
            <TextField
              margin="dense"
              id="title"
              label="Syllabus Title"
              fullWidth
              // value={props.editForm.title}
              helperText=""
              // onChange={handleTitleChange}
              inputRef={titleRef}
            />
            <TextField
              margin="dense"
              id="Description"
              label="Syllabus Description"
              // value={props.editForm.description}
              fullWidth
              helperText=""
              // onChange={handleDescriptionChange}
              inputRef={descriptionRef}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Save The Syllabus
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
