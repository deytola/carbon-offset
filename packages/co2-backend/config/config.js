/**
 * @description Config info for sequelize cli
 * @link https://sequelize.org/master/manual/migrations.html
 */

module.exports = {
  development: {
    username: "sysuser",
    password: "password",
    database: "carbon-offset",
    host: "localhost",
    port: "5432",
    seederStorage: 'sequelize',
    dialect: 'postgres',
  }
};
