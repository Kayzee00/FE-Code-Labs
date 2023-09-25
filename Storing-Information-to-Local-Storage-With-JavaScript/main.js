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
    const bookmarks = [];

    function createBookmark(e) {
      e.preventDefault();

      // add a new bookmarks to the bookmarks
      const title = bookmarkInput.value;
      const bookmark = {
        title: title
      };
      bookmarks.push(bookmark);
      fillBookmarksList(bookmarks);

      console.table(bookmarks);

      // save that bookmarks list to localstorage

      //const title = bookmarkInput.value;
      //const bookmark = document.createElement('a');
      //bookmark.className = 'bookmark';
      //bookmark.innerText = title;
      //bookmark.href = '#';
      //bookmark.target = '_blank';
      //bookmarksList.appendChild(bookmark);

      bookmarkForm.reset();
    }

    function fillBookmarksList(bookmarks = []) {
      const bookmarksHtml = bookmarks.map((bookmark) => {
        return`
        <a href="#" class="bookmark">
          ${bookmarks[i].title}
        </a>
        `;
      })



      //let bookmarksHtml = '';
      //for (let i =0; i < bookmarks.length; i++) {
        //bookmarksHtml += `
        //<a href="#" class="bookmark">
          //${bookmarks[i].title}
        //</a>
        //`;
      //}

      console.log(bookmarksHtml);
      bookmarksList.innerHTML = bookmarksHtml;
    }
    
    bookmarkForm.addEventListener('submit', createBookmark);