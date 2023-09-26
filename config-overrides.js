const path = require('path');

module.exports = function override(config, env) {
  // Altera as configurações do Webpack para permitir importações relativas fora de 'src/'
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
  );

  // Adiciona um alias para o diretório raiz do projeto
  config.resolve.alias = {
    ...config.resolve.alias,
    '@root': path.resolve(__dirname, './'),
  };

  return config;
};
