module.exports = server => {
    const port = Number(process.env.PORT) || 3000;

    server.listen(port, error => {
        if (error) {
            throw error;
        }

        console.log(`Ready on http://localhost:${port}`);
    });
};
