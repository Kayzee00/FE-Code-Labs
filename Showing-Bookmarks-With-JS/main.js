const body = document.body;
    const input = document.querySelector('input[type=text]');
    const overlay = document.querySelector('.overlay');

    function showFloater() {
      body.classList.add('show-floater');
    }

    function closeFloater() {
      if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
      }
    }

    input.addEventListener('focusin', showFloater);
    input.addEventListener('focusout', closeFloater);
    overlay.addEventListener('click', closeFloater);

    // =========================== //
    
    const bookmarksList = document.querySelector('.bookmarks-list');
    const bookmarkForm = document.querySelector('.bookmark-form');
    const bookmarkInput =document.querySelector('input[type=text');

    function createBookmark(e) {
      e.preventDefault();

      const title = bookmarkInput.value;
      const bookmark = document.createElement('a');
      bookmark.className = 'bookmark';
      bookmark.innerText = title;
      bookmark.href = '#';
      bookmark.target = '_blank';
      bookmarksList.appendChild(bookmark);

      bookmarkForm.reset();
    }
    
    bookmarkForm.addEventListener('submit', createBookmark);