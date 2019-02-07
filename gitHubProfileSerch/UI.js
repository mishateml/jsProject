class UI {
    constructor(){
        this.profile =document.getElementById('profile');
    }

    shoeProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2" alt="avatar">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary m-1">Public Repos:${user.public_repos}</span>
                <span class="badge badge-primary m-1">Public Gists:${user.public_gists}</span>
                    <span class="badge badge-primary m-1">Followers:${user.followers}</span>
                    <span class="badge badge-primary m-1">Following:${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company:${user.company}</li>
                    <li class="list-group-item">Website:${user.blog}</li>
                    <li class="list-group-item">Location:${user.location}</li>
                    <li class="list-group-item">Member Since:${user.created_at}</li>
                    </ul>
                    </div>
                    </div>
                    </div>
                    <h3 class="page-heading mb-3">Last Repos</h3>
                    <div id="repos"></div>
                            
                    `;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(msg, claasName){
        // clear alert if exist
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // Add class
        div.className = claasName;
        // add taext
        div.appendChild(document.createTextNode(msg));
        // Get parent
        const serchContainer = document.querySelector('.search--container');
        // Get Sherch Box 
        const serchBox = document.querySelector('.search');
        // Insert before
        serchContainer.insertBefore(div,serchBox);
        // clear alert after 3 sec
        setTimeout(()=>{
            this.clearAlert();
        },3000);

    }

    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

    showRepos(usereRepos){
     let output = '';

        usereRepos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary m-1">Stars:${repo.stargazers_count}</span>
                        <span class="badge badge-primary m-1">Watchers:${repo.watchers_count}</span>
                        <span class="badge badge-primary m-1">Forks:${repo.forks_count}</span>
                    </div>
                </div>
            </div>
                `
        });

        // Otput repo to UI
        document.getElementById('repos').innerHTML = output;

    }
}