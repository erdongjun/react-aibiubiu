import { get } from './get.js'

export function testFetch() {
    return get('/api/Home/User/index')
}
