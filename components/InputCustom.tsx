import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormGroup, TextField, Button, Container, Typography, Grid } from '@mui/material';

interface InputCustomProps {
  name: string;
  tax: string;
  address: string;
  image: string;
}

interface FormProps {
  onSubmit: (data: InputCustomProps) => void;
}

const InputForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    tax: '',
    address: '',
    image: '',
  });

  // Hàm xử lý thay đổi dữ liệu
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Hàm xử lý gửi form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h4'
        gutterBottom
      >
        INPUT
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <TextField
                label='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                label='Tax'
                name='tax'
                value={formData.tax}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                label='address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                label='Image'
                name='image'
                value={formData.image}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid
              item
              xs={12}
            ></Grid>
            <Grid
              item
              xs={12}
            >
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormGroup>
      </form>
    </Container>
  );
};

export default InputForm;
