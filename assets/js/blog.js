
    // const blogsContainer = document.getElementById('blogs');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close');
    const readAloudButton = document.getElementById('read-aloud');

    // Fetch blog posts from Blogger API
    async function fetchBlogs() {
        const response = await fetch('https://www.googleapis.com/blogger/v3/blogs/3642558814134041603/posts?key=AIzaSyDYPsGTQS5KnpWWzJLpU2ETxs4KN9UPYeI');
        const data = await response.json();
        displayBlogs(data.items);
    }

    // Display blogs in the container
    function displayBlogs(blogs) {
        const blogsContainer = document.getElementById('blogs');

        blogs.forEach(blog => {
            const firstImage = blog.content.match(/<img[^>]+src="([^">]+)"/);
            const imageUrl = firstImage ? firstImage[1] : 'default-image.jpg'; // Fallback image

            const blogDiv = document.createElement('div');
            blogDiv.className = 'swiper-slide';
            blogDiv.innerHTML = `
                <a href="#" class="service" data-title="${blog.title}" data-image="${imageUrl}">
                    <div class="image">
                        <img src="${imageUrl}" alt="${blog.title}">
                    </div>
                    <div class="content">
                        <h4 class="title">${blog.title}</h4>
                        <p>${blog.content.substring(0, 100)}...</p>
                    </div>
                </a>
            `;
            blogDiv.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                openModal(blog.title, imageUrl, blog.content);
            });
            blogsContainer.appendChild(blogDiv);
        });
        console.log(blogsContainer)
    }

    // Open modal with blog details
    function openModal(title, image, content) {
        modalTitle.textContent = title;
        modalImage.src = image;
        modalContent.innerHTML = content;
        modal.style.display = 'flex';
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Read aloud functionality
    readAloudButton.addEventListener('click', () => {
        const utterance = new SpeechSynthesisUtterance(modalContent.textContent);
        window.speechSynthesis.speak(utterance);
    });

    // Fetch blogs on page load
    // fetchBlogs();