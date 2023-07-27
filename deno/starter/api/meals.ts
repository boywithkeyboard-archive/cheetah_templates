import { Collection } from 'cheetah'

export const meals = new Collection()
  .get('/burger', () => '🍔')
  .get('/pizza', () => '🍕')
