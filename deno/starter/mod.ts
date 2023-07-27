import cheetah from 'cheetah'
import { z } from 'zod'
import { meals } from './api/meals.ts'

const app = new cheetah()

app.use('/meals', meals)
// /meals/burger 🍔
// /meals/pizza 🍕

app.get('/cookie', () => '🍪')
// /cookie 🍪

app.get('/pet', {
  query: z.object({
    name: z.union([
      z.literal('cat'),
      z.literal('parrot'),
      z.literal('fish'),
    ]),
  }),
}, (c) => {
  return c.req.query.name === 'cat'
    ? '🐈'
    : c.req.query.name === 'parrot'
    ? '🦜'
    : '🐠'

  // /pet?name=cat 🐈
  // /pet?name=parrot 🦜
  // /pet?name=fish 🐠
})

app.serve()
