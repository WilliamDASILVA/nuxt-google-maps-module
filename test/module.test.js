import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';

const port = 4000 || process.env.PORT;

let nuxt;
let config;

// Create a NuxtJS instance before all the tests
test.before(async (t) => {
  try {
    // eslint-disable-next-line
    config = require(resolve(__dirname, './fixture/nuxt.config.js'));
  } catch (e) {
    t.fail(e);
  }

  // config.modules.unshift(() => {
  //   // Add test specific test only hooks on nuxt life cycle
  // });

  nuxt = new Nuxt(config);
  await new Builder(nuxt).build();
  await nuxt.listen(port);
});

test.after(async () => {
  nuxt.close();
});

test('Render', async (t) => {
  t.pass();
});
