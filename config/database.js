module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    const { host, password, username, port } = JSON.parse(env("DB_CREDENTIALS", '{}'));
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          client: "mysql",
          settings: {
            host, 
            port,
            username, 
            password,
            database: 'test-db'
          },
        },
      },
    };
  }
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
