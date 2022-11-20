import { Button, TextInput } from '~/components';
import { useAppDispatch } from '~/hooks';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  useForm,
  VisibilityIcon,
  VisibilityOffIcon,
  yupResolver,
} from '~/modules';
import { setUser } from '~/redux/features';
import { saveToken } from '~/utils';
import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { api } from 'src/services/api';

import { FormBox, Right } from './styles';
import { formValidation } from './types';

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(formValidation),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<ILoginFormData> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password }
      );

      const { data, status } = response;

      if (status === 200) {
        api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        saveToken(data.token);
        dispatch(setUser(data));
      }
    } catch (err: any) {
      if (err.request) {
        alert(JSON.parse(err.request.response).message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Right>
        <FormBox component="main">
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ my: 3 }}>
                <Typography color="textPrimary" variant="h6">
                  Bem-vindo ao BET
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Inicie sessão e comece a apostar
                </Typography>
              </Box>

              <TextInput
                name="email"
                control={control}
                fullWidth
                type="email"
                label="E-mail"
                errors={errors.email?.message}
                sx={{ mt: 1, mb: 2 }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <Typography variant="body1">Senha</Typography>

                <Link
                  to="/auth/recover-password"
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                    variant="subtitle2"
                    color="primary"
                  >
                    Esqueceu a senha?
                  </Typography>
                </Link>
              </Box>
              <TextInput
                control={control}
                fullWidth
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
              <FormGroup sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lembrar de mim"
                />
              </FormGroup>
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  disabled={isLoading}
                  type="submit"
                  variant="contained"
                  text="Iniciar Sessão"
                  isLoading={isLoading}
                />
              </Box>
              <Typography
                color="textSecondary"
                variant="body2"
                textAlign="center"
              >
                Novo na nossa plataforma?{' '}
                <Link
                  to="/auth/register"
                  style={{
                    textDecoration: 'none',
                    color: '#3832A0',
                  }}
                >
                  Crie uma conta
                </Link>
              </Typography>
            </form>
          </Container>
        </FormBox>
      </Right>
    </Box>
  );
};

export default Login;
