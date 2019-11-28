## 公网ip, 可能会变, 最好定义成全局变量, 访问不了联系我

```
http://49.70.129.97:23957
```

___
## 发送短信验证码
* POST /api/code/phone/{phone}
* 参数
    - 手机 `phone`

```
curl -v -d '' 'http://127.0.0.1:23957/api/code/phone/17777777777'
```


___
## 注册
* POST /api/register
* 参数
    - 手机 `phone`
    - 验证码 `verification_code`
    - 密码 `password`
* 验证码现在都是 `aaaa`

```
curl -v -d 'phone=17777777777&verification_code=aaaa&password=17777777777' 'http://127.0.0.1:23957/api/register'
curl -v -d 'phone=27777777777&verification_code=bbbb&password=27777777777' 'http://127.0.0.1:23957/api/register'
```


___
## 登录
* POST /api/signin
* 参数
    - 手机 `phone`
    - 密码 `password`

```
curl -v -d 'phone=17777777777&password=17777777777' 'http://127.0.0.1:23957/api/signin'
curl -v -d '{"phone":"17777777777","password":"17777777777"}' 'http://127.0.0.1:23957/api/signin'
curl -v -d '' 'http://127.0.0.1:23957/api/signin?phone=17777777777&password=17777777777'

curl -v -d 'user_name=test_user' 'http://127.0.0.1:23957/api/signin?phone=17777777777&password=17777777777'
curl -v -d 'phone=17777777777&user_name=test_user' 'http://127.0.0.1:23957/api/signin?phone=27777777777&password=17777777777'
```


___
## 新建项目
* POST /api/project
* 参数
    - 手机 `phone`
    - 密码 `password`


```
curl  -b 'COOKIE_NAME_project_manage=001570526730451f1b0e7ca76a1496d991459acc699572d-1570613253-1235a07ccf34eb20ba6bdeab1af2f3b3ba7cad90' -d 'data={"project_name":"南京溧水万达智能化工程","project_address":"南京溧水万达广场","project_longitude":39.98993456}' -v 'http://127.0.0.1:8080/api/project'
```
