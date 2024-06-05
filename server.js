import express from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

// const users = []

app.post('/usuarios', async (req, res) => {

     await prisma.user.create( {
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }

    })
 
    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {
    
    let users =[]

    if(req.query){
        users = await.prisma.user.fonMany({
            where: {
                name:req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })

    }else{
      
        users = await prisma.user.findMany()

    }
   
   
   res.status(200).json(users)

})


app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update( {
        where:{
            id: req.params.id
        },
       data: {
           email: req.body.email,
           name: req.body.name,
           age: req.body.age

       }

   })



   res.status(201).json(req.body)
})


app.delete('/ususrios/:id', async (req, res)=>{
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })
     res.status(200).json({ message: ' Usuário deletado com Sucesso!'})

})


app.listen(3000)


/* 
1) tipo de rota / Método HTTP
2) Endereço

  misaias 392762/PamiBella
  Criar nossa API de Usuarios


  -Criar um usuario
  -Listar todos os usuarios
  -Editar um usuarios
  - Deletar um usuarios


*/
