const index = process.argv.indexOf('--env');
const environment = (index !== -1 && process.argv[index + 1]) || 'production';

module.exports = {
    apps: [
        {
            name: 'Radetskaya: ' + environment + ' (' + getPortByEnvironment(environment) + ')',
            exec_mode: 'cluster',
            script: 'node_modules/next/dist/bin/next',
            instances: 1,
            args: getArgsByEnvironment(environment),
            env_production: {
                NODE_ENV: 'production',
                max_memory_restart: '250M',
            },
            env_staging: {
                NODE_ENV: 'staging',
            },
            env_testing: {
                NODE_ENV: 'testing',
            },
        },
    ],
};

function getPortByEnvironment(env) {
    switch (env) {
        case 'testing':
            return '42521';

        case 'staging':
            return '42511';

        case 'production':
        default:
            return '42510';
    }
}

function getArgsByEnvironment(env) {
    const port = getPortByEnvironment(env);

    switch (env) {
        case 'testing':
            return 'start -p ' + port;

        case 'staging':
            return 'start -p ' + port;

        case 'production':
        default:
            return 'start -p ' + port;
    }
}
