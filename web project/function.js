<script>
    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("categorySelect");
    const categories = document.querySelectorAll(".category");

    function filterMovies() {
      const search = searchInput.value.toLowerCase();
      const selectedCategory = categorySelect.value;

      categories.forEach(cat => {
        const catName = cat.getAttribute("data-category");
        const matchesCategory=selectedCategory="all"||selectedCategory=catName;

        let hasVisibleMovie = false;
        const movies = cat.querySelectorAll(".movie");

        movies.forEach(movie = {
          const title = movie.querySelector("h3").textContent.toLowerCase();
          const matchesSearch = title.includes(search);
          const show = matchesCategory && matchesSearch;

          movie.style.display = show ? 'block' : "none";
          if (show) hasVisibleMovie = true;
        });

        cat.style.display = hasVisibleMovie ? "block" : "none";
      });
    }

    searchInput.addEventListener("input", filterMovies);
    categorySelect.addEventListener("change", filterMovies);
  </script>