import { generateRandomText } from '../helpers';

export const stringValueService = {
  genStringValue,
};

function genStringValue() {
  return generateRandomText().split('');
}