const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Handle /
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Greeting</title></head>');
        res.write('<body><p>Hello, World!</p></body>');
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</html>');
        return res.end();
    }

    // Handle /users
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul>')
        res.write('<li>User 1</li>')
        res.write('<li>User 2</li>')
        res.write('<li>User 3</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    // Hande /create-user
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(message);
        });
    }
};

exports.handler = requestHandler;
