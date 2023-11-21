const img = document.getElementById('img-avatar')
const name_user = document.querySelector('.name');
const user = document.querySelector('.sub-name');
const posts = document.querySelector('#posts')
const following = document.querySelector('#following');
const followers = document.querySelector('#followers')
const bio = document.querySelector('.text')
const user_x = document.getElementById('user-x')
const user_github = document.getElementById('user-github')

const getData = () => {
    const username = document.getElementById('search-input').value;
    const api = `https://api.github.com/users/${username}`;

    fetch(api)
        .then(request => request.json())
        .then(data => {
            
            img.style.backgroundImage = `url(${data.avatar_url})`;
            name_user.textContent = data.name;
            user.textContent = `@${data.login}`;
            posts.textContent = data.public_repos
            following.textContent = data.following;
            followers.textContent = data.followers
            bio.textContent = data.bio;
            user_x.href = `https://www.twitter.com/${data.twitter_username}`;
            user_github.href = data.html_url;
            
    
            
        })
        .catch(erro => console.log(erro)) 
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getData);

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        getData();
    }

});

  
  
