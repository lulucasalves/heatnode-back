import { serverHttp } from './app'

const port = 5000

serverHttp.listen(port, () => console.log(`server is running on ${port}`))
