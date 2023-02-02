module.exports = {
    preset:"ts-jest",
    testEnviroment:"node", 
    moduleDirectories:["node_modules", "src"],
    transform: {
        ".+\\.ts$": "ts-jest",
    },
    testMatch: ["<rootDir>/src/tests/*.(test|spec).ts"],    
};