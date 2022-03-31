<script>
  export let book;
  import Icon from "svelte-awesome";
  import { amazon, globe } from "svelte-awesome/icons";
</script>

<div class="content">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {book.title}
      </p>
    </header>

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img src="{book.image}" alt="Book Cover" />
          </figure>
        </div>
        <div class="media-content">
          <div class="card-container has-text-right">
            <a class="icon" href={book.amazon_link.replace('booklogjp-default-22', 'cympfh-22')}><Icon data={amazon} /></a>
            <a class="icon" href={book.booklog_link}><Icon data={globe} /></a>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">{book.authors.join(" / ")}</p>
            <p class="card-footer-item">{book.publisher}</p>
            <p class="card-footer-item">Release:{book.release_date}</p>
          </footer>
          <footer class="card-footer">
            <p class="card-footer-item">{book.category_name}</p>
            <p class="card-footer-item">{book.tags.join(" / ")}</p>
            <p class="card-footer-item">Read:{book.read_datetime}</p>
          </footer>
        </div>
      </article>
    </div>
  </div>
</div>
