const fetch = require('node-fetch2');

it ("should test validity of token" , async ()=>{
    let token = "";

    const options = {
        method: 'POST', 
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userName: "josemachuca8@gmail.com",
            password: "P@ssword1234"
        })
    }
    const response = await fetch ('https://dev.stedi.me/login', options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(200);
    expect(token.length).toBe(36)
})

it ("should detect bad password" , async ()=>{
    let token = "";

    const options = {
        method: 'POST', 
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userName: "josemachuca8@gmail.com",
            password: "badpassword"
        })
    }
    const response = await fetch ('https://dev.stedi.me/login', options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(401);
    expect(token.length).toBe(0)
})

it ("should bad username" , async ()=>{
    let token = "";

    const options = {
        method: 'POST', 
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userName: "baduser@gmail.com",
            password: "P@ssword1234"
        })
    }
    const response = await fetch ('https://dev.stedi.me/login', options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(500);
    expect(token.length).toBe(60)
})
