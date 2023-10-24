const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const crypto = require('crypto');
const path = require('path'); // path 모듈 추가
const clientDirectory = path.join(__dirname, '../client/public');
const sessionKey = crypto.randomBytes(32).toString('hex');

const app = express();
dotenv.config();

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('PlanetScale에 연결되었습니다!');

// URL-encoded 데이터 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(clientDirectory));

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true //브라우저에서 쿠키 및 인증 정보와 함께 요청을 보낼 때 서버에서 요청을 수락하는 데 필요한 설정
};

app.use(cors(corsOptions));

// session 설정
app.use(
  session({
    name : "session ID",
    secret: process.env.SESSION_SECRET,
    resave: false,            //세션을 변경되지 않아도 무조건 저장할지 정하는 값(false권장)
    saveUninitialized: false,  //세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장
    cookie:{
      maxAge : 24 * 60 * 60 * 1000,
      httpOnly : false, 
      secure : false,
    }
  })
  );
  
  // session 확인 미들웨어
  app.use("/", (req, res, next) => {
      console.log(req.session);
      next();
  })

  app.use('/user', require('./routes/user.js'));

  app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userTree'] });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(clientDirectory, 'index.html'));
});

app.get('/session', (req, res) => {
  res.status(200).json("session information");
});


app.post('/signup', (req, res) => {

  const { user_email, password, birth, nickname } = req.body;

  // 데이터베이스에 회원 정보 저장
  const sql = 'INSERT INTO member2 (user_email, pw, birth, nickname) VALUES (?, ?, ?, ?)';
  const values = [user_email, password, birth, nickname];
  
  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });
    } else {
      //res.status(200).json({ message: '회원가입이 성공적으로 완료되었습니다.' });
      console.log(results[0]);
      res.sendFile(path.join(clientDirectory, 'index.html'));
    }
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
