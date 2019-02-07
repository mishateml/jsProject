class  GitHub {
 constructor()
 {
     this.clint_id = '36ecb0343be557ac4da0';
     this.clint_secret = '4042ad5f3aefc698d123a1188a0ceeeeb506fc89';
     this.repos_count = 5;
     this.repos_sort = 'created:asc';
 }
 async getUser(user){
     // user profile data

     const profileResponse = await fetch(`https://api.github.com/users/${user}?clint_id=${this.clint_id}&clint_secret=${this.clint_secret}`);
    // uesr  repo Data
     const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clint_id}&client_secret=${this.clint_secret}`);
     const profile = await profileResponse.json();
      const repos = await repoResponse.json();
     return{
         profile,
         repos
     }
 }


}