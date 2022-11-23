module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    debug: true,
    connection: {
      host: env('PGHOST', 'containers-us-west-33.railway.app'),
      port: env.int('PGPORT', 5980),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'l2On9haFkxaJxndnCuPy'),
      ssl: env.bool(true),
    },
  },
  settings: {
    forceMigration: false
  },
});
