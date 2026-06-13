let posts = JSON.parse(localStorage.getItem('posts')) || [];

function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function addPost() {
    const input = document.getElementById('postInput');

    if (input.value.trim() === '') {
        alert('Please write something!');
        return;
    }

    posts.unshift({
        text: input.value,
        likes: 0
    });

    input.value = '';
    savePosts();
    displayPosts();
}

function likePost(index) {
    posts[index].likes++;
    savePosts();
    displayPosts();
}

function deletePost(index) {
    posts.splice(index, 1);
    savePosts();
    displayPosts();
}

function displayPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';

    posts.forEach((post, index) => {
        feed.innerHTML += `
            <div class="post">
                <p>${post.text}</p>
                <div class="actions">
                    <button onclick="likePost(${index})">
                        ❤️ Like (${post.likes})
                    </button>
                    <button class="delete" onclick="deletePost(${index})">
                        Delete
                    </button>
                </div>
            </div>
        `;
    });
}

displayPosts();
