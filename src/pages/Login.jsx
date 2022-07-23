import React from 'react';
import { Container, Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <Container
      maxWidth='sm'>
      <Box
        minHeight='95vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <LoginForm />
      </Box>
    </Container>
  )
}