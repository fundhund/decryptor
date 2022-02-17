import * as base from './modules/base'
import * as caesar from './modules/caesar'
import * as counter from './modules/counter'
import * as vigenere from './modules/vigenere'

export default {
    ...base,
    ...caesar,
    ...counter,
    ...vigenere,
}
