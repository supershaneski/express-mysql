const express = require('express');
const connection = require('../db/connection');
const query = require('../db/query');
const router = express.Router();
const dbConfig = require('../db/config');

router.get('/', async (req, res) => {
    const order = req.query.order || "";
    const ORDERBY = (order.length > 0)?' ORDER BY ' + order:'';
    const conn = await connection(dbConfig).catch(e => {});
    const results = await query(conn, `SELECT * FROM todo` + ORDERBY);
    res.send(results);
});

router.get('/:id', async (req, res) => {
    var { id } = req.params;
    if(isNaN(id)) id = 0;
    const conn = await connection(dbConfig).catch(e => {});
    const results = await query(conn, `SELECT * FROM todo WHERE id = ${id}`);
    res.send(results);
});

router.post('/add', async (req, res) => {
    const { name, date, state } = req.body;
    const conn = await connection(dbConfig).catch(e => {});
    const sql = `INSERT INTO todo (name, date, state) VALUES ('${name}', '${date}', ${state})`;
    const follow = await query(conn, sql);
    res.send(follow);
});

router.put('/:id', async (req, res) => {
    var { id } = req.params;
    if(isNaN(id)) id = 0;
    const { name, date, state } = req.body;
    let sql = `
    UPDATE todo SET 
    name = '${name}',
    date = '${date}',
    state = ${state} WHERE id = ${id}`;
    const conn = await connection(dbConfig).catch(e => {});
    const settings = await query(conn, sql);
    res.send(settings);
});

router.delete('/:id', async (req, res) => {
    var { id } = req.params;
    if(isNaN(id)) id = 0;
    const conn = await connection(dbConfig).catch(e => {});
    const settings = await query(conn, `DELETE FROM todo WHERE id = ?`, [id])
    res.send(settings);
});

module.exports = router;
