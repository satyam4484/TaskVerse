type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
    log(level: LogLevel, message: string, ...optionalParams: any[]) {
        const formattedMessage = `[${level.toUpperCase()}] ${message}`;

        switch (level) {
            case 'info':
                console.info(formattedMessage, ...optionalParams);
                break;
            case 'warn':
                console.warn(formattedMessage, ...optionalParams);
                break;
            case 'error':
                console.error(formattedMessage, ...optionalParams);
                break;
            case 'debug':
                console.debug(formattedMessage, ...optionalParams);
                break;
            default:
                console.log(formattedMessage, ...optionalParams);
        }
    }

    info(message: string, ...optionalParams: any[]) {
        this.log('info', message, ...optionalParams);
    }

    warn(message: string, ...optionalParams: any[]) {
        this.log('warn', message, ...optionalParams);
    }

    error(message: string, ...optionalParams: any[]) {
        this.log('error', message, ...optionalParams);
    }

    debug(message: string, ...optionalParams: any[]) {
        this.log('debug', message, ...optionalParams);
    }
}

export default new Logger();