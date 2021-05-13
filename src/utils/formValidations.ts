import { TFunction } from 'react-i18next';

import { emailRegex } from './inputValidations';

export const requiredValidation = (translate: TFunction) => ({
  required: translate('common:requiredField')
});

export const emailValidation = (translate: TFunction) => ({
  ...requiredValidation(translate),
  pattern: {
    value: emailRegex,
    message: translate('common:emailError')
  }
});

export const passwordValidation = (translate: TFunction) => ({
  ...requiredValidation(translate),
  minLength: {
    value: 6,
    message: translate('Signup:passwordLengthError')
  }
});

export const passwordConfirmationValidation = (translate: TFunction, password: string) => ({
  ...requiredValidation(translate),
  validate: {
    equalToPassword: (confirmation: string) =>
      confirmation === password || translate('Signup:passwordConfirmationError')
  }
});
