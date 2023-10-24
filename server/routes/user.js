const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// 데이터베이스 연결
const connection = mysql.createConnection(process.env.DATABASE_URL);

// 로그인 요청
router.post('/login', async (req, res, next) => {
    const { user_email, pw } = req.body;
    console.log(req.body);

    const sql = 'SELECT * FROM member2 WHERE user_email = ? AND pw = ?';

    if (!user_email || !pw) {
        return res.status(400).json({ error: '이메일과 비밀번호가 필요함' });
    }

    try {
    const [results] = await connection.promise().query(sql, [user_email, pw]);
    if (results.length === 0) {
        res.status(404).send("요청하신 데이터를 찾을 수 없습니다.");
    } else {
        res.status(200).json({ message: '로그인 성공' });
    }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: '데이터베이스 오류' });
    }
});

module.exports = router;
