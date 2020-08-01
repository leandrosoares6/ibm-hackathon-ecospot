module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'ecospot',
  define: {
      timestamps: true,
      underscored: true,
  }
} 