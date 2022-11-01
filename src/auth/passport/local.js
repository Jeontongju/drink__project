'use strict';
const passport = require('passport');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
// social login이 아닌 단순 로컬 로그인 방식을 사용.

module.exports = (app) => {

    app.use(passport.initialize());
    app.use(passport.session());

    /*
        deserializeUser :
        매 요청시 실행되는 메서드
        passport.session 미들웨어가 이 메서드를 호출, serializeUser의 done 두번 째 인수로 넣었던 데이터가 deserializeUser의 매개변수
    */

    passport.serializeUser((user,done)=> {
        done(null,user.id);
    });

    passport.deserializeUser(function(user, done) {
    //findById(id, function (err, user) {
    console.log('deserialize');   
    done(null, user);
    //});
});
    passport.use('local', new LocalStrategy(
        // passport.use
        // 간단하게, 입력받은 값들을 가져와서 옳고 그름을 판단해주는 곳. 
        {
            usernameField : 'email',
            passwordField : 'password',
        },
        async(username, password, done) => {
            console.log(`유져가 입력한 id, pw >> ${username}, ${password}`);

            let user = await User.findOne({email : username});
            console.log(user);
            let hashedPW = user.password;
            let result = await bcrypt.compare(password, hashedPW);
            console.log(result);
            if(user){ // 만약에 유져가 있다면...!
                 if(result){
                    // 비번 hashed, plain비교!
                    console.log('로그인 성공!');
                    done(null, user);
                 }else{
                    console.log(`비번 잘못됨`);
                    done(null, false, {message: '비밀번호가 일치하지 않습니다.'})
                 }
            }else{
                console.log(`존재하지 않는 회원.`);
                done(null, false, {message: '가입되지 않은 회원입니다.'});
            }
        }
    ))
    return passport;
}