document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("news-container");
    const params = new URLSearchParams(window.location.search);
    const newsId = params.get("id");

    try {
        const res = await fetch("data/news.json");
        const news = await res.json();

        if (newsId) {
            // Показати повну новину
            const article = news.find((item) => item.id === newsId);
            if (article) {
                container.innerHTML = `
                    <article>
                        <h2>${article.title}</h2>
                        <time datetime="${article.date}">${formatDate(article.date)}</time>
                        <p>${article.content}</p>
                        <a class="more" href="news.html">&larr; Назад до новин</a>
                    </article>
                `;
            } else {
                container.innerHTML = "<p>Новину не знайдено.</p>";
            }
        } else {
            // Показати список новин
            container.innerHTML = news
                .map(
                    (item) => `
                <article>
                    <h2>${item.title}</h2>
                    <time datetime="${item.date}">${formatDate(item.date)}</time>
                    <p>${item.excerpt}</p>
                    <a class="more" href="news.html?id=${item.id}">&rarr; Дізнатись більше...</a>
                </article>
            `
                )
                .join("");
        }
    } catch (err) {
        container.innerHTML = "<p>Не вдалося завантажити новини 😢</p>";
        console.error(err);
    }
});

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("uk-UA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
