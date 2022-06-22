let commentForm = document.querySelector('.commentform');
let commentList = document.querySelector('.commentlist');
let commentField = document.querySelector('.commentfield');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};