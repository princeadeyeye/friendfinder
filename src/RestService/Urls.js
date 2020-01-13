import { Datatypes} from '../data/Types'

const protocol = "http"
const hostname = "localhost"
const port = 5000

export const RestUrls = {
	[Datatypes.USERS] : `${protocol}://${hostname}:${port}/api/v1/users`
	[Datatypes.FRIENDS] : `${protocol}://${hostname}:${port}/api/v1/friends`
	[Datatypes.AUTH] : `${protocol}://${hostname}:${port}/api/v1/auth`
}