import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormGroup, TextField, Button, Container, Typography, Grid } from '@mui/material';

interface InputCustomProps {
  name_vn: string;
  name_en: string;
  tax: string;
  address_vn: string;
  address_en: string;
  image: string;
}

interface FormProps {
  onSubmit: (data: InputCustomProps) => void;
}

const InputForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name_vn: '',
    name_en: '',
    tax: '',
    address_vn: '',
    address_en: '',
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
                label='name_vn'
                name='name_vn'
                value={formData.name_vn}
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
                label='name_en'
                name='name_en'
                value={formData.name_en}
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
                label='address_vn'
                name='address_vn'
                value={formData.address_vn}
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
                label='address_en'
                name='address_en'
                value={formData.address_en}
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
