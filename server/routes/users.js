const express = require('express')
const router = express.Router()
const prisma = require('../lib/prisma')
const { excludePassword } = require('../utils/users')

router.get('/', async (req, res) => {
    try {
      const users = await prisma.user.findMany()
      for (const user in users){
        excludePassword(users[user], 'password')
      }
      res.json(users)
    } catch (error) {
      console.log(error)
    }
  })

  
module.exports = router;