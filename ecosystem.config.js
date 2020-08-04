module.exports = {
  apps : [{
    script: 'server/index.js',
    watch: true,
    name: "photos"
     env: {
            "PORT": 3000,
            "NODE_ENV": "production"
        }
  },
  ],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
