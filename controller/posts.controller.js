const pool = require("../database/index")
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from books")            
            res.json({
                data: rows
                //message: "Get all books"
            })
        } catch (error) {
            console.log(error)
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from books where id = ?", [id])
            res.json({
                data: rows
            })           
            
        } catch (error) {
            console.log(error)
        }
    },

    create: async (req, res) => {
        try {
            const { title, author, publisher } = req.body
            const sql = "INSERT INTO books (title, author, publisher) values (?,?,?)"
            const [rows, fields] = await pool.query(sql, [title, author, publisher])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    update: async (req, res) => {
        try {
            const { title, author, publisher } = req.body;
            const { id } = req.params
            const sql = "UPDATE books SET title = ?, author = ?, publisher = ? WHERE id = ?";

            //const [rows, fields] = await pool.query("UPDATE books SET title = ?, author = ?, publisher = ? WHERE id = ?", [id])

            const [rows, fields] = await pool.query(sql, [title, author, publisher, id]);
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("DELETE from books WHERE id = ?", [id])
            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            
        }
    }

}

module.exports = postsController
//require("./controller/postcontroller")