'use strict';

function createShoppingItem(item) {
  return $(`
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
  `);
}

function main() {
  $('button').on('click', function(evt) {
    evt.preventDefault();
    let userItem = $('input').val();
    $('.shopping-list').append(createShoppingItem(userItem));
    $('input').empty();
  });
}

$(main);