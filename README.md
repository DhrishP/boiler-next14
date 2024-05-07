# NextJS App Directory Templates

A collection of templates for nextjs app directory + shadcn for ui + clerk/nextauth + drizzle/(prisma+kysely) using postgresSQL(sorry mongo devs)

## Usage

For downloading templates you need to install the npm package [degit](https://www.npmjs.com/package/degit).

```bash
npm install -g degit
```

- **NSDPGC == nextjs14-shadcn-drizzle-postgresSQL-Clerk**

- **NSDPGCNA == nextjs14-shadcn-drizzle-postgresSQL-NextAuth(v5)**

- **NSPKJPGC == nextjs14-shadcn-(prisma+kyselyORM)-postgresSQL-Clerk**

- **NSPKJPGNA == nextjs14-shadcn-(prisma+kyselyORM)-postgresSQL-NextAuth(v5)**

### Why Kysely? - it fixes the issues of prisma of multiple queries creation for join operations (with the benefits of prisma schema)
