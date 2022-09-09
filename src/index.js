const app = require('./app');
const dotenv = require('dotenv');
const userRoute = require('./routes');
dotenv.config();

app.use('/', userRoute);
app.listen(3000, () => console.log('Server running......'));
