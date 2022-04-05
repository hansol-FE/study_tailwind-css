const express = require('express'); // express라이브러리 꺼내오기
const app = express(); // express를 담을 객체 만들기

/* 
  listen(서버를 띄울 포트번호, 띄운 후 실행할 코드)
*/
app.listen(8080, function(){ // 8080포트로 서버 열렸을때 실행할 코드 짜기
  console.log('listening on 8080');
});



/*  
  누군가가 /hello 으로 방문을 하면 
  인사해주는 화면을 띄워주자.
*/

app.get('/hello', function(request,response){
  response.send('반갑습니다.')

})