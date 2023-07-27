export const args = [
  [`What's the name of your worker?`, 'worker'],
  [`What's the ID of your Cloudflare account?`, 'accountId'],
]

export async function setup(args) {
  const wranglerFile = `name = "${args.name}"
account_id = "${args.accountId}"
compatibility_date = "2023-03-24"
main = "./mod.js"

[build]
command = "deno task build"`

  await Deno.writeTextFile('./wrangler.toml', wranglerFile)
}

export const files = [
  '/api/meals.ts',
  '/mod.ts',
]
