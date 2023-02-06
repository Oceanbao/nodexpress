import { Writable } from 'stream'

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`chunk: ${chunk.toString()}`)
    callback()
  }
})
process.stdin.pipe(outStream)
