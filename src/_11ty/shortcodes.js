const linkFiles = {
  "html":  require('../_data/html.json'),
  "js": require('../_data/js.json'),
  "css": require('../_data/css.json'),
}
const { DateTime } = require('luxon');
const linkCard = (linkData) => {
    const image = linkData.image
    ? `/images${linkData.image}`
    : '/assets/img/blank.jpg';

    let template = `<li class="bookmark card">
<div>
<h3 class="card__heading">
<a href="${linkData.url}" class="card__link">
  ${linkData.title}
</a>
</h3>
  ${
    linkData.date
      ? `<p class="bookmark__meta"> posted on
            <time>${DateTime.fromISO(linkData.date).toFormat(
                'dd LLL yyyy'
              )}</time>
          ${linkData.author ? `by ${linkData.author}</p>` : ``}`
      : ''
  }

  ${
    linkData.description
      ? `<p class="card__desc">${linkData.description}</p>`
      : ''
  }`;

  if (linkData.tags) {
    template += `<div class="tag-container">Tags: <ul class="tags">`
    
      for (let i = 0; i < linkData.tags.length; i++) {
        const tag = linkData.tags[i];
        template += `<li class="tags__tag">
        <span class="tags__link tags__link--${tag}">
          ${tag}
        </span>
      </li>`
      }
    
    template += `</ul></div>`
    }
    template += `
</div>
<img src="${image}" class="bookmark__img" alt="" width="320" loading="lazy">
</li>`;
    
    return template
}

module.exports = {
  links: (prop, type) => {
    let links = linkFiles[type]
    let template = ` <ol class="bookmarks">`;
    let item
    let linkData

    if (typeof prop === "string") {
      for (let i = 0; i < links[prop].length; i++) {
        linkData = links[prop][i];
        template += linkCard(linkData);
      }
    } else {
      for (let i = 0; i < prop.length; i++) {
        const parts = prop[i].split('.');
        links = linkFiles[parts[0]]
        linkData = links[parts[1]].filter(link => link.id === parts[2])[0];
        template += linkCard(linkData);
      }
    }
    template += `</ol>`;

    return template;
  }
}
