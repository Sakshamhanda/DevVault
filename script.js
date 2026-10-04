const userID = document.getElementById("username")
const bio = document.getElementById("bio")
const joiningDate = document.getElementById ("date")
const form = document.getElementById("form");
const input = document.getElementById("form-input");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repo = document.getElementById("repo");
const mailid = document.getElementById("mailid");
const avatar = document.getElementById("avatar");



async function fetchData(username){
    try {
        const url = `https://api.github.com/users/${username}`
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        userID.textContent = result.login;
        if(result.bio == null){
            bio.textContent = "This profile has no bio"
        }
        else{
            bio.textContent = result.bio;
        }
        console.log(result.followers);
        // avatar.avatar = result.avatar_url;
        followers.textContent = result.followers;
        following.textContent = result.following;
        repo.textContent = result.public_repos;
        address.textContent = result.location;
        avatar.src = result.avatar_url;

    } catch (error) {
        console.log(error);
    }
}



form.addEventListener("submit" , function(event){
    event.preventDefault();
    const username = input.value;

    console.log(username);
    fetchData(username);
})




