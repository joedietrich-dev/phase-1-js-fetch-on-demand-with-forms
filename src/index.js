const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('input#searchByID');

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(({ title, summary }) => {
        console.log(title, summary)
        const titleArea = document.querySelector('section#movieDetails h4');
        const summaryArea = document.querySelector('section#movieDetails p');
        titleArea.innerText = title;
        summaryArea.innerText = summary;
      })
      .catch(err => {
        console.log(err);
      });
  });
}

document.addEventListener('DOMContentLoaded', init);