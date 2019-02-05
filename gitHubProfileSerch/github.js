class  GitHub {
 constructor()
 {
     this.clint_id = '060b647038663ef740e5';
     this.clint_secret = '244d0b059ae8daf97051c3ac6274101c8342c7b9';
 }

 async getUser(user){
     const profileResponse = await fetch(`https://api.github.com/users/${user}?clint_id=${this.clint_id}&clint_secret=${this.clint_secret}`);

     const profile = await profileResponse.json();
     return{
         profile
     }
 }
}