const apiResponse = await fetch('json/footer.json');

const content = await apiResponse.json();

function renderContent(content) {
  let contentHtml = "";
  for (const itemContent of content) {
    contentHtml += `
        <section class="footer-card">
      <div class="item-content">
        <h4 class="item-content__heading">${itemContent.heading}</h4>
      </div>
      <div class="item-content">
        <a class="item-content__paragraph" href="#">${itemContent.firstItem}</a>
      </div>
      <div class="item-content">
        <a class="item-content__paragraph" href="#">${itemContent.secondItem}</a>
      </div>
      <div class="item-content">
        <a class="item-content__paragraph" href="#"${itemContent.thirdItem}</a>
      </div>
      <div class="item-content">
        <a class="item-content__paragraph" href="#">${itemContent.fourthItem}</a>
      </div>
    </div>
    </section>
        `;
  }
  const listContent = document.querySelector(".footer-content__columns");
  listContent.innerHTML = contentHtml;
};

renderContent(content);