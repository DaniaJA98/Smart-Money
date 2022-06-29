const { query } = require('express');
const pool = require("../database/db")

const getAllOperations = async (req, res, next) => {
    try {
        const allOperations = await pool.query("SELECT * FROM operations")
        res.json(allOperations.rows)
    } catch (error) {
        next(error)
    }
}

const getOperation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM operations WHERE id = $1', [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Operation not found"
            });
        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const createOperation = async (req, res, next) => {
    try {
        const { concept, amount, date, type, categories } = req.body;
        const result = await pool.query("INSERT INTO operations (concept, amount, date, type, categories) VALUES ($1,$2,$3,$4,$5) RETURNING *", [
            concept,
            amount,
            date,
            type,
            categories
        ]);
        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const updateOperation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { concept, amount, date, categories } = req.body;
        const result = await pool.query("UPDATE operations SET concept = $1, amount = $2, date = $3, categories = $4 WHERE id = $5 RETURNING *", [
            concept,
            amount,
            date,
            categories,
            id
        ])
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const deleteOperation = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query("DELETE FROM operations WHERE id = $1", [id])
        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Operation not found"
            });
        return res.json({message:"Eliminado con éxito"})
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllOperations, getOperation, createOperation, updateOperation, deleteOperation }