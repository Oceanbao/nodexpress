import fs from 'fs'
import { NextFunction, Request, Response, Router } from 'express'
export const StreamBigController: Router = Router()

StreamBigController.get(
  '/create',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fileStream = fs.createWriteStream('./bigfile.txt')
      fileStream.on('error', (err) => res.write(err))

      for (let i = 0; i <= 1e6; i++) {
        const chunk =
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
        fileStream.write(chunk)
        res.write(`wrote: part-${i}\n`)
      }

      fileStream.end(() => res.end())
      next()

      // createBigFile('./big.file', res.write, res.end)
      // for (let i = 0; i <= 1e6; i++) {
      //   res.write(String(`chunk: ${i}\n`))
      // }
      // res.end('FIN')
      // res.writeHead(200, {
      //   'Content-Type': 'text/plain',
      //   'Transfer-Encoding': 'chunked'
      // })
      // let chunks = req.params.chunks || 10
      // if (chunks > 100) chunks = 100
      // const chunks = 1_000_000
      // let count = 1
      // while (count <= chunks) {
      //   res.write(
      //     JSON.stringify({
      //       type: 'stream',
      //       chunk: count++
      //     }) + '\n'
      //   )
      // }
      // res.end()
    } catch (e) {
      next(e)
    }
  }
)

StreamBigController.get(
  '/download',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filename = req.query.filename as string

      const fileStream = fs.createReadStream(filename)
      fileStream.on('error', (err) => {
        next(err)
      })
      fileStream.on('open', () => {
        res.attachment(filename)
        fileStream.pipe(res)
      })
    } catch (e) {
      next(e)
    }
  }
)
