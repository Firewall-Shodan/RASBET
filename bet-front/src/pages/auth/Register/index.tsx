import { TextInput } from '~/components';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  VisibilityOffIcon,
  VisibilityIcon,
  useForm,
  yupResolver,
  Card,
  CardContent,
  Button,
  useNavigate,
} from '~/modules';
import { useRegisterMutation } from '~/redux/services';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { formValidation } from './types';

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: yupResolver(formValidation),
  });

  const [register, { isSuccess, isLoading, isError, error }] =
    useRegisterMutation<any>();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<IRegisterFormData> = ({
    fullName,
    email,
    password,
    nif,
  }) =>
    register({
      name: fullName,
      email,
      password,
      nif,
      birthday: '1999-01-01',
    });

  useEffect(() => {
    if (isSuccess) {
      alert('Conta criada com sucesso');
      navigate('/auth/login');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      alert(error?.data.message);
    }
  }, [isError]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Card>
        <CardContent>
          <Box
            sx={{
              maxWidth: 500,
              margin: 'auto',
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextInput
                    name="fullName"
                    control={control}
                    fullWidth
                    tabIndex={0}
                    type="text"
                    label="Nome Completo"
                    errors={errors.fullName?.message}
                    sx={{ mt: 1, mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextInput
                    name="nif"
                    control={control}
                    fullWidth
                    type="text"
                    label="NIF"
                    errors={errors.nif?.message}
                    sx={{ mt: 1, mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextInput
                    name="email"
                    control={control}
                    fullWidth
                    type="email"
                    label="E-mail"
                    errors={errors.email?.message}
                    sx={{ mt: 1, mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextInput
                    control={control}
                    fullWidth
                    label="Senha"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    errors={errors.password?.message}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon fontSize="small" />
                          ) : (
                            <VisibilityIcon fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ mt: 1 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextInput
                    control={control}
                    fullWidth
                    label="Confirmar Senha"
                    name="c_password"
                    type={showPassword ? 'text' : 'password'}
                    errors={errors.c_password?.message}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon fontSize="small" />
                          ) : (
                            <VisibilityIcon fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ mt: 1 }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isLoading}
              >
                Criar Conta
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
