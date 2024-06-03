import { v4 as uuidv } from 'uuid'

const randomString = uuidv()

function outputRandomString() {
	const currDate = new Date(Date.now())
	console.log(currDate.toUTCString() + ' ' + randomString)
	setTimeout(outputRandomString, 5000)
}

outputRandomString()
