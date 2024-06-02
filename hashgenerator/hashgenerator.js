import { v4 as uuidv } from 'uuid'

function outputRandomString() {
	console.log(`Random string :${uuidv()}`)
	setTimeout(outputRandomString, 5000)
}

outputRandomString()
