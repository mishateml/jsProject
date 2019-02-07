// init GitHub and UI objects
const git = new GitHub();
    const  ui = new UI();

// Search user
const serchUser = document.getElementById('searchUser');
// get input
serchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if (userText !== ''){
        // Make http call
        git.getUser(userText)
            .then(data =>{
                if (data.profile.message === 'Not Found'){
                 // Show Alert
                    ui.showAlert('User NOT exist', 'alert alert-danger');            
                } else {
                 // Show Profile
                 ui.shoeProfile(data.profile);
                 ui.showRepos(data.repos);
                }

            })
    } else {
        // Clear input
        ui.clearProfile();
    }
});