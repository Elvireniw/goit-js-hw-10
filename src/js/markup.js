export function createMarkup(array) {
    return array
      .map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`;
      })
      .join('');
}
  
export function createMarkupCat({
    0: {
      breeds: {
        0: { temperament, name, description },
      },
      url,
    },
  }) {
  return `
    <div class="cat-card-img">
    <img class="cat-img" src="${url}" alt="${name}"/></div>
    <div class="cat-info-value">
    <h1 class="title">${name}</h1>
    <h2>Description:</h2>
    <p class="description">${description}</p>
    <h2>Temperament:</h2>
    <p class="description">${temperament}</p></div>`;
    }