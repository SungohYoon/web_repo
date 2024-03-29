/**
 * friend.js
 */

const friend = {
  name: "Hong",
  phone: "010-6314-7134",
  address: "대구 중구 100번지",
  showInfo: function () {
    return `이름은 ${this.name}이고, 연락처는 ${this.phone}`;
  },
};

function friendInfo(friend) {
  return `${friend.name}, ${friend.phone}, ${friend.address}`;
}

export { friendInfo };
