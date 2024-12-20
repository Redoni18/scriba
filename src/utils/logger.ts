import pino from 'pino'

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: pino.transport({
    targets: [
      {
        target: 'pino-pretty',
        options: {
          callOriginal: true,
          destination: 1,
          filterCallers: true
        }
      }
    ]
  })
})

export default logger

