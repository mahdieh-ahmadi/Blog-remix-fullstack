const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

const seed = async () => {
    await Promise.all(
        getPosts().map(post => {
            return db.pOST.create({data: post})
        })
    )
}

const getPosts = () => {
    return [
        { title: 'test 1', body: 'body of post 1', description: 'description of post 1' },
        { title: 'test 2', body: 'body of post 2', description: 'description of post 2' },
        { title: 'test 3', body: 'body of post 3', description: 'description of post 3' },
    ]
}

seed()