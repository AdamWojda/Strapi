module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    debug: true,
    connection: {
      host: env('PGHOST', process.env.PGHOST),
      port: env.int('PGPORT', process.env.PGPORT),
      database: env('PGDATABASE', process.env.PGDATABASE),
      user: env('PGUSER', process.env.PGUSER),
      password: env('PGPASSWORD', process.env.PGPASSWORD),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
  },
});
