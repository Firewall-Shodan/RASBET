export const generateVerificationCode = () => {
  let pin: number;

  do {
    pin = Math.floor(Math.random() * 999999) + 100000;
  } while (pin > 999999);

  return pin;
};
