const users = [
    {
        userName: "test"
    },
	{
        userName: "test1"
    },
	{
        userName: "test2"
    }
]

class Users{
    getUser(username){
        return users.find(user => user.userName === username);
    }

    login(username, password){
        const user = window.users.getUser(username);
        if (!user || user.password !== password){
            return null;
        } else {
            return user;
        }
    }
}


(() => {
    window.users = new Users();
})()