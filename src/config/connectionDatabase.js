module.exports = {
    getUrl() {
        const user = process.env.DB_USER;
        const pass = process.env.DB_PASS;
        const dbName = process.env.DB_NAME || "fliten";
        const dbUrl = process.env.DB_HOST || "localhost";

        // mongodb+srv://challenger_bossa:<password>@cluster0-olz1e.mongodb.net/test?retryWrites=true&w=majority

        return user && pass
            ? `mongodb://${user}:${pass}@${dbUrl}/${dbName}`
            : `mongodb+srv://challenger_bossa:anzBUuRBhnN9uO11@cluster0-olz1e.mongodb.net/test?retryWrites=true&w=majority`;

        // return "mongodb://localhost:27017/continuum-box";
    }
};
