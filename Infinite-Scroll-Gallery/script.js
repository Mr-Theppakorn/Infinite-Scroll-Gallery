(() => {

    const apiKey = 'YwstnJv0PjGNWWnHfTtQ4IQMehMqpZglbisLM_r_jQE';
    const loadingElement = document.querySelector('.loading');
    let page = 1;

    function showLoading() {
        loadingElement.classList.add('visible');

    }
    function hideLoading() {
        loadingElement.classList.remove('visible');
    }

    async function showImages() {
        showLoading();
        const result = await fetch(`https:/api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`);
        const images = await result.json();

        const galleryElement = document.querySelector('.gallery');

        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            galleryElement.appendChild(imgElement);
        });
        hideLoading();
        page += 1;
    }

    function onScroll() {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            showImages();
        }
    }

    function run() {
        document.addEventListener('scroll', onScroll);
        showImages();
    }
    run();
})();