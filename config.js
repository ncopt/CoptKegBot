var config = {};

// Name of the application/skill, which does not need to match the skills 'Invocation Name',
// This is what the application calls itself in the voice prompts. The space helps the speech.
config.applicationName = 'copt keg bot';

/***************************** Skills CONFIGURATION ********************************************/
// AWS ASK applicationId, resembles 'amzn1.ask.skill.[your-unique-value-here]'
config.applicationId = 'amzn1.ask.skill.40854450-9e50-466b-93a4-4d07aac33373';

/***************************** KegBot CONFIGURATION ********************************************/
// KB server protocol (http/https)
config.KB_protocol = 'http';

// KB server FQDN/IP
config.KB_host = 'coptkegbot.com';

// KB server port. Can be commented out if using standard ports.
config.KB_port = '80';

// KB server api_key if required
// comment out if not needed
// config.KB_apikey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// Timeout to wait for a response from KegBot (in milliseconds)
config.timeout = 500;
/***************************** KegBot CONFIGURATION END ****************************************/

// KB server URL with credentials - i.e. 'http(s)://KB_SERVER_IP:KB_SERVER_PORT' (constructed from above variables)
if ( config.KB_port ) {
    config.KB_server = config.KB_protocol + '://' + config.KB_host + ':' + config.KB_port;
} else {
    config.KB_server = config.KB_protocol + '://' + config.KB_host;
}

// Exports
module.exports = config;