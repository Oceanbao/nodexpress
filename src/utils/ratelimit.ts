// import { NextFunction, Request, Response } from 'express'
// import { createClient } from 'redis'

// const client = createClient()

// client.on('error', (err) => console.log('Redis Client Error', err))

// client.connect().then(() => console.log('Redis connection established.'))

// export const ratelimiter = (
//   prefix: string,
//   requestLimit: number,
//   ttl: number
// ) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const key = `${prefix}${req.ip}`
//     const count = await client.incr(key)

//     if (count === 1) {
//       client.expire(key, ttl)
//     }

//     if (count > requestLimit) {
//       return res.status(429).send('Too many requests')
//     }

//     next()
//   }
// }
