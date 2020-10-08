import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AlertDialog = (props) =>{
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Você tem certeza que deseja excluir?
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Cancelar
            </Button>
                    <Button onClick={() =>{props.delete(props.id)}} color="primary" autoFocus>
                        Excluir
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;