// import { Readable } from 'stream'

// const inStream = new Readable({
//   read(size) {
//     this.push(String.fromCharCode(this.currentCharCode++))
//     if (this.currentCharCode > 90) {
//       this.push(null)
//     }
//   }
// })

// inStream.push('AAAAAAAAAAAA')
// inStream.currentCharCode = 65
// inStream.push('BBBBBBBBBBBB')

// inStream.push(null) // signal 'end'

// inStream.pipe(process.stdout)
